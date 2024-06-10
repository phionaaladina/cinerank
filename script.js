
    document.addEventListener('DOMContentLoaded', () => {
      const stars = document.querySelectorAll('.star');

      stars.forEach(star => {
        star.addEventListener('click', setRating);
      });

      function setRating(event) {
        const clickedStar = event.target;
        const rating = clickedStar.dataset.rating;
        const starContainer = clickedStar.parentElement;

        starContainer.querySelectorAll('.star').forEach(star => {
          star.innerHTML = star.dataset.rating <= rating ? '&#9733;' : '&#9734;';
        });
      }
    });

