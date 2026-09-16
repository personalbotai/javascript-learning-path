// JavaScript Learning Path - Integrated Application Logic
// Depends on: MODULES from modules.js (loaded first)
// Features: responsive sidebar, mobile hamburger, sticky header, relative lesson fetch,
// code playground, per-module quiz, progress tracking (localStorage), live search.

(function () {
'use strict';

/* ============ State ============ */
let currentModuleId = 1;
let currentLessonId = 1;
let quizState = null;

const STORAGE_KEY = 'js-learning-path-progress-v2';

function loadProgress() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); }
  catch (e) { return {}; }
}
function saveProgress(p) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); } catch (e) {}
}

/* Migrate legacy v1 keys (flat numeric ids) */
(function migrateLegacy() {
  try {
    const legacy = JSON.parse(localStorage.getItem('javascript_progress') || '{}');
    if (Object.keys(legacy).length && !localStorage.getItem(STORAGE_KEY)) {
      const m = { _migrated: true };
      Object.keys(legacy).forEach(k => { m[k] = true; });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(m));
    }
  } catch (e) {}
})();

let progress = loadProgress();

/* ============ Helpers ============ */
function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function getModule(id) { return (window.MODULES || []).find(m => m.id === id); }
function getLesson(modId, lessonId) {
  const mod = getModule(modId);
  return mod ? mod.lessons.find(l => l.id === lessonId) : null;
}
function key(modId, lessonId) { return modId + '-' + lessonId; }
function isComplete(modId, lessonId) { return !!progress[key(modId, lessonId)]; }
function flatLessons() {
  const out = [];
  (window.MODULES || []).forEach(m => m.lessons.forEach(l => out.push({ moduleId: m.id, lesson: l })));
  return out;
}
function totalLessons() { return (window.MODULES || []).reduce((s, m) => s + m.lessons.length, 0); }
function doneCount() { return flatLessons().filter(x => isComplete(x.moduleId, x.lesson.id)).length; }
function moduleDone(modId) {
  const mod = getModule(modId);
  return mod ? mod.lessons.filter(l => isComplete(modId, l.id)).length : 0;
}
function debounce(fn, ms) {
  let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); };
}

/* ============ Progress ============ */
function updateProgress() {
  const total = totalLessons(), done = doneCount();
  const pct = total ? Math.round((done / total) * 100) : 0;
  const t1 = document.getElementById('course-progress-text');
  const f1 = document.getElementById('progress-fill');
  const m1 = document.getElementById('mobile-progress');
  if (t1) t1.textContent = pct + '%';
  if (f1) f1.style.width = pct + '%';
  if (m1) m1.textContent = pct + '%';
  const sub = document.querySelector('.brand-sub');
  if (sub) sub.textContent = (window.MODULES || []).length + ' Modul · ' + total + ' Pelajaran · ' + done + ' selesai';
}
function resetProgress() {
  if (!confirm('Reset semua progress belajar?')) return;
  progress = {}; saveProgress(progress);
  renderNav(); updateCompleteButtons();
}

/* ============ Sidebar ============ */
function lessonIcon(modId, l) {
  if (isComplete(modId, l.id)) return '✅';
  if (l.project) return '🚀';
  return '○';
}
function renderNav(filter) {
  const nav = document.getElementById('lessons-nav');
  if (!nav) return;
  const q = (filter || '').trim().toLowerCase();
  nav.innerHTML = (window.MODULES || []).map(mod => {
    let lessons = mod.lessons;
    if (q) lessons = lessons.filter(l => l.title.toLowerCase().includes(q));
    if (q && !lessons.length && !mod.title.toLowerCase().includes(q)) return '';
    const done = moduleDone(mod.id), total = mod.lessons.length;
    const pct = total ? Math.round((done / total) * 100) : 0;
    const expanded = (mod.id === currentModuleId || q) ? 'expanded' : '';
    return `
    <div class="module-item" data-module-id="${mod.id}">
      <div class="module-header ${mod.id === currentModuleId ? 'active' : ''}" onclick="toggleModule(${mod.id})" role="button" tabindex="0">
        <span class="module-title"><i class="${mod.icon || 'fas fa-folder'}"></i>${esc(mod.title)}</span>
        <span class="module-count">${done}/${total}</span>
      </div>
      <div class="module-progress-mini"><div class="module-progress-fill" style="width:${pct}%"></div></div>
      <div class="module-lessons ${expanded}" id="module-${mod.id}">
        ${lessons.map(l => `
          <div class="lesson-item ${mod.id === currentModuleId && l.id === currentLessonId ? 'active' : ''} ${isComplete(mod.id, l.id) ? 'completed' : ''}"
               onclick="loadLesson(${mod.id}, ${l.id})" role="button" tabindex="0">
            <span class="lesson-icon">${lessonIcon(mod.id, l)}</span>
            <span class="lesson-text">${esc(l.title)}</span>
            <span class="lesson-progress">${esc(l.duration || '')}</span>
          </div>`).join('')}
      </div>
    </div>`;
  }).join('');
  updateProgress();
}
function toggleModule(modId) {
  currentModuleId = modId;
  const el = document.getElementById('module-' + modId);
  if (el) el.classList.toggle('expanded');
  syncModuleHeaders();
}
function syncModuleHeaders() {
  document.querySelectorAll('.module-item').forEach(item => {
    const id = parseInt(item.dataset.moduleId, 10);
    const h = item.querySelector('.module-header');
    const list = item.querySelector('.module-lessons');
    if (h) h.classList.toggle('active', id === currentModuleId);
    if (list && !document.getElementById('lesson-search').value) {
      list.classList.toggle('expanded', id === currentModuleId);
    }
  });
}

