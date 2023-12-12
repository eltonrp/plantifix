// const btnMenu = document.getElementById('btn-menu')
//   const mobileMenu = document.getElementById('mobile-menu')
//   const span1 = document.getElementById('span1')
//   const span2 = document.getElementById('span2')
//   const span3 = document.getElementById('span3')
//   // btnMenu.addEventListener('click', () => {
//   //     mobileMenu.classList.toggle('hidden')
//   // })
//   function onToggleMenu(e) {
//     span1.classList.toggle('origin-center')
//     span1.classList.toggle('rotate-45')
//     span1.classList.toggle('translate-y-[7px]')
//     span2.classList.toggle('hidden')
//     span2.classList.toggle('origin-center')
//     span3.classList.toggle('-rotate-45')
//     btnMenu.classList.toggle('border')
//     mobileMenu.classList.toggle('top-[100%]')
//   }

// Automação do slider
let count = 1
document.getElementById('radio1').checked = true

setInterval(function() {
  nextImage()
}, 3000)

function nextImage() {
  count++
  if(count > 2) {
    count = 1
  }
  document.getElementById('radio' + count).checked = true
}
