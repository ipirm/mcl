window.addEventListener("DOMContentLoaded", function() {
  function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
    else if (elem.createTextRange) {
      var range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select()
    }
  }

  function mask(event) {
    var matrix = this.defaultValue,
    i = 0,
    def = matrix.replace(/\D/g, ""),
    val = this.value.replace(/\D/g, "");
    def.length >= val.length && (val = def);
    matrix = matrix.replace(/[_\d]/g, function(a) {
      return val.charAt(i++) || "_"
    });
    this.value = matrix;
    i = matrix.lastIndexOf(val.substr(-1));
    i < matrix.length && matrix != this.defaultValue ? i++ : i = matrix.indexOf("_");
    setCursorPosition(i, this)
  }

  var input = document.querySelector("#date-input");
  var input2 = document.querySelector("#phone-input");
  input.addEventListener("input", mask, false)
  input2.addEventListener("input", mask, false)
});





var serv_btn = document.querySelectorAll('.auth-head li');
var serv_content = document.querySelectorAll('.auth-item');
for(var i=0; i <serv_btn.length; i++) {
  var serv_btn1=serv_btn[i];
  (function(i) {
   serv_btn1.onclick = function() {

    for(var j=0; j <serv_btn.length; j++) {      
      serv_btn[j].classList.remove("act");
    }
    for(var k=0; k <serv_content.length; k++) {      
      serv_content[k].classList.remove("act");
    }
    this.classList.add("act");       
    for(var j=0; j <serv_btn.length; j++) {   
     if (serv_btn[j].classList.contains("act") ) {
       serv_content[j].classList.add("act");
       break;
     }   
   }




 }

})(i);

}


var clicks = document.querySelectorAll('.leftnav-item-body>a');
for(var i=0; i <clicks.length; i++) {
  (function(i) {
   var click = clicks[i];
   click.onclick = function(e) {  
     e.preventDefault();         
     if (click.classList.contains("act")) {
       this.classList.remove("act");
     }else{
      this.classList.add("act");
    }
  }
})(i);
}
var click_star = document.querySelectorAll('.card-star');
for(var i=0; i <click_star.length; i++) {
  (function(i) {
   var click = click_star[i];
   click.onclick = function(e) {  
     e.preventDefault();         
     if (click.classList.contains("act")) {
       this.classList.remove("act");
     }else{
      this.classList.add("act");
    }
  }
})(i);
}




