const iconOpen = document.getElementById('iconOpen')
const iconClose = document.getElementById('iconClose')
const mainMenu = document.getElementById('mainMenu')
const menuIcons = document.getElementById('menuIcons')

menuIcons.addEventListener('click', ()=> {
	iconOpen.classList.toggle('hide')
	iconClose.classList.toggle('hide')
	mainMenu.classList.toggle('hide')
})



window.onscroll = function showHeader() {
    var header = document.querySelector('.navbar');
    if(window.pageYOffset > 200){
        header.classList.add('header_fixed');
    } else{
        header.classList.remove('header_fixed');
    }
}





// var swiper = new Swiper(".mySwiper", {
// 	slidesPerView: 3,
// 	spaceBetween: 30,
// 	freeMode: true,
// 	pagination: {
// 	  el: ".swiper-pagination",
// 	  clickable: true,
// 	},
//   });

var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto', // Автоматично визначає кількість видимих слайдів
    spaceBetween: 20, // Відступ між слайдами
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });