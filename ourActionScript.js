// create functionality here

const cb = document.querySelector('#capital');
console.log(cb.checked);


// 1) extract user's desired password length
document.getElementById('generate').onclick = function(){
    let length = document.getElementById("length").value;
    let capital = document.getElementById("capital").value;
    let number = document.getElementById("numbers").value;
    let special = document.getElementById("special").value;
    alert(length);
    alert(capital);
    alert(number);
    alert(special);
}