function checkPassword(pass) {
    var password = pass.value; // Получаем пароль из формы
    var el = document.getElementById('pass-check');
    var el2 = document.getElementById('progress-bar');
    var russin_lat1 = "йцукенгшщзхъфывапролджэячсмитьбю"
    var russin_lat2 = "ЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ"
    var s_letters = "qwertyuiopasdfghjklzxcvbnm"; // Буквы в нижнем регистре
    var b_letters = "QWERTYUIOPLKJHGFDSAZXCVBNM"; // Буквы в верхнем регистре
    var digits = "0123456789"; // Цифры
    var specials = "!@#$%^&*()_-+=\|/.,:;[]{}"; // Спецсимволы
    var is_s = false; // Есть ли в пароле буквы в нижнем регистре
    var is_b = false; // Есть ли в пароле буквы в верхнем регистре
    var is_d = false; // Есть ли в пароле цифры
    var is_sp = false; // Есть ли в пароле спецсимволы
    for (var i = 0; i < password.length; i++) {
      /* Проверяем каждый символ пароля на принадлежность к тому или иному типу */
      if (russin_lat1.indexOf(password[i]) != -1 || russin_lat2.indexOf(password[i]) != -1 ) {
       pass.value='';
       el.classList.remove("red-c");
       el2.classList.remove("red-c");
       text = "";
     }

     if (!is_s && s_letters.indexOf(password[i]) != -1) is_s = true;

     else if (!is_b && b_letters.indexOf(password[i]) != -1) is_b = true;
     else if (!is_d && digits.indexOf(password[i]) != -1) is_d = true;
     else if (!is_sp && specials.indexOf(password[i]) != -1) is_sp = true;
   }
   var rating = 0;
   var text = "";
    if (is_s) rating++; // Если в пароле есть символы в нижнем регистре, то увеличиваем рейтинг сложности
    if (is_b) rating++; // Если в пароле есть символы в верхнем регистре, то увеличиваем рейтинг сложности
    if (is_d) rating++; // Если в пароле есть цифры, то увеличиваем рейтинг сложности
    if (is_sp) rating++; // Если в пароле есть спецсимволы, то увеличиваем рейтинг сложности
    /* Далее идёт анализ длины пароля и полученного рейтинга, и на основании этого готовится текстовое описание сложности пароля */

    if ((password.length < 6 && password.length > 0) && rating < 3){
      text = "Слабый";
      el.classList.remove("yellow-c");
      el2.classList.remove("yellow-c");
      el.classList.remove("green-c");
      el2.classList.remove("green-c");
      el.classList.add("red-c");
      el2.classList.add("red-c");
    }
    else if (password.length < 6 && rating >= 3){
      el.classList.remove("red-c");
      el2.classList.remove("red-c");
      el.classList.remove("green-c");
      el2.classList.remove("green-c");
      text = "Нормальный";
      el.classList.add("yellow-c");
      el2.classList.add("yellow-c");
    }
    else if (password.length >= 8 && rating < 3){
      el.classList.remove("red-c");
      el2.classList.remove("red-c");
      el.classList.remove("green-c");
      el2.classList.remove("green-c");
      text = "Нормальный";
      el.classList.add("yellow-c");
      el2.classList.add("yellow-c");
    }
    else if (password.length >= 8 && rating >= 3){
      el.classList.remove("red-c");
      el2.classList.remove("red-c");
      el.classList.remove("yellow-c");
      el2.classList.remove("yellow-c");
      text = "Безопасный";
      el.classList.add("green-c");
      el2.classList.add("green-c");
    }
    else if ((password.length >= 6 && password.length > 0) && rating == 1){
     text = "Слабый";
     el.classList.remove("yellow-c");
     el2.classList.remove("yellow-c");
     el.classList.remove("green-c");
     el2.classList.remove("green-c");
     el.classList.add("red-c");
     el2.classList.add("red-c");
   }
   else if (password.length >= 6 && rating > 1 && rating < 4){
    el.classList.remove("red-c");
    el2.classList.remove("red-c");
    el.classList.remove("green-c");
    el2.classList.remove("green-c");
    text = "Нормальный";
    el.classList.add("yellow-c");
    el2.classList.add("yellow-c");
  }
  else if (password.length >= 6 && rating == 4){
    el.classList.remove("red-c");
    el2.classList.remove("red-c");
    el.classList.remove("yellow-c");
    el2.classList.remove("yellow-c");
    text = "Безопасный";
    el.classList.add("green-c");
    el2.classList.add("green-c");
  }

  if (password == '' ){
    el.classList.remove("red-c");
    el2.classList.remove("red-c");
    el.classList.remove("yellow-c");
    el2.classList.remove("yellow-c");
    el.classList.remove("green-c");
    el2.classList.remove("green-c");
    text = "";
  }
  el.innerHTML=text

}


var remove_click = document.querySelectorAll('.auth-delete>span');
for(var i=0; i <remove_click.length; i++) {
  (function(i) {
   var click = remove_click[i];
   click.onclick = function() {       
     var par = this.parentElement;
     var inp = par.children[0];
     inp.value='';
   }
 })(i);
}
var header = document.getElementById("head-fix");
var scrollTop1 = 0;
window.addEventListener('scroll', function() {
  var headh=header.offsetHeight;
  var scrollTopPrev = scrollTop1; 
  scrollTop1 = window.scrollY;  

  if (scrollTop1 > headh) {
    header.classList.add('fixed-menu');
  }else {
    header.classList.remove('fixed-menu');
 }
});












