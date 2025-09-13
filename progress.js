document.querySelectorAll('.progress-bar').forEach(bar => {
  const percent = bar.getAttribute('data-progress');
  bar.style.width = percent + '%';
  bar.innerHTML = percent + '%';
  bar.style.background = 
    'linear-gradient(90deg, #00c6ff, #0072ff)';
});
