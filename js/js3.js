window.onload = function () {

  var reonepage = document.getElementById("reonepage"),
      jigongbao = document.getElementById("jigongbao"),
      naicha = document.getElementById("naicha"),
      zhuti = document.getElementById("zhuti"),
      shaokao = document.getElementById("shaokao"),
      sss = document.getElementById("sss"),
      kkk = document.getElementById("kkk");

   reonepage.onclick = function () {
        window.location.href="index1.html";
    };
    jigongbao.onclick = function () {
        window.location.href="search1.html";
    };
   naicha.onclick = function () {
       window.location.href="search2.html";
   };
   zhuti.onclick = function () {
       window.location.href="search3.html";
   };
    shaokao.onclick = function () {
        window.location.href="search4.html";
    };
    sss.onclick = function () {
        if (kkk.value == "鸡公煲"){
            window.location.href="search1.html";
        }else if (kkk.value == "猪蹄"){
            window.location.href="search3.html";
        } else if (kkk.value == "奶茶"){
            window.location.href="search2.html";
        } else if (kkk.value == "烧烤") {
            window.location.href="search4.html";
        }else{
            window.location.href="gouwuche.html";
        }


    }

};