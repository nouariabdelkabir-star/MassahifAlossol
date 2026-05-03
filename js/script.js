// ============================================================
// 1. إعدادات PDF.js
// ============================================================
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@2.16.105/build/pdf.worker.min.js';

// ============================================================
// 2. قائمة المصاحف
// ============================================================
const mushafs = [
    { name: "1️⃣  قالون بالقصر والإسكان",    id: "q1", path: "pdfs/qalun1.pdf", startPage: 2 },
    { name: "1️⃣ قالون بالقصر والصلة",      id: "q2", path: "pdfs/qalun2.pdf", startPage: 2 },
    { name: "1️⃣ قالون بالتوسط والإسكان",   id: "q3", path: "pdfs/qalun3.pdf", startPage: 2 },
    { name: "1️⃣ قالون بالتوسط والصلة",     id: "q4", path: "pdfs/qalun4.pdf", startPage: 2 },
    { name: "1️⃣ ورش بقصر البدل مع الفتح",     id: "q5", path: "pdfs/warch1.pdf", startPage: 2 },
    { name: "1️⃣ ورش بتوسط البدل مع التقليل",     id: "q6", path: "pdfs/warch2.pdf", startPage: 2 },
    { name: "1️⃣ ورش بإشباع البدل مع الفتح",     id: "q7", path: "pdfs/warch3.pdf", startPage: 2 },
    { name: "1️⃣ ورش بإشباع البدل مع التقليل",     id: "q8", path: "pdfs/warch4.pdf", startPage: 2 },
    { name: "1️⃣ ورش من طريق الأصبهاني ",     id: "q9", path: "pdfs/asbahani.pdf", startPage: 2 },

    { name: "2️⃣ قراءة ابن كثير",     id: "q10", path: "pdfs/ibnkatir.pdf", startPage: 2 },
    { name: "2️⃣ البزي",     id: "q11", path: "pdfs/bazzi.pdf", startPage: 2 },
    { name: "2️⃣ قنبل",     id: "q12", path: "pdfs/konboul.pdf", startPage: 2 },

    { name: "3️⃣ قراءة أبي عمرو البصري ",     id: "q13", path: "pdfs/abouamralbasri.pdf", startPage: 2 },
    { name: "3️⃣ الدوري بالتوسط",     id: "q14", path: "pdfs/douritawasot.pdf", startPage: 2 },
    { name: "3️⃣ الدوري بالقصر",     id: "q15", path: "pdfs/dourikaser.pdf", startPage: 2 },
    { name: "3️⃣ السوسي",     id: "q16", path: "pdfs/soussi.pdf", startPage: 2 },

    { name: "4️⃣ قراءة ابن عامر الشامي  ",     id: "q17", path: "pdfs/ibenamir.pdf", startPage: 2 },
    { name: "4️⃣ هشام",     id: "q18", path: "pdfs/hicham.pdf", startPage: 2 },
    { name: "4️⃣ ابن ذكوان",     id: "q19", path: "pdfs/ibenthakwan.pdf", startPage: 2 },

    { name: "5️⃣ قراءة عاصم  ",     id: "q20", path: "pdfs/assim.pdf", startPage: 2 },
    { name: "5️⃣ شعبة ",     id: "q21", path: "pdfs/choaaba.pdf", startPage: 2 },
    { name: "5️⃣ حفص ",     id: "q22", path: "pdfs/hafes.pdf", startPage: 2 },

    { name: "6️⃣ قراءة حمزة ",     id: "q23", path: "pdfs/hamza.pdf", startPage: 2 },
    { name: "6️⃣ خلف بالسكت على ال وشيء",     id: "q24", path: "pdfs/khalafsakt1.pdf", startPage: 2 },
    { name: "6️⃣ خلف بالسكت على ال وشيء والمفصول",     id: "q25", path: "pdfs/khalafsakt2.pdf", startPage: 2 },
    { name: "6️⃣ خلاد بالسكت على ال وشيء ",     id: "q26", path: "pdfs/khalladsakt.pdf", startPage: 2 },
    { name: "6️⃣ خلاد بلا سكت",     id: "q27", path: "pdfs/khalladbilasakt.pdf", startPage: 2 },
    
    { name: "7️⃣ قراءة الكسائي بالمذهب الإجمالي ",     id: "q28", path: "pdfs/kissai.pdf", startPage: 2 },
    { name: "7️⃣ الليث ",     id: "q29", path: "pdfs/aboulharit.pdf", startPage: 2 },
    { name: "7️⃣ الدوري كسائي ",     id: "q30", path: "pdfs/dourikissai.pdf", startPage: 2 },

    { name: "8️⃣ قراءة ابو جعفر ",     id: "q31", path: "pdfs/aboujaafar.pdf", startPage: 2 },
    { name: "8️⃣ ابن وردان",     id: "q32", path: "pdfs/ibnwirdan.pdf", startPage: 2 },
    { name: "8️⃣ ابن جماز",     id: "q33", path: "pdfs/ibnjamaz.pdf", startPage: 2 },
    
    { name: "9️⃣ قراءة يعقوب ",     id: "q34", path: "pdfs/yaakoub.pdf", startPage: 2 },
    { name: "9️⃣  رويس",     id: "q35", path: "pdfs/rowais.pdf", startPage: 2 },
    { name: "9️⃣  روح",     id: "q36", path: "pdfs/rawh.pdf", startPage: 2 },

    { name: "🔟 قراءة خلف العاشر ",     id: "q37", path: "pdfs/khalaf10.pdf", startPage: 2 },
    { name: "🔟 إسحاق ",     id: "q38", path: "pdfs/ishak.pdf", startPage: 2 },
    { name: "🔟 إدريس",     id: "q39", path: "pdfs/idriss.pdf", startPage: 2 },

];