/* ============ Lesson ============ */
const SNIPPETS = {
  'pengenalan-dan-sejarah': 'console.log("JavaScript lahir tahun 1995!");\nconsole.log("Dibuat oleh Brendan Eich dalam 10 hari.");',
  'setup-environment': 'console.log("Node: jalankan `node -v` di terminal");\nconsole.log("Browser: buka DevTools dengan F12");',
  'variabel-dan-tipe-data': 'const nama = "Sinta";\nlet umur = 25;\nconsole.log(`Nama: ${nama}, Umur: ${umur}`);\nconsole.log(typeof nama, typeof umur);',
  'operator-dan-ekspresi': 'const a = 10, b = 3;\nconsole.log("a + b =", a + b);\nconsole.log("a === b:", a === b);\nconsole.log("nullish:", null ?? "default");',
  'kontrol-alur-if-else': 'const umur = 20;\nif (umur >= 18) {\n  console.log("Dewasa");\n} else {\n  console.log("Anak-anak");\n}',
  'perulangan': 'for (let i = 0; i < 3; i++) {\n  console.log("i =", i);\n}',
  'array-dasar-dan-metode': 'const arr = [1, 2, 3];\narr.push(4);\nconsole.log(arr);\nconsole.log("length:", arr.length);',
  'array-higher-order-functions': 'const angka = [1, 2, 3, 4, 5];\nconsole.log(angka.map(x => x * x));\nconsole.log(angka.filter(x => x > 2));\nconsole.log(angka.reduce((a, b) => a + b, 0));',
  'async-await-asynchronous': 'async function main() {\n  console.log("Start");\n  await new Promise(r => setTimeout(r, 50));\n  console.log("Selesai!");\n}\nmain();',
  'fetch-api-http-requests': 'async function getData() {\n  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");\n  const data = await res.json();\n  console.log(data.title);\n}\ngetData();',
  'class-dan-object': 'class User {\n  constructor(nama) { this.nama = nama; }\n  sapa() { return `Halo, ${this.nama}!`; }\n}\nconsole.log(new User("Sinta").sapa());'
};
function defaultSnippet(slug) {
  return SNIPPETS[slug] || '// Tulis kode JavaScript di sini...\nconsole.log("Hello, JavaScript!");';
}

async function loadLesson(modId, lessonId) {
  const mod = getModule(modId), lesson = getLesson(modId, lessonId);
  if (!mod || !lesson) return;
  currentModuleId = modId; currentLessonId = lessonId; quizState = null;

  const bc = document.getElementById('breadcrumb');
  const title = document.getElementById('lesson-title');
  const meta = document.getElementById('lesson-meta');
  const body = document.getElementById('lesson-content');

  if (bc) bc.innerHTML = '<i class="fas fa-layer-group"></i> Modul ' + mod.id + ': ' + esc(mod.title);
  if (title) title.textContent = lesson.title;
  if (meta) meta.innerHTML =
    '<div class="lesson-stats">' +
    '<span class="stat-badge"><i class="far fa-clock"></i> ' + esc(lesson.duration || '') + '</span>' +
    (lesson.project ? '<span class="stat-badge project-badge"><i class="fas fa-rocket"></i> Project</span>' : '') +
    '<span class="stat-badge">' + moduleDone(modId) + '/' + mod.lessons.length + ' modul ini</span></div>';
  if (body) body.innerHTML = '<div class="loading"><i class="fas fa-spinner fa-spin"></i> Memuat materi...</div>';

  let html = '';
  try {
    const resp = await fetch('lessons/' + lesson.slug + '.md', { cache: 'no-store' });
    if (resp.ok) {
      const md = await resp.text();
      html = (typeof marked !== 'undefined' && marked.parse) ? marked.parse(md) : '<pre>' + esc(md) + '</pre>';
    } else {
      html = '<div class="notice">Materi <code>' + esc(lesson.slug) + '.md</code> belum tersedia.</div>';
    }
  } catch (e) {
    html = '<div class="notice error">Gagal memuat materi. Periksa koneksi lalu coba lagi.</div>';
  }
  if (body) body.innerHTML = html;

  const ed = document.getElementById('code-editor');
  if (ed) ed.value = defaultSnippet(lesson.slug);
  const out = document.getElementById('output');
  if (out) out.innerHTML = '<span class="text-muted">// Output akan muncul di sini — tekan Run ▶</span>';
  const vm = document.getElementById('validation-msg');
  if (vm) vm.className = 'validation-msg hidden';

  renderModuleQuiz(modId);
  updateNavButtons(); updateCompleteButtons(); renderNav(preserveSearch()); closeSidebarMobile();
  try { history.replaceState(null, '', '#m' + modId + '-l' + lessonId); } catch (e) {}
  const main = document.getElementById('main-content');
  if (main) main.scrollTop = 0;
}

