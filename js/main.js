/* $(function(){
    $('.js-menu-button').click(function() {
        $('.js-menu-button').toggleClass('opening-mobile-menu-img');
        $('.js-nav').toggleClass('active');
    })
});
 */






let button = document.querySelector('.js-menu-button');
let nav = document.querySelector('.js-nav');


button.addEventListener('click', function() {
    button.classList.toggle('opening-mobile-menu-img');
    nav.classList.toggle('active');


}) 