// ============================================================
// 3. فهرس السور (اختصاراً، أضف باقي السور حسب الحاجة)
// ============================================================
const surahs = [
    { number: 1, name: "الفاتحة", page: 1 },
    { number: 2, name: "البقرة", page: 2 },
    { number: 3, name: "آل عمران", page: 50 },
    { number: 4, name: "النساء", page: 77 },
    { number: 5, name: "المائدة", page: 106 },
    { number: 6, name: "الأنعام", page: 128 },
    { number: 7, name: "الأعراف", page: 151 },
    { number: 8, name: "الأنفال", page: 177 },
    { number: 9, name: "التوبة", page: 187 },
    { number: 10, name: "يونس", page: 208 },
    { number: 11, name: "هود", page: 221 },
    { number: 12, name: "يوسف", page: 235 },
    { number: 13, name: "الرعد", page: 249 },
    { number: 14, name: "إبراهيم", page: 255 },
    { number: 15, name: "الحجر", page: 262 },
    { number: 16, name: "النحل", page: 267 },
    { number: 17, name: "الإسراء", page: 282 },
    { number: 18, name: "الكهف", page: 293 },
    { number: 19, name: "مريم", page: 305 },
    { number: 20, name: "طه", page: 312 },
    { number: 21, name: "الأنبياء", page: 322 },
    { number: 22, name: "الحج", page: 332 },
    { number: 23, name: "المؤمنون", page: 342 },
    { number: 24, name: "النور", page: 350 },
    { number: 25, name: "الفرقان", page: 359 },
    { number: 26, name: "الشعراء", page: 367 },
    { number: 27, name: "النمل", page: 377 },
    { number: 28, name: "القصص", page: 385 },
    { number: 29, name: "العنكبوت", page: 396 },
    { number: 30, name: "الروم", page: 404 },
    { number: 31, name: "لقمان", page: 411 },
    { number: 32, name: "السجدة", page: 415 },
    { number: 33, name: "الأحزاب", page: 418 },
    { number: 34, name: "سبأ", page: 428 },
    { number: 35, name: "فاطر", page: 434 },
    { number: 36, name: "يس", page: 440 },
    { number: 37, name: "الصافات", page: 446 },
    { number: 38, name: "ص", page: 453 },
    { number: 39, name: "الزمر", page: 458 },
    { number: 40, name: "غافر", page: 467 },
    { number: 41, name: "فصلت", page: 477 },
    { number: 42, name: "الشورى", page: 483 },
    { number: 43, name: "الزخرف", page: 489 },
    { number: 44, name: "الدخان", page: 496 },
    { number: 45, name: "الجاثية", page: 499 },
    { number: 46, name: "الأحقاف", page: 503 },
    { number: 47, name: "محمد", page: 507 },
    { number: 48, name: "الفتح", page: 511 },
    { number: 49, name: "الحجرات", page: 515 },
    { number: 50, name: "ق", page: 518 },
    { number: 51, name: "الذاريات", page: 520 },
    { number: 52, name: "الطور", page: 523 },
    { number: 53, name: "النجم", page: 526 },
    { number: 54, name: "القمر", page: 528 },
    { number: 55, name: "الرحمن", page: 531 },
    { number: 56, name: "الواقعة", page: 534 },
    { number: 57, name: "الحديد", page: 537 },
    { number: 58, name: "المجادلة", page: 542 },
    { number: 59, name: "الحشر", page: 545 },
    { number: 60, name: "الممتحنة", page: 549 },
    { number: 61, name: "الصف", page: 551 },
    { number: 62, name: "الجمعة", page: 553 },
    { number: 63, name: "المنافقون", page: 554 },
    { number: 64, name: "التغابن", page: 556 },
    { number: 65, name: "الطلاق", page: 558 },
    { number: 66, name: "التحريم", page: 560 },
    { number: 67, name: "الملك", page: 562 },
    { number: 68, name: "القلم", page: 564 },
    { number: 69, name: "الحاقة", page: 566 },
    { number: 70, name: "المعارج", page: 568 },
    { number: 71, name: "نوح", page: 570 },
    { number: 72, name: "الجن", page: 572 },
    { number: 73, name: "المزمل", page: 574 },
    { number: 74, name: "المدثر", page: 575 },
    { number: 75, name: "القيامة", page: 577 },
    { number: 76, name: "الإنسان", page: 578 },
    { number: 77, name: "المرسلات", page: 580 },
    { number: 78, name: "النبأ", page: 582 },
    { number: 79, name: "النازعات", page: 583 },
    { number: 80, name: "عبس", page: 585 },
    { number: 81, name: "التكوير", page: 586 },
    { number: 82, name: "الانفطار", page: 587 },
    { number: 83, name: "المطففين", page: 588 },
    { number: 84, name: "الانشقاق", page: 589 },
    { number: 85, name: "البروج", page: 590 },
    { number: 86, name: "الطارق", page: 591 },
    { number: 87, name: "الأعلى", page: 592 },
    { number: 88, name: "الغاشية", page: 592 },
    { number: 89, name: "الفجر", page: 593 },
    { number: 90, name: "البلد", page: 594 },
    { number: 91, name: "الشمس", page: 595 },
    { number: 92, name: "الليل", page: 595 },
    { number: 93, name: "الضحى", page: 596 },
    { number: 94, name: "الشرح", page: 596 },
    { number: 95, name: "التين", page: 597 },
    { number: 96, name: "العلق", page: 597 },
    { number: 97, name: "القدر", page: 598 },
    { number: 98, name: "البينة", page: 598 },
    { number: 99, name: "الزلزلة", page: 599 },
    { number: 100, name: "العاديات", page: 599 },
    { number: 101, name: "القارعة", page: 600 },
    { number: 102, name: "التكاثر", page: 600 },
    { number: 103, name: "العصر", page: 601 },
    { number: 104, name: "الهمزة", page: 601 },
    { number: 105, name: "الفيل", page: 601 },
    { number: 106, name: "قريش", page: 602 },
    { number: 107, name: "الماعون", page: 602 },
    { number: 108, name: "الكوثر", page: 602 },
    { number: 109, name: "الكافرون", page: 603 },
    { number: 110, name: "النصر", page: 603 },
    { number: 111, name: "المسد", page: 603 },
    { number: 112, name: "الإخلاص", page: 604 },
    { number: 113, name: "الفلق", page: 604 },
    { number: 114, name: "الناس", page: 604 }
];

