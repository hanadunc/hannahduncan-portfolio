document.addEventListener('DOMContentLoaded', () => {
  const carouselWrappers = document.querySelectorAll('.carousel-wrapper');

  carouselWrappers.forEach(wrapper => {
    const track = wrapper.querySelector('.carousel-track');
    const prevBtn = wrapper.querySelector('.prev-btn');
    const nextBtn = wrapper.querySelector('.next-btn');

    if (track && prevBtn && nextBtn) {
      const scrollAmount = 300; // Distance in pixels per click

      nextBtn.addEventListener('click', () => {
        track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      });

      prevBtn.addEventListener('click', () => {
        track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      });
    }
  });
});