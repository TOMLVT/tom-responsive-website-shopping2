//mobile 
 function copyMenu () {
    var dptCategory = document.querySelector('.dpt-cat');
    var dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML = dptCategory.innerHTML;


    var mainNav = document.querySelector('.header-nav nav');
    var navPlace = document.querySelector('.off-canvas nav')
    navPlace.innerHTML = mainNav.innerHTML;


    var topNav = document.querySelector('.header-top .wrapper');
    var topPlace = document.querySelector('.off-canvas .thetop-nav')
    topPlace.innerHTML = topNav.innerHTML;
}

copyMenu();

//showw menu mobile
const menuButton = document.querySelector('.trigger'),
 closeButton = document.querySelector('.t-close'),
 addclass = document.querySelector('.site');
 menuButton.addEventListener('click', function() {
    addclass.classList.toggle('showmenu')
})

closeButton.addEventListener('click', function() {
    addclass.classList.remove('showmenu')
})

//show menu 
 const submenu = document.querySelectorAll('.has-child .icon-small');
 submenu.forEach((menu) => menu.addEventListener('click',toggle));


 function toggle(e) { 
    e.preventDefault();
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null);
    if (this.closest('.has-child').classList != 'expand');
    this.closest('.has-child').classList.toggle('expand')
 }

 //swiper image

 const swiper = new Swiper ('.swiper', {
    loop:true,
    pagination: {
        el:'.swiper-pagination',
    },
 });

//show search 
const searchButton = document.querySelector('.t-search'),
    tClose = document.querySelector('.search-close'),
    showClass = document.querySelector('.site');

    searchButton.addEventListener('click', function () {
        showClass.classList.toggle('showsearch')
    })

    tClose.addEventListener('click', function() {
        showClass.classList.remove('showsearch')
    })

    //show dpt menu
    const dptButton = document.querySelector('.dpt-cat .dpt-trigger'),
            dptClass = document.querySelector('.site');
            dptButton.addEventListener('.click' , function () {
                dptClass.classList.toggle('showdpt')
            })


            //vo hieu hoa code
document.addEventListener("keydown", function (event){
    if (event.ctrlKey){
       event.preventDefault();
    }
    if(event.keyCode == 123){
       event.preventDefault();
    }
});

document.addEventListener('contextmenu', function(event) {
    event.preventDefault(); // Chặn hành động mặc định khi chuột phải được nhấp
    alert('Xin lỗi, chức năng này đã bị chặn!');
});