// ============================================================
// 4. المتغيرات العامة
// ============================================================
const PAGE_STORAGE = "quran_common_page";
let currentMushafId = null;
let currentPage = 1;
let mainIframe = null;

let compareMode = false;
let compareMushafId = null;
let compareIframe = null;

// ============================================================
// 5. دوال مساعدة
// ============================================================
function getRealPage(displayPage, startPage) {
    return displayPage + (startPage || 3) - 1;
}

//*function buildViewerUrl(pdfPath, realPage) {
   // const baseUrl = "https://massahifalossol-nouari.github.io/MassahifAlossol/";
  //  const fullPath = window.location.origin + '/' + pdfPath;
  //  const fileName = pdfPath.split('/').pop(); // qalun1.pdf
  //  const directUrl = `https://massahifalossol-nouari.github.io/MassahifAlossol/pdfs/${fileName}`;
 //   const encodedPath = encodeURIComponent(fullPath);
 //   return `pdfjs/web/viewer.html?file=${encodedPath}#page=${realPage}`;
//}
function buildViewerUrl(pdfPath, realPage) {
    // 1. استخرج اسم ملف PDF من المسار القديم (مثل: "qalun1.pdf")
    const fileName = pdfPath.split('/').pop();

    // 2. قم ببناء المسار الصحيح والكامل لملف PDF على الخادم
    //    لاحظ أنه تمت إضافة مجلد "MassahifAlossol/" بعد النطاق.
    const correctPdfUrl = `https://massahifalossol-nouari.github.io/MassahifAlossol/pdfs/${fileName}`;

    // 3. قم بترميز الرابط (URL Encoding) ليكون صالحاً للاستخدام
    const encodedPath = encodeURIComponent(correctPdfUrl);

    // 4. أعد بناء رابط عارض PDF.js مع الرابط المُصحّح
    return `pdfjs/web/viewer.html?file=${encodedPath}#page=${realPage}`;
}


function savePage(page) { localStorage.setItem(PAGE_STORAGE, page); }
function getSavedPage() {
    const p = localStorage.getItem(PAGE_STORAGE);
    return p ? parseInt(p) : 1;
}

// ============================================================
// 6. تحميل المصحف
// ============================================================
function loadMainMushaf(mushafId, pageNum) {
    const mush = mushafs.find(m => m.id === mushafId);
    if (!mush) return;
    const real = getRealPage(pageNum, mush.startPage);
    const url = buildViewerUrl(mush.path, real);
    if (mainIframe) mainIframe.src = url;
}

function loadSingleMushaf(mushafId, pageNum) {
    const mush = mushafs.find(m => m.id === mushafId);
    if (!mush) return;
    const container = document.getElementById('viewer-container');
    const real = getRealPage(pageNum, mush.startPage);
    const url = buildViewerUrl(mush.path, real);
    container.innerHTML = `<iframe id="main-viewer" src="${url}"></iframe>`;
    mainIframe = document.getElementById('main-viewer');
}

function switchMushaf(mushafId) {
    currentMushafId = mushafId;
    currentPage = getSavedPage();
    if (compareMode) {
        loadMainMushaf(currentMushafId, currentPage);
    } else {
        loadSingleMushaf(currentMushafId, currentPage);
    }
    document.querySelectorAll('.mushaf-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.id === mushafId) btn.classList.add('active');
    });
    document.getElementById('pageInput').value = currentPage;
}

