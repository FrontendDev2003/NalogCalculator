let btn = document.querySelector('.form-btn')
let nalog = document.querySelector('.form-result')
let region = document.querySelector('.region')
let months = document.querySelector('.months')
let type = document.querySelector('.type')
let power = document.querySelector('.power')

btn.addEventListener('click', function(){
  let result = Number(power.value * 20 * (months.value / 12))
  nalog.textContent = nalog.textContent + result + ' рублей'
})