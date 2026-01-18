const reviews = document.querySelectorAll('.review');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let current = 0;

function showReview(index) {
  reviews.forEach(review => review.classList.remove('active'));
  reviews[index].classList.add('active');
}

nextBtn.addEventListener('click', () => {
  current = (current + 1) % reviews.length;
  showReview(current);
});

prevBtn.addEventListener('click', () => {
  current = (current - 1 + reviews.length) % reviews.length;
  showReview(current);
});