// ============================================================
// 7. التنقل بين الصفحات
// ============================================================
function goToPage(page) {
    if (page < 1) page = 1;
    if (page > 640) page = 640;
    currentPage = page;
    savePage(currentPage);
    document.getElementById('pageInput').value = currentPage;
    if (compareMode) {
        if (currentMushafId) loadMainMushaf(currentMushafId, currentPage);
        if (compareMushafId) loadCompareMushaf(compareMushafId, currentPage);
    } else {
        if (currentMushafId) loadSingleMushaf(currentMushafId, currentPage);
    }
}
function nextPage() { goToPage(currentPage + 1); }
function prevPage() { goToPage(currentPage - 1); }

// ============================================================
// 8. المقارنة
// ============================================================
function loadCompareMushaf(mushafId, pageNum) {
    const mush = mushafs.find(m => m.id === mushafId);
    if (!mush || !compareIframe) return;
    const real = getRealPage(pageNum, mush.startPage);
    compareIframe.src = buildViewerUrl(mush.path, real);
    const label = document.querySelector('.compare-split > div:last-child .compare-label');
    if (label) label.innerText = `📖 ${mush.name}`;
}

function enableCompareMode() {
    compareMode = true;
    const container = document.getElementById('viewer-container');
    const currentMush = mushafs.find(m => m.id === currentMushafId);
    const currentMushName = currentMush ? currentMush.name : 'المصحف الرئيسي';
    container.innerHTML = `
        <div class="compare-split">
            <div>
                <div class="compare-label">📖 ${currentMushName}</div>
                <iframe id="main-compare-frame" src="about:blank"></iframe>
            </div>
            <div>
                <div class="compare-label">📖 اختر مصحفاً للمقارنة</div>
                <iframe id="compare-frame" src="about:blank"></iframe>
            </div>
        </div>
    `;
    mainIframe = document.getElementById('main-compare-frame');
    compareIframe = document.getElementById('compare-frame');
    if (currentMushafId) loadMainMushaf(currentMushafId, currentPage);
    document.getElementById('compareSelectPanel').classList.add('open');
    const btn = document.getElementById('compareBtn');
    btn.classList.add('active');
    btn.innerText = '❌ إلغاء';
}

function disableCompareMode() {
    compareMode = false;
    compareMushafId = null;
    loadSingleMushaf(currentMushafId, currentPage);
    const btn = document.getElementById('compareBtn');
    btn.classList.remove('active');
    btn.innerText = '📊 مقارنة';
    document.getElementById('compareSelectPanel').classList.remove('open');
}

function toggleCompareMode() {
    if (compareMode) disableCompareMode();
    else enableCompareMode();
}

function setCompareMushaf(mushafId) {
    compareMushafId = mushafId;
    loadCompareMushaf(mushafId, currentPage);
    document.getElementById('compareSelectPanel').classList.remove('open');
}

// ============================================================
// 9. بناء القوائم
// ============================================================
function buildMushafList() {
    const container = document.getElementById('mushaf-list');
    container.innerHTML = '';
    mushafs.forEach(m => {
        const btn = document.createElement('button');
        btn.className = 'mushaf-btn';
        btn.innerText = m.name;
        btn.dataset.id = m.id;
        btn.onclick = () => switchMushaf(m.id);
        container.appendChild(btn);
    });
    if (mushafs.length) switchMushaf(mushafs[0].id);
}

function buildSurahList() {
    const container = document.getElementById('surahList');
    container.innerHTML = '';
    surahs.forEach(s => {
        const div = document.createElement('div');
        div.className = 'surah-item';
        div.innerHTML = `
            <span class="surah-number">${s.number}</span>
            <span class="surah-name">${s.name}</span>
            <span class="surah-page">صفحة ${s.page}</span>
        `;
        div.onclick = () => { goToPage(s.page); closeSurahPanel(); };
        container.appendChild(div);
    });
}

function buildCompareMushafList() {
    const container = document.getElementById('compareMushafList');
    container.innerHTML = '';
    mushafs.forEach(m => {
        if (m.id === currentMushafId) return;
        const div = document.createElement('div');
        div.className = 'compare-mushaf-item';
        div.innerHTML = `<span>📖 ${m.name}</span>`;
        div.onclick = () => setCompareMushaf(m.id);
        container.appendChild(div);
    });
}

// ============================================================
// 10. اللوحات المنبثقة
// ============================================================
function openSurahPanel() { document.getElementById('surahPanel').classList.add('open'); }
function closeSurahPanel() { document.getElementById('surahPanel').classList.remove('open'); }
function closeCompareSelection() { document.getElementById('compareSelectPanel').classList.remove('open'); }

