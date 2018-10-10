window.onload = function () {
    var mySwiper = new Swiper ('.swiper-container', {
        autoplay: true,
        loop: true,
    });

    //滑动到402 的时候，出现
    var topnav = document.getElementById("topnav");
    $(window).scroll(function (){
        if ($(window).scrollTop() > 402) {
            topnav.style.display = "block"
        }else {
            topnav.style.display = "none"
        }
    });
    // 点击按钮，返回顶部
    $('#topnav').click(function(){
        $("html,body").animate({scrollTop:0}, 300);
    });

    var location = document.getElementById("location");
    location.onclick = function () {
        window.location.href="location.html";
    }








    };