/* ============ Quiz ============ */
async function renderModuleQuiz(modId) {
  const sec = document.getElementById('quiz-section');
  const box = document.getElementById('quiz-content');
  const res = document.getElementById('quiz-result');
  if (!sec || !box) return;
  sec.style.display = 'none'; box.innerHTML = '';
  if (res) res.innerHTML = '';
  const mod = getModule(modId);
  if (!mod || !mod.quiz || !mod.quiz.questionCount) return;
  try {
    const resp = await fetch('quizzes/module-' + modId + '.json', { cache: 'no-store' });
    if (!resp.ok) return;
    const data = await resp.json();
    if (!data.questions || !data.questions.length) return;
    quizState = { moduleId: modId, questions: data.questions.slice(0, 5), passing: data.passingScore || 70 };
    sec.style.display = 'block';
    box.innerHTML = '<p class="quiz-intro"><strong>Kuis Modul ' + modId + '</strong> — ' +
      quizState.questions.length + ' soal. Kelulusan: ' + quizState.passing + '%.</p>' +
      quizState.questions.map((q, i) => `
        <div class="quiz-q" data-q="${i}">
          <p class="quiz-question">${i + 1}. ${esc(q.question)}</p>
          <div class="quiz-options">
            ${q.options.map((opt, j) => `
              <label class="quiz-option"><input type="radio" name="mq-${i}" value="${j}"><span>${esc(opt)}</span></label>`).join('')}
          </div>
        </div>`).join('');
  } catch (e) {}
}
function checkQuiz() {
  const res = document.getElementById('quiz-result');
  if (!quizState) return;
  let correct = 0;
  quizState.questions.forEach((q, i) => {
    const sel = document.querySelector('input[name="mq-' + i + '"]:checked');
    const val = sel ? parseInt(sel.value, 10) : -1;
    if (val === q.correct) correct++;
    const wrap = document.querySelector('.quiz-q[data-q="' + i + '"]');
    if (wrap) wrap.querySelectorAll('.quiz-option').forEach((lab, j) => {
      lab.classList.remove('correct', 'incorrect');
      if (j === q.correct) lab.classList.add('correct');
      else if (j === val) lab.classList.add('incorrect');
    });
  });
  const pct = Math.round((correct / quizState.questions.length) * 100);
  const pass = pct >= quizState.passing;
  if (res) res.innerHTML = '<div class="quiz-result ' + (pass ? 'pass' : 'fail') + '">' +
    '<i class="fas ' + (pass ? 'fa-trophy' : 'fa-redo') + '"></i> ' +
    'Skor: ' + correct + '/' + quizState.questions.length + ' (' + pct + '%) — ' +
    (pass ? 'Lulus! 🎉' : 'Belum lulus, coba lagi.') + '</div>';
  if (pass) { try { localStorage.setItem('quiz_passed_' + quizState.moduleId, 'true'); } catch (e) {} }
}