// ============================================================
// 11. وظائف القائمة الجانبية للهواتف
// ============================================================
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    
    if (!menuToggle || !sidebar) return;
    
    // إنشاء طبقة خلفية داكنة
    let overlay = document.querySelector('.sidebar-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'sidebar-overlay';
        document.body.appendChild(overlay);
    }
    
    function openMenu() {
        sidebar.classList.add('open');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeMenu() {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        if (sidebar.classList.contains('open')) closeMenu();
        else openMenu();
    });
    
    overlay.addEventListener('click', closeMenu);
    
    // إغلاق القائمة عند اختيار مصحف
    const observer = new MutationObserver(() => {
        const mushafBtns = document.querySelectorAll('.mushaf-btn');
        mushafBtns.forEach(btn => {
            btn.removeEventListener('click', closeMenu);
            btn.addEventListener('click', closeMenu);
        });
    });
    observer.observe(document.getElementById('mushaf-list'), { childList: true });
}

// ============================================================
// 12. التشغيل
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    buildMushafList();
    buildSurahList();
    buildCompareMushafList();
    initMobileMenu();
    
    document.getElementById('prevBtn').onclick = prevPage;
    document.getElementById('nextBtn').onclick = nextPage;
    document.getElementById('compareBtn').onclick = toggleCompareMode;
    document.getElementById('openSurahBtn').onclick = openSurahPanel;
    document.getElementById('closeSurahPanel').onclick = closeSurahPanel;
    document.getElementById('closeComparePanel').onclick = closeCompareSelection;
    
    const pageInput = document.getElementById('pageInput');
    pageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') goToPage(parseInt(pageInput.value));
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeSurahPanel();
            closeCompareSelection();
        }
    });
});
// ============================================================
// 13. نظام الصوت حسب الصفحة والرواية
// ============================================================
// ============================================
// مشغل صوت مصغر - مع تغيير القارئ حسب المصحف
// ============================================

let miniAudio = null;
let isMiniPlaying = false;
let miniCurrentPage = 1;
let miniVolume = 0.7;

// ربط أسماء المجلدات بمعرفات المصاحف
const audioFolderMap = {
    // قالون
    "q1": "qalun1",
    "q2": "qalun2",
    "q3": "qalun3",
    "q4": "qalun4",
    // ورش
    "q5": "warch1",
    "q6": "warch2",
    "q7": "warch3",
    "q8": "warch4",
    "q9": "asbahani",
    // ابن كثير
    "q10": "ibnkatir",
    "q11": "bazzi",
    "q12": "qonbol",
    // أبو عمرو
    "q13": "abouamr",
    "q14": "douri",
    "q15": "douri",
    "q16": "soussi",
    // ابن عامر
    "q17": "ibnamir",
    "q18": "hicham",
    "q19": "ibnthakwan",
    // عاصم
    "q20": "assim",
    "q21": "choaaba",
    "q22": "hafes",
    // حمزة
    "q23": "hamza",
    "q24": "khalaf",
    "q25": "khalaf",
    "q26": "khallad",
    "q27": "khallad",
    // الكسائي
    "q28": "kissai",
    "q29": "layth",
    "q30": "dourikissai",
    // أبو جعفر
    "q31": "aboujaafar",
    "q32": "ibnwardan",
    "q33": "ibnjamaz",
    // يعقوب
    "q34": "yaakoub",
    "q35": "rowais",
    "q36": "rawh",
    // خلف العاشر
    "q37": "khalaf10",
    "q38": "ishak",
    "q39": "idriss",
};

// الحصول على مجلد الصوت حسب المصحف الحالي
function getCurrentAudioFolder() {
    if (!currentMushafId) return "qalun1";
    return audioFolderMap[currentMushafId] || "qalun1";
}

// عناصر المشغل
const miniPlayer = document.getElementById('miniPlayer');
const miniPlayPause = document.getElementById('miniPlayPause');
const miniStop = document.getElementById('miniStop');
const miniProgressContainer = document.getElementById('miniProgressContainer');
const miniProgressBar = document.getElementById('miniProgressBar');
const miniTimeSpan = document.getElementById('miniTime');
const miniVolumeBtn = document.getElementById('miniVolumeBtn');
const miniClose = document.getElementById('miniClose');

function updateMiniUI(isPlaying, pageNum) {
    if (miniPlayPause) miniPlayPause.textContent = isPlaying ? '⏸' : '▶';
    const mainBtn = document.getElementById('audioBtn');
    if (mainBtn) {
        mainBtn.textContent = isPlaying ? `⏸ ${pageNum}` : '🔊 استماع';
        mainBtn.style.backgroundColor = isPlaying ? '#e74c3c' : '#1abc9c';
    }
}

function updateMiniProgress() {
    if (miniAudio && miniAudio.duration && !isNaN(miniAudio.duration)) {
        const percent = (miniAudio.currentTime / miniAudio.duration) * 100;
        miniProgressBar.style.width = `${percent}%`;
        const currentMin = Math.floor(miniAudio.currentTime / 60);
        const currentSec = Math.floor(miniAudio.currentTime % 60);
        miniTimeSpan.textContent = `${currentMin}:${currentSec.toString().padStart(2, '0')}`;
    }
}

