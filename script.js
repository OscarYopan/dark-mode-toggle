const toggleEl = document.querySelector('input')
const bodyEl = document.querySelector('body')
const sun = document.querySelector('.fa-sun')
const moon = document.querySelector('.fa-moon')

toggleEl.addEventListener('click', () => {
  bodyEl.classList.toggle('dark')
  sun.classList.toggle('dark')
  moon.classList.toggle('dark')  
})