/* ============ Playground ============ */
function runCode() {
  const ed = document.getElementById('code-editor');
  const out = document.getElementById('output');
  const vm = document.getElementById('validation-msg');
  if (!ed || !out) return;
  const logs = [];
  const oLog = console.log, oErr = console.error, oWarn = console.warn;
  const fmt = a => {
    if (typeof a === 'string') return a;
    if (typeof a === 'object') { try { return JSON.stringify(a); } catch (e) { return String(a); } }
    return String(a);
  };
  console.log = (...a) => logs.push(a.map(fmt).join(' '));
  console.error = (...a) => logs.push('⚠ ' + a.map(fmt).join(' '));
  console.warn = (...a) => logs.push('⚠ ' + a.map(fmt).join(' '));
  try {
    new Function('"use strict";\n' + ed.value)();
    out.innerHTML = '<span class="output-ok">' + esc(logs.join('\n') || '(tidak ada output — coba console.log(...))') + '</span>';
    if (vm) { vm.className = 'validation-msg success'; vm.innerHTML = '<i class="fas fa-check-circle"></i> Kode berjalan tanpa error. 🎉'; }
    try {
      const n = parseInt(localStorage.getItem('js-exec-count') || '0', 10) + 1;
      localStorage.setItem('js-exec-count', String(n));
    } catch (e) {}
  } catch (e) {
    out.innerHTML = '<span class="output-err">❌ ' + esc(e.name + ': ' + e.message) + '</span>';
    if (vm) { vm.className = 'validation-msg error'; vm.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Ada error — baca pesan di atas lalu perbaiki.'; }
  } finally {
    console.log = oLog; console.error = oErr; console.warn = oWarn;
  }
}
function resetCode() {
  const l = getLesson(currentModuleId, currentLessonId);
  const ed = document.getElementById('code-editor');
  if (ed) ed.value = defaultSnippet(l ? l.slug : '');
  const out = document.getElementById('output');
  if (out) out.innerHTML = '<span class="text-muted">// Output akan muncul di sini — tekan Run ▶</span>';
}

/* ============ Prev / Next / Complete ============ */
function flatIndex() {
  const f = flatLessons();
  return f.findIndex(x => x.moduleId === currentModuleId && x.lesson.id === currentLessonId);
}
function updateNavButtons() {
  const f = flatLessons(), i = flatIndex();
  const p = document.getElementById('prev-btn'), n = document.getElementById('next-btn');
  if (p) p.disabled = i <= 0;
  if (n) n.disabled = i < 0 || i >= f.length - 1;
}
function nextLesson() {
  const f = flatLessons(), i = flatIndex();
  if (i >= 0 && i < f.length - 1) loadLesson(f[i + 1].moduleId, f[i + 1].lesson.id);
}
function prevLesson() {
  const f = flatLessons(), i = flatIndex();
  if (i > 0) loadLesson(f[i - 1].moduleId, f[i - 1].lesson.id);
}
function updateCompleteButtons() {
  const done = isComplete(currentModuleId, currentLessonId);
  const b1 = document.getElementById('complete-btn'), b2 = document.getElementById('completed-btn');
  if (b1) b1.style.display = done ? 'none' : '';
  if (b2) b2.style.display = done ? '' : 'none';
}
function markComplete() {
  progress[key(currentModuleId, currentLessonId)] = true;
  saveProgress(progress);
  updateCompleteButtons(); renderNav(preserveSearch());
  const f = flatLessons(), i = flatIndex();
  if (i >= 0 && i < f.length - 1) setTimeout(() => loadLesson(f[i + 1].moduleId, f[i + 1].lesson.id), 600);
}

/* ============ Mobile ============ */
function closeSidebarMobile() {
  if (window.innerWidth > 768) return;
  const sb = document.getElementById('sidebar'), ov = document.getElementById('sidebarOverlay');
  if (sb) sb.classList.remove('open');
  if (ov) ov.classList.remove('active');
}
function initMobileMenu() {
  const btn = document.getElementById('menuToggle');
  const sb = document.getElementById('sidebar'), ov = document.getElementById('sidebarOverlay');
  if (btn && sb) btn.addEventListener('click', () => {
    sb.classList.toggle('open');
    if (ov) ov.classList.toggle('active', sb.classList.contains('open'));
  });
  if (ov && sb) ov.addEventListener('click', closeSidebarMobile);
}

/* ============ Search ============ */
function preserveSearch() {
  const s = document.getElementById('lesson-search');
  return s ? s.value : '';
}
function initSearch() {
  const s = document.getElementById('lesson-search');
  if (!s) return;
  s.addEventListener('input', debounce(() => renderNav(s.value), 200));
}

/* ============ Boot (deep-link aware) ============ */
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu(); initSearch();
  renderNav(); updateProgress();
  let m = 1, l = 1, ok = false;
  try {
    const h = location.hash.match(/#m(\d+)-l(\d+)/);
    if (h && getLesson(parseInt(h[1], 10), parseInt(h[2], 10))) {
      m = parseInt(h[1], 10); l = parseInt(h[2], 10); ok = true;
    }
  } catch (e) {}
  if (!ok && (window.MODULES || []).length && MODULES[0].lessons.length) {
    m = MODULES[0].id; l = MODULES[0].lessons[0].id;
  }
  loadLesson(m, l);
});

window.loadLesson = loadLesson; window.toggleModule = toggleModule;
window.nextLesson = nextLesson; window.prevLesson = prevLesson;
window.markComplete = markComplete; window.resetProgress = resetProgress;
window.runCode = runCode; window.resetCode = resetCode; window.checkQuiz = checkQuiz;

})();