function playMiniAudio(pageNum) {
    if (!currentMushafId) {
        alert("الرجاء اختيار مصحف أولاً");
        return;
    }
    
    if (miniAudio) {
        miniAudio.pause();
        miniAudio = null;
    }
    
    miniCurrentPage = pageNum;
    const audioFolder = getCurrentAudioFolder();
    const pageStr = String(pageNum).padStart(3, '0');
    const audioUrl = `audio/${audioFolder}/${pageStr}.mp3`;
    
    console.log(`🎵 تشغيل: ${audioUrl} (المصحف: ${currentMushafId})`);
    
    miniAudio = new Audio(audioUrl);
    miniAudio.volume = miniVolume;
    
    miniAudio.addEventListener('timeupdate', updateMiniProgress);
    miniAudio.addEventListener('loadedmetadata', updateMiniProgress);
    
    miniAudio.addEventListener('ended', () => {
        isMiniPlaying = false;
        updateMiniUI(false, pageNum);
        if (pageNum < 640) {
            goToPage(pageNum + 1);
            setTimeout(() => playMiniAudio(pageNum + 1), 500);
        } else {
            miniPlayer.classList.add('hidden');
        }
    });
    
    miniAudio.addEventListener('error', () => {
        console.error(`❌ خطأ: الملف غير موجود ${audioUrl}`);
        alert(`⚠️ لا توجد تلاوة للصفحة ${pageNum} في هذه الرواية`);
        miniPlayer.classList.add('hidden');
        isMiniPlaying = false;
        updateMiniUI(false, pageNum);
    });
    
    miniAudio.play();
    isMiniPlaying = true;
    updateMiniUI(true, pageNum);
    miniPlayer.classList.remove('hidden');
}

function stopMiniAudio() {
    if (miniAudio) {
        miniAudio.pause();
        miniAudio.currentTime = 0;
        updateMiniProgress();
    }
    isMiniPlaying = false;
    updateMiniUI(false, miniCurrentPage);
}

function toggleMiniPlayPause() {
    if (!miniAudio) return;
    if (isMiniPlaying) {
        miniAudio.pause();
        isMiniPlaying = false;
        updateMiniUI(false, miniCurrentPage);
    } else {
        miniAudio.play();
        isMiniPlaying = true;
        updateMiniUI(true, miniCurrentPage);
    }
}

function seekMiniProgress(e) {
    if (!miniAudio) return;
    const rect = miniProgressContainer.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    miniAudio.currentTime = percent * miniAudio.duration;
}

function toggleMiniVolume() {
    if (miniAudio) {
        if (miniAudio.volume > 0) {
            miniAudio.volume = 0;
            miniVolumeBtn.textContent = '🔇';
        } else {
            miniAudio.volume = miniVolume;
            miniVolumeBtn.textContent = '🔊';
        }
    }
}

function closeMiniPlayer() {
    if (miniAudio) {
        miniAudio.pause();
        miniAudio = null;
    }
    isMiniPlaying = false;
    miniPlayer.classList.add('hidden');
    updateMiniUI(false, miniCurrentPage);
}

// ربط الأزرار
if (miniPlayPause) miniPlayPause.addEventListener('click', toggleMiniPlayPause);
if (miniStop) miniStop.addEventListener('click', stopMiniAudio);
if (miniProgressContainer) miniProgressContainer.addEventListener('click', seekMiniProgress);
if (miniVolumeBtn) miniVolumeBtn.addEventListener('click', toggleMiniVolume);
if (miniClose) miniClose.addEventListener('click', closeMiniPlayer);

// زر الصوت الرئيسي
const mainAudioBtn = document.getElementById('audioBtn');
if (mainAudioBtn) {
    mainAudioBtn.addEventListener('click', () => {
        if (!currentMushafId) {
            alert("الرجاء اختيار مصحف أولاً");
            return;
        }
        if (isMiniPlaying) {
            stopMiniAudio();
            closeMiniPlayer();
        } else {
            playMiniAudio(currentPage);
        }
    });
}

// مزامنة مع تغيير الصفحة يدوياً
const originalGoToPageMini = goToPage;
goToPage = function(pageNum) {
    originalGoToPageMini(pageNum);
    if (isMiniPlaying) {
        playMiniAudio(pageNum);
    }
};

console.log("✅ مشغل الصوت - يدعم تغيير القارئ حسب المصحف");

// ============================================
// إخفاء شريط أدوات PDF.js بشكل دائم وثابت
// ============================================
// ============================================
// إخفاء شريط أدوات PDF.js بشكل دائم (لجميع الـ iframes)
// ============================================

function hidePdfToolbarOnIframe(iframe) {
    if (!iframe || !iframe.contentWindow) return;
    
    try {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        if (!iframeDoc || !iframeDoc.head) return;
        
        // التحقق إذا كان التعديل قد طبق مسبقاً
        if (iframe.hasAttribute('data-toolbar-hidden')) return;
        
        const styleCode = `
            #toolbarContainer { display: none !important; }
            #outerContainer { padding-top: 0 !important; }
            #mainContainer { top: 0 !important; }
            #footerBar { display: none !important; }
            .toolbar { display: none !important; }
            .findbar { display: none !important; }
            .secondaryToolbar { display: none !important; }
        `;
        
        const style = iframeDoc.createElement('style');
        style.textContent = styleCode;
        iframeDoc.head.appendChild(style);
        iframe.setAttribute('data-toolbar-hidden', 'true');
        
        console.log("✅ تم إخفاء شريط الأدوات في iframe");
    } catch(e) {
        console.log("لا يمكن الوصول لـ iframe");
    }
}

