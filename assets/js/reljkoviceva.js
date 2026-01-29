const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const closeBtn = document.querySelector('.modal-close');

document.querySelectorAll('.apartment.available').forEach(stan => {
  stan.addEventListener('click', () => {
    modalTitle.textContent = stan.dataset.name;
    modalImg.src = stan.dataset.img;
    modal.classList.add('show');
  });
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('show');
});

modal.addEventListener('click', e => {
  if (e.target === modal) {
    modal.classList.remove('show');
  }
});
