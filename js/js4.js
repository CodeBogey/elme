window.onload = function () {
    var index4login = document.getElementById("index4login");
    var changename =document.getElementById("changename");


    // changename.innerHTML=window.location.search.split('?')[1];
    function getArgs() {
        var args = {};
        var query = location.search.substring(1);
        // console.log(query);
        var pairs = query.split("&");

        for (var i = 0; i < pairs.length; i++) {
            var pos = pairs[i].indexOf('=');
            if (pos == -1) continue;
            var argname = pairs[i].substring(0, pos);// Extract the name
            var value = pairs[i].substring(pos + 1);// Extract the value
            value = decodeURIComponent(value);// Decode it, if needed
            args[argname] = value;// Store as a property
        }
        return args;// Return the object 
    }
    var str = getArgs();
    // console.log(str);
    changename.innerHTML = str['userName'];//然后赋值给DIV
    if(str['userName'] == undefined){
        changename.innerHTML = '登录/注册'
    }
    // else if(str['userName'] == ''){
    //        alert('请先登录');
    //     }
    console.log(str['userName'])
    // console.log(changename);
    // console.log(str['userName']);
    index4login.onclick = function () {
        window.location.href="login.html";
    };
};