// إخفاء الشريط في جميع الـ iframes
function hideToolbarOnAllIframes() {
    const allIframes = document.querySelectorAll('#viewer-container iframe, .compare-split iframe, iframe');
    allIframes.forEach(iframe => {
        if (iframe.src && iframe.src.includes('viewer.html')) {
            hidePdfToolbarOnIframe(iframe);
        }
    });
}

// مراقبة الـ iframes الجديدة (للمقارنة والعادي)
const toolbarObserver = new MutationObserver(function() {
    const allIframes = document.querySelectorAll('#viewer-container iframe, .compare-split iframe, iframe');
    allIframes.forEach(iframe => {
        if (iframe.src && iframe.src.includes('viewer.html') && !iframe.hasAttribute('data-toolbar-hidden')) {
            if (iframe.contentWindow) {
                iframe.addEventListener('load', function() {
                    setTimeout(() => hidePdfToolbarOnIframe(iframe), 200);
                });
                setTimeout(() => hidePdfToolbarOnIframe(iframe), 300);
            }
        }
    });
});

toolbarObserver.observe(document.body, { childList: true, subtree: true });

// تطبيق أولي
setTimeout(hideToolbarOnAllIframes, 1000);
setInterval(hideToolbarOnAllIframes, 2000);

// ============================================
// تكبير وتصغير حجم النص في PDF مع الحفظ
// ============================================

const ZOOM_KEY = "pdf_zoom_level";
let currentZoom = 1.0;  // 1.0 = 100%

// حفظ مستوى التكبير
function saveZoomLevel(zoom) {
    localStorage.setItem(ZOOM_KEY, zoom);
}

// استعادة مستوى التكبير المحفوظ
function getSavedZoom() {
    const saved = localStorage.getItem(ZOOM_KEY);
    if (saved && !isNaN(parseFloat(saved))) {
        return parseFloat(saved);
    }
    return 1.0;
}

// تطبيق التكبير على iframe
function applyZoomToIframe(zoom) {
    const iframes = document.querySelectorAll('#viewer-container iframe, .compare-split iframe');
    iframes.forEach(iframe => {
        try {
            const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            const viewer = iframeDoc.querySelector('#viewerContainer');
            if (viewer) {
                viewer.style.transform = `scale(${zoom})`;
                viewer.style.transformOrigin = 'top left';
                viewer.style.width = `${100 / zoom}%`;
                viewer.style.height = `${100 / zoom}%`;
            }
        } catch(e) {
            console.log("لا يمكن الوصول لـ iframe");
        }
    });
}

// تكبير
function zoomIn() {
    currentZoom = Math.min(currentZoom + 0.1, 2.5);  // حد أقصى 250%
    saveZoomLevel(currentZoom);
    updateZoomUI();
    applyZoomToAll();
}

// تصغير
function zoomOut() {
    currentZoom = Math.max(currentZoom - 0.1, 0.5);  // حد أدنى 50%
    saveZoomLevel(currentZoom);
    updateZoomUI();
    applyZoomToAll();
}

// تحديث واجهة المستخدم (اختياري)
function updateZoomUI() {
    let levelDisplay = document.getElementById('zoomLevelDisplay');
    if (!levelDisplay) {
        levelDisplay = document.createElement('span');
        levelDisplay.id = 'zoomLevelDisplay';
        levelDisplay.className = 'zoom-level';
        const zoomBtns = document.querySelector('.zoom-btn');
        if (zoomBtns && zoomBtns.parentNode) {
            zoomBtns.parentNode.insertBefore(levelDisplay, zoomBtns);
        }
    }
    levelDisplay.textContent = `${Math.round(currentZoom * 100)}%`;
}

// تطبيق التكبير على جميع iframes
function applyZoomToAll() {
    setTimeout(() => {
        const iframes = document.querySelectorAll('#viewer-container iframe, .compare-split iframe');
        iframes.forEach(iframe => {
            if (iframe && iframe.contentWindow) {
                try {
                    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
                    const viewer = iframeDoc.querySelector('#viewerContainer');
                    if (viewer) {
                        viewer.style.transform = `scale(${currentZoom})`;
                        viewer.style.transformOrigin = 'top left';
                        viewer.style.width = `${100 / currentZoom}%`;
                        viewer.style.height = `${100 / currentZoom}%`;
                    }
                } catch(e) {}
            }
        });
    }, 500);
}

// ربط الأزرار
const zoomInBtn = document.getElementById('zoomInBtn');
const zoomOutBtn = document.getElementById('zoomOutBtn');

if (zoomInBtn) zoomInBtn.addEventListener('click', zoomIn);
if (zoomOutBtn) zoomOutBtn.addEventListener('click', zoomOut);

// استعادة التكبير المحفوظ عند بدء التشغيل
currentZoom = getSavedZoom();
updateZoomUI();

// مراقبة تغيير iframe وتطبيق التكبير
const zoomObserver = new MutationObserver(function() {
    applyZoomToAll();
});
zoomObserver.observe(document.body, { childList: true, subtree: true });

