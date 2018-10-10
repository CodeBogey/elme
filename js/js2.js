window.onload = function () {
    var mySwiper = new Swiper('#swiper2', {
        autoplay: true,//可选选项，自动滑动
        loop : true,
        direction : 'vertical',
    })

    var btns = document.getElementsByClassName('zb');
    var items = document.getElementsByClassName('item');

    for(var i = 0; i < btns.length;i++){
        btns[i].index = i;
        btns[i].onclick = function () {
            for(var j = 0;j < items.length;j++){
                items[j].className = "item"
                btns[j].style.color = '#5b81d6'
            }
            items[this.index].className = "item active"
            btns[this.index].style.color = '#fff'
        }
    }


};