window.onload = function () {
    var login = document.getElementById("login");
    var userName = document.getElementById("phonenumber");
    var modal = document.getElementById('modal');

    login.onclick = function () {
        var value = userName.value;
        if(value.length==0){
            console.log(value)
            modal.style.display = 'block';
        }
        else if(value != 0){
            console.log(1)
            modal.style.display = 'none';
            window.location.href="index4.html?userName="+value;
        }


    }
};