// تطبيق عند تبديل الصفحات
const originalGoToPageZoom = goToPage;
goToPage = function(pageNum) {
    originalGoToPageZoom(pageNum);
    applyZoomToAll();
};

// تطبيق عند تبديل المصاحف
const originalLoadMushafZoom = loadMushaf;
loadMushaf = function(mushafId) {
    originalLoadMushafZoom(mushafId);
    applyZoomToAll();
};

console.log(`✅ أزرار التكبير جاهزة - المستوى الحالي: ${Math.round(currentZoom * 100)}%`);

// ============================================
// أزرار عرض الصفحتين (نسخة تعمل 100%)
// ============================================

// ============================================
// زر مصحف نافع المستقل
// ============================================


// ============================================
// وضع عدم الاتصال - نسخة مبسطة جداً
// ============================================

let useLocalFiles = true;

function toggleSource() {
    useLocalFiles = !useLocalFiles;
    const btn = document.getElementById('toggleSourceBtn');
    
    if (useLocalFiles) {
        btn.textContent = '💾 محلي';
        btn.style.backgroundColor = '#2ecc71';
        alert("✅ الوضع: ملفات محلية");
    } else {
        btn.textContent = '☁️ سحابي';
        btn.style.backgroundColor = '#3498db';
        alert("✅ الوضع: سحابي (Google Drive)");
    }
    
    // إعادة تحميل الصفحة الحالية
    if (currentMushafId) {
        loadMushaf(currentMushafId);
    }
}

// ربط الزر
setTimeout(function() {
    var btn = document.getElementById('toggleSourceBtn');
    if (btn) {
        btn.onclick = toggleSource;
        console.log("✅ زر تبديل المصدر جاهز");
    } else {
        console.log("❌ الزر غير موجود");
    }
}, 1000);

// ============================================
// نظام التخزين المؤقت للصفحات (Page Caching)
// ============================================

// كائن لتخزين الصفحات التي تم تحميلها
const pageCache = {};

// دالة لحفظ الصفحة في الذاكرة المؤقتة
function cachePage(pageNum, content) {
    pageCache[pageNum] = content;
    console.log(`💾 تم حفظ الصفحة ${pageNum} في الذاكرة المؤقتة`);
}

// دالة لاسترجاع الصفحة من الذاكرة المؤقتة
function getCachedPage(pageNum) {
    return pageCache[pageNum];
}

// دالة للتحقق إذا كانت الصفحة مخزنة
function isPageCached(pageNum) {
    return pageCache[pageNum] !== undefined;
}

// تعديل دالة goToPage لإضافة التخزين المؤقت
const originalGoToPageCache = goToPage;
goToPage = async function(pageNum) {
    if (pageNum < 1) pageNum = 1;
    if (pageNum > 640) pageNum = 640;
    
    // التحقق إذا كانت الصفحة مخزنة مسبقاً
    if (isPageCached(pageNum)) {
        console.log(`📄 الصفحة ${pageNum} موجودة في الذاكرة المؤقتة - عرض سريع`);
        // عرض المحتوى المخزن
        const cachedContent = getCachedPage(pageNum);
        if (cachedContent) {
            const container = document.getElementById('viewer-container');
            container.innerHTML = cachedContent;
            mainIframe = container.querySelector('iframe');
            return;
        }
    }
    
    // إذا لم تكن مخزنة، قم بتحميلها كالمعتاد
    originalGoToPageCache(pageNum);
    
    // بعد التحميل، قم بحفظها في الذاكرة المؤقتة
    setTimeout(() => {
        const container = document.getElementById('viewer-container');
        const currentContent = container.innerHTML;
        if (currentContent && !isPageCached(pageNum)) {
            cachePage(pageNum, currentContent);
        }
    }, 1000);
};

// تخزين الصفحات المجاورة أيضاً لتسريع التنقل
function cacheNearbyPages(currentPage) {
    const pagesToCache = [currentPage - 2, currentPage - 1, currentPage + 1, currentPage + 2];
    pagesToCache.forEach(page => {
        if (page >= 1 && page <= 640 && !isPageCached(page)) {
            // تحميل الصفحات المجاورة في الخلفية
            setTimeout(() => {
                if (!isPageCached(page)) {
                    console.log(`🔄 تحميل الصفحة ${page} مسبقاً في الخلفية`);
                    originalGoToPageCache(page);
                    setTimeout(() => {
                        const container = document.getElementById('viewer-container');
                        const content = container.innerHTML;
                        if (content && !isPageCached(page)) {
                            cachePage(page, content);
                        }
                    }, 1500);
                }
            }, 500);
        }
    });
}

// تعديل دالة nextPage و prevPage للتخزين المسبق
const originalNextPage = nextPage;
nextPage = function() {
    originalNextPage();
    setTimeout(() => cacheNearbyPages(currentPage), 500);
};

const originalPrevPage = prevPage;
prevPage = function() {
    originalPrevPage();
    setTimeout(() => cacheNearbyPages(currentPage), 500);
};

console.log("✅ نظام التخزين المؤقت للصفحات جاهز");
