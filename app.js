/**
 * upGrad School of Technology - Presentation Deck Application Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  let currentIndex = 0;
  const totalSlides = SLIDES_DATA.length;
  let notesOpen = false;
  let pickerOpen = false;

  // DOM Element References
  const slideFrame = document.getElementById('slideFrame');
  const slideCounter = document.getElementById('slideCounter');
  const progressFill = document.getElementById('progressFill');
  const notesDrawer = document.getElementById('notesDrawer');
  const notesContent = document.getElementById('notesContent');
  const pickerOverlay = document.getElementById('pickerOverlay');
  const pickerGrid = document.getElementById('pickerGrid');
  const btnPrev = document.getElementById('btnPrev');
  const btnNext = document.getElementById('btnNext');
  const btnNotes = document.getElementById('btnNotes');
  const btnGrid = document.getElementById('btnGrid');
  const btnFullscreen = document.getElementById('btnFullscreen');
  const slideSelect = document.getElementById('slideSelect');

  // Initialize Slide Selector Options
  function initSelector() {
    slideSelect.innerHTML = '';
    SLIDES_DATA.forEach((slide, idx) => {
      const opt = document.createElement('option');
      opt.value = idx;
      opt.textContent = `${slide.id}. ${slide.title}`;
      slideSelect.appendChild(opt);
    });

    // Populate Thumbnail Picker Grid
    pickerGrid.innerHTML = '';
    SLIDES_DATA.forEach((slide, idx) => {
      const thumb = document.createElement('div');
      thumb.className = `thumb-card ${idx === currentIndex ? 'active-thumb' : ''}`;
      thumb.innerHTML = `
        <div class="thumb-num">Slide ${slide.id}</div>
        <div class="thumb-title">${slide.title}</div>
      `;
      thumb.addEventListener('click', () => {
        goToSlide(idx);
        togglePicker(false);
      });
      pickerGrid.appendChild(thumb);
    });
  }

  // Render Current Slide
  function renderSlide(index) {
    if (index < 0 || index >= totalSlides) return;
    currentIndex = index;

    const slide = SLIDES_DATA[currentIndex];

    // Build Header markup (Title slide is full cover, others have top header)
    let headerHTML = '';
    if (slide.type !== 'cover') {
      headerHTML = `
        <div class="slide-top-bar">
          <div class="slide-header-content">
            <span class="slide-section-tag">${slide.section || 'JavaScript Workshop'}</span>
            <h1 class="slide-main-title">${slide.title}</h1>
            ${slide.subtitle ? `<p class="slide-main-subtitle">${slide.subtitle}</p>` : ''}
          </div>
          <div class="slide-upgrad-watermark">
            <span class="upgrad-text-mark">upGrad</span>
            <span class="upgrad-sub-mark">School of Technology</span>
          </div>
        </div>
      `;
    }

    // Populate Slide Frame
    slideFrame.innerHTML = `
      ${headerHTML}
      <div class="slide-body">
        ${slide.content}
      </div>
    `;

    // Update Counter & Progress Bar
    slideCounter.textContent = `${currentIndex + 1} / ${totalSlides}`;
    slideSelect.value = currentIndex;
    const progressPercent = ((currentIndex + 1) / totalSlides) * 100;
    progressFill.style.width = `${progressPercent}%`;

    // Update Speaker Notes
    notesContent.innerHTML = slide.notes ? `<p>${slide.notes}</p>` : '<p>No speaker notes for this slide.</p>';

    // Highlight thumbnail grid active item
    const thumbs = pickerGrid.querySelectorAll('.thumb-card');
    thumbs.forEach((t, i) => {
      if (i === currentIndex) t.classList.add('active-thumb');
      else t.classList.remove('active-thumb');
    });

    // Toggle Arrow States
    btnPrev.style.opacity = currentIndex === 0 ? '0.4' : '1';
    btnNext.style.opacity = currentIndex === totalSlides - 1 ? '0.4' : '1';
  }

  function goToSlide(index) {
    if (index >= 0 && index < totalSlides) {
      renderSlide(index);
    }
  }

  function nextSlide() {
    if (currentIndex < totalSlides - 1) {
      renderSlide(currentIndex + 1);
    }
  }

  function prevSlide() {
    if (currentIndex > 0) {
      renderSlide(currentIndex - 1);
    }
  }

  function toggleNotes(force) {
    notesOpen = force !== undefined ? force : !notesOpen;
    if (notesOpen) {
      notesDrawer.classList.add('open');
      btnNotes.classList.add('active');
    } else {
      notesDrawer.classList.remove('open');
      btnNotes.classList.remove('active');
    }
  }

  function togglePicker(force) {
    pickerOpen = force !== undefined ? force : !pickerOpen;
    if (pickerOpen) {
      pickerOverlay.classList.add('open');
      btnGrid.classList.add('active');
    } else {
      pickerOverlay.classList.remove('open');
      btnGrid.classList.remove('active');
    }
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Fullscreen request failed: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  // Global Quiz Handling Functions
  window.checkQuiz = function(slideId, optionLetter, isCorrect) {
    const feedbackBox = document.getElementById(`quiz-result-${slideId}`);
    if (!feedbackBox) return;

    feedbackBox.className = 'quiz-feedback-box show';
    if (isCorrect) {
      feedbackBox.classList.add('correct');
      feedbackBox.innerHTML = `🎉 <strong>Correct!</strong> Option ${optionLetter} is the right answer.`;
    } else {
      feedbackBox.classList.add('wrong');
      feedbackBox.innerHTML = `❌ <strong>Not quite.</strong> Give it another thought or discuss with your partner.`;
    }
  };

  window.toggleAnswer = function(slideId) {
    const ansBox = document.getElementById(`answer-${slideId}`);
    if (ansBox) {
      ansBox.style.display = ansBox.style.display === 'block' ? 'none' : 'block';
    }
  };

  // Event Listeners
  btnNext.addEventListener('click', nextSlide);
  btnPrev.addEventListener('click', prevSlide);
  btnNotes.addEventListener('click', () => toggleNotes());
  btnGrid.addEventListener('click', () => togglePicker());
  document.getElementById('btnClosePicker').addEventListener('click', () => togglePicker(false));
  btnFullscreen.addEventListener('click', toggleFullscreen);

  slideSelect.addEventListener('change', (e) => {
    goToSlide(parseInt(e.target.value, 10));
  });

  // Keyboard Shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
      e.preventDefault();
      nextSlide();
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault();
      prevSlide();
    } else if (e.key === 'Home') {
      e.preventDefault();
      goToSlide(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      goToSlide(totalSlides - 1);
    } else if (e.key === 'n' || e.key === 'N') {
      toggleNotes();
    } else if (e.key === 'g' || e.key === 'G') {
      togglePicker();
    } else if (e.key === 'f' || e.key === 'F') {
      toggleFullscreen();
    } else if (e.key === 'Escape') {
      togglePicker(false);
      toggleNotes(false);
    }
  });

  // Initial Load
  initSelector();
  renderSlide(0);
});
