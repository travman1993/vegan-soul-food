// Jump to recipe from dropdown
document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('recipeJump');
    if (select) {
      select.addEventListener('change', (e) => {
        const id = e.target.value;
        if (!id) return;
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  
    const globalTopButton = document.getElementById('backToTop');
    if (globalTopButton) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
          globalTopButton.style.display = 'block';
        } else {
          globalTopButton.style.display = 'none';
        }
      });
  
      globalTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  
    // Local back-to-top buttons inside recipes
    document.querySelectorAll('.js-back-to-top').forEach(btn => {
      btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });
  });
  