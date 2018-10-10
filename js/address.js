var btns = document.getElementsByClassName('personAddress')
var btn= document.getElementsByClassName('del')

    for (var i=0;i<btn.length;i++){
        btn[i].setAttribute('index',i)
        btn[i].onclick=function () {
            index = this.getAttribute("index");
            btns[index].style.display='none'
        }
    }
