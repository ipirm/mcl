var mySwiper1 = new Swiper('.slider1', {
    slidesPerView: 2,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 5,
            width: 253
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 5,
            width: 253
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
    },
});

var mySwiper2 = new Swiper('.slider2', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
    },
    pagination: {
        el: '.swiper-pagination2',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
    },
});


window.addEventListener("DOMContentLoaded", function () {
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
        matrix = matrix.replace(/[_\d]/g, function (a) {
            return val.charAt(i++) || "_"
        });
        this.value = matrix;
        i = matrix.lastIndexOf(val.substr(-1));
        i < matrix.length && matrix != this.defaultValue ? i++ : i = matrix.indexOf("_");
        setCursorPosition(i, this)
    }

    var input = document.querySelector("#date-input");
    var input2 = document.querySelector("#phone-input");
    if (input) {
        input.addEventListener("input", mask, false)
        input.oninput = function () {
            var input_val = this.value;
            var arrD = input_val.split(".");
            arrD[1] -= 1;
            var d = new Date(arrD[2], arrD[1], arrD[0]);
            if ((2020 > arrD[2]) && (d.getFullYear() == arrD[2]) && (d.getMonth() == arrD[1]) && (d.getDate() == arrD[0])) {
                this.classList.remove("act");
                return true;
            } else {
                this.classList.add("act");
                return false;
            }


        };
    }
    if (input2) {
        input2.addEventListener("input", mask, false)
    }

});


var serv_bt2 = document.querySelectorAll('.auth-head li');
var serv_content2 = document.querySelectorAll('.auth-item');
for (var i = 0; i < serv_bt2.length; i++) {
    var serv_btn1 = serv_bt2[i];
    (function (i) {
        serv_btn1.onclick = function () {

            for (var j = 0; j < serv_bt2.length; j++) {
                serv_bt2[j].classList.remove("act");
            }
            for (var k = 0; k < serv_content2.length; k++) {
                serv_content2[k].classList.remove("act");
            }
            this.classList.add("act");
            for (var j = 0; j < serv_bt2.length; j++) {
                if (serv_bt2[j].classList.contains("act")) {
                    serv_content2[j].classList.add("act");
                    break;
                }
            }


        }

    })(i);

}

var mob_clicks = document.querySelectorAll('.mob-menu-btn');
for (var i = 0; i < mob_clicks.length; i++) {
    (function (i) {
        var click = mob_clicks[i];
        click.onclick = function () {
            var parent = this.parentElement;
            var child = parent.children[1];

            if (click.classList.contains("act")) {
                this.classList.remove("act");
                child.classList.remove("act");
            } else {
                this.classList.add("act");
                child.classList.add("act");
            }
        }
    })(i);
}
var mab_filtr = document.querySelectorAll('.fitr-block-mob-open');
for (var i = 0; i < mab_filtr.length; i++) {
    (function (i) {
        var click = mab_filtr[i];
        click.onclick = function () {
            var parent = this.parentElement;
            var parent2 = parent.parentElement;
            var child = parent2.children[1];


            if (click.classList.contains("act")) {
                this.classList.remove("act");
                child.classList.remove("act");
            } else {
                this.classList.add("act");
                child.classList.add("act");
            }
        }
    })(i);
}


var clicks = document.querySelectorAll('.leftnav-item-body>a');
for (var i = 0; i < clicks.length; i++) {
    (function (i) {
        var click = clicks[i];
        click.onclick = function (e) {
            e.preventDefault();
            if (click.classList.contains("act")) {
                this.classList.remove("act");
            } else {
                this.classList.add("act");
            }
        }
    })(i);
}
var click_star = document.querySelectorAll('.card-star-btn');
for (var i = 0; i < click_star.length; i++) {
    (function (i) {
        var click = click_star[i];
        click.onclick = function (e) {
            e.preventDefault();
            if (click.classList.contains("act")) {
                this.classList.remove("act");
            } else {
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
        if (russin_lat1.indexOf(password[i]) != -1 || russin_lat2.indexOf(password[i]) != -1) {
            pass.value = '';
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

    if ((password.length < 6 && password.length > 0) && rating < 3) {
        text = "Слабый";
        el.classList.remove("yellow-c");
        el2.classList.remove("yellow-c");
        el.classList.remove("green-c");
        el2.classList.remove("green-c");
        el.classList.add("red-c");
        el2.classList.add("red-c");
    } else if (password.length < 6 && rating >= 3) {
        el.classList.remove("red-c");
        el2.classList.remove("red-c");
        el.classList.remove("green-c");
        el2.classList.remove("green-c");
        text = "Нормальный";
        el.classList.add("yellow-c");
        el2.classList.add("yellow-c");
    } else if (password.length >= 8 && rating < 3) {
        el.classList.remove("red-c");
        el2.classList.remove("red-c");
        el.classList.remove("green-c");
        el2.classList.remove("green-c");
        text = "Нормальный";
        el.classList.add("yellow-c");
        el2.classList.add("yellow-c");
    } else if (password.length >= 8 && rating >= 3) {
        el.classList.remove("red-c");
        el2.classList.remove("red-c");
        el.classList.remove("yellow-c");
        el2.classList.remove("yellow-c");
        text = "Безопасный";
        el.classList.add("green-c");
        el2.classList.add("green-c");
    } else if ((password.length >= 6 && password.length > 0) && rating == 1) {
        text = "Слабый";
        el.classList.remove("yellow-c");
        el2.classList.remove("yellow-c");
        el.classList.remove("green-c");
        el2.classList.remove("green-c");
        el.classList.add("red-c");
        el2.classList.add("red-c");
    } else if (password.length >= 6 && rating > 1 && rating < 4) {
        el.classList.remove("red-c");
        el2.classList.remove("red-c");
        el.classList.remove("green-c");
        el2.classList.remove("green-c");
        text = "Нормальный";
        el.classList.add("yellow-c");
        el2.classList.add("yellow-c");
    } else if (password.length >= 6 && rating == 4) {
        el.classList.remove("red-c");
        el2.classList.remove("red-c");
        el.classList.remove("yellow-c");
        el2.classList.remove("yellow-c");
        text = "Безопасный";
        el.classList.add("green-c");
        el2.classList.add("green-c");
    }

    if (password == '') {
        el.classList.remove("red-c");
        el2.classList.remove("red-c");
        el.classList.remove("yellow-c");
        el2.classList.remove("yellow-c");
        el.classList.remove("green-c");
        el2.classList.remove("green-c");
        text = "";
    }
    el.innerHTML = text

}


var remove_click = document.querySelectorAll('.auth-delete>span');
for (var i = 0; i < remove_click.length; i++) {
    (function (i) {
        var click = remove_click[i];
        click.onclick = function () {
            var par = this.parentElement;
            var inp = par.children[0];
            inp.value = '';
        }
    })(i);
}

var header = document.getElementById("head-fix");
var scrollTop1 = 0;
if (header) {
    window.addEventListener('scroll', function () {
        var headh = header.offsetHeight;
        var scrollTopPrev = scrollTop1;
        scrollTop1 = window.scrollY;

        if (scrollTop1 > headh) {
            header.classList.add('fixed-menu');
        } else {
            header.classList.remove('fixed-menu');
        }
    });

}


var ph_btn = document.querySelector('#add_ph_inp');
if (ph_btn) {
    ph_btn.onchange = function () {
        var pr1 = ph_btn.parentElement;
        var add_block = document.querySelector('#add_img_items');
        var p1 = add_block.children[0];
        var p2 = p1.children;
        if (p2 && p2.length >= 4) {
            this.classList.add('act');
        } else {
            this.classList.remove('act');
        }
        if (p2 && p2.length > 0) {
            pr1.classList.add('act');
        } else {
            this.classList.remove('act');
        }
        if (this.files && this.files[0]) {
            var filerdr = new FileReader();
            filerdr.onload = function (e) {

                var theDiv = document.createElement('div');  // создать новый тег div
                theDiv.innerHTML = '<button class="close_ph"></button><img src="' + e.target.result + '"/><input type="file" value="' + e.target.result + '"/>';  // его содержимое
                var par1 = ph_btn.parentElement;
                var par2 = par1.parentElement;
                var par3 = par2.children[0];
                var par4 = par3.children[0];
                par4.appendChild(theDiv);
                if (p2 && p2.length > 0) {
                    pr1.classList.add('act');
                }
                $('.close_ph').click(function () {
                    $(this).parent().remove();

                    if (p2 && p2.length < 5) {
                        ph_btn.classList.remove('act');
                    }
                    if (p2 && p2.length < 1) {
                        pr1.classList.remove('act');
                    }
                });

            };
            filerdr.readAsDataURL(this.files[0]);
        }
    }

}


var counter = document.querySelectorAll('.couter-input');
for (var i = 0; i < counter.length; i++) {
    (function (i) {
        var click = counter[i];
        click.oninput = function () {
            var par = this.parentElement;
            if (click.classList.contains("caunter-input")) {
                if (click.value.length > 100) {
                    click.value = click.value.slice(0, -1);
                } else {
                    var inp = par.children[0];
                    var inp2 = inp.children[1];
                    var inp3 = inp2.children[0];
                    inp3.innerHTML = this.value.length;
                }

            } else if (click.classList.contains("textarea-tag")) {
                if (click.value.length > 500) {
                    click.value = click.value.slice(0, -1);
                } else {
                    var par2 = par.parentElement;
                    var par3 = par2.parentElement;
                    var ch = par3.children[0];
                    var ch2 = ch.children[1];
                    var ch3 = ch2.children[0];
                    ch3.innerHTML = this.value.length;
                }
            }
        }
    })(i);
}

var serv_btn = document.querySelectorAll('.message-tab-item');
var serv_content = document.querySelectorAll('.message-item');

for (var i = 0; i < serv_btn.length; i++) {
    var serv_btn1 = serv_btn[i];
    (function (i) {
        serv_btn1.onclick = function () {
            for (var j = 0; j < serv_btn.length; j++) {
                serv_btn[j].classList.remove("act");
            }
            for (var k = 0; k < serv_content.length; k++) {
                serv_content[k].classList.remove("act");
            }
            this.classList.add("act");
            for (var j = 0; j < serv_btn.length; j++) {
                if (serv_btn[j].classList.contains("act")) {
                    serv_content[j].classList.add("act");
                    break;
                }
            }


        }

    })(i);

}


var $fields = $('.reg-inp');
var $fields2 = $('.reg-inp2');
var $fields3 = $('.checkpopup');

$fields.on('keyup change', function () {
    if (allFilled($fields)) {
        $('#dis-btn1').removeAttr('disabled');
        $('#dis-btn1').addClass('act');
    } else {
        $('#dis-btn1').attr('disabled', 'disabled');
        $('#dis-btn1').removeClass('act');
    }
});
$fields2.on('keyup change', function () {
    if (allFilled($fields2)) {
        $('#dis-btn2').removeAttr('disabled');
        $('#dis-btn2').addClass('act');
    } else {
        $('#dis-btn2').attr('disabled', 'disabled');
        $('#dis-btn2').removeClass('act');
    }
});
$(".checkpopup").change(function () {
    let checkeds = [];
    document.querySelectorAll('.checkpopup').forEach(function (item) {
        if (item.checked === true) {
            checkeds.push(item);
        }
        if (checkeds.length === 2) {
            $('#dis-btn3').removeAttr('disabled');
            $('#dis-btn3').addClass('act');
            document.querySelector('.auth-item-button').onclick=() =>document.querySelector('.popup').style.display = 'none';
        } else {
            $('#dis-btn3').attr('disabled', 'disabled');
            $('#dis-btn3').removeClass('act');
        }
    });
});

$(".add-code").click(function () {

    $(this).addClass('act');
    $('.mobile-cod-block').addClass('act');

});
$(".mob-message button").click(function () {

    $('.popup-message').addClass('act');

});
$('.close-mesage-popup').click(function () {
    $('.popup-message').removeClass('act');

});
$(".mob-search button").click(function () {

    $('.header-mob-search').addClass('act');
    document.body.style.overflow = 'hidden';
    document.querySelector('.content').classList.add('body-active');
    $('.header-mob').addClass('act');

});
document.querySelector('.content').onclick = () => {
    $('.header-mob-search').removeClass('act');
    $('.header-mob').removeClass('act');
    document.body.style.overflow = 'auto';
    if (document.querySelector('.content').classList.contains('body-active'))
        document.querySelector('.content').classList.remove('body-active');
};
$(".fix-search").click(function () {

    $('.search-item.fix-mm').addClass('act1');
    $(this).addClass('act');

});

function allFilled($fields) {
    return $fields.filter(function () {
        return this.value === '';
    }).length == 0;
}


var menu_btn = document.querySelectorAll('.account-btn button');

for (var i = 0; i < menu_btn.length; i++) {
    var serv_btn1 = menu_btn[i];
    (function (i) {
        serv_btn1.onclick = function () {

            this.classList.toggle("act");
            this.parentElement.children[1].classList.toggle("act");


        }

    })(i);

}

var input_search2 = document.querySelector("#input_search2");

input_search2.onblur = function () {
    var par1 = this.parentElement;
    par1.parentElement.classList.remove('act');
};

input_search2.onfocus = function () {
    var par1 = this.parentElement;
    par1.parentElement.classList.add('act');
};

var input_search = document.querySelector("#input_search");

input_search.onblur = function () {
    var par = this.parentElement;
    par.parentElement.classList.remove('act');
};

input_search.onfocus = function () {
    var par = this.parentElement;
    par.parentElement.classList.add('act');
};


$('#dateprice').datepicker();
var htmlCustomBtn = '<select vp-button class="seldate"><option selected>30</option></select>';
var htmlCustomBtn2 = '<select vp-button class="seldate"><option selected>14</option></select>';
var htmlCustomBtn3 = '<button vp-button>Применить</button>';
var htmlDtpCustomSection = '<div class="datepicker--custom">' + htmlCustomBtn2 + htmlCustomBtn + htmlCustomBtn3 + '</div>';
$(htmlDtpCustomSection).insertAfter('.datepicker--content');


var ph_btn1 = document.querySelector('#account-file');
if (ph_btn1) {
    ph_btn1.onchange = function () {
        var pr1 = ph_btn1.parentElement;
        var pr2 = pr1.parentElement;
        if (this.files[0]) {
            pr2.classList.add('act');
            var filerdr = new FileReader();
            filerdr.onload = function (e) {
                var var_img_bl = document.querySelector('.account-photo-change');
                var_img_bl.classList.add('act');

                document.getElementById("account-photo-change").src = e.target.result;


            };
            filerdr.readAsDataURL(this.files[0]);
        }
    }

}
var ph_btn2 = document.querySelector('#account-file2');
if (ph_btn2) {
    ph_btn2.onchange = function () {
        if (this.files[0]) {

            var filerdr = new FileReader();
            filerdr.onload = function (e) {

                document.getElementById("account-photo-change").src = e.target.result;


            };
            filerdr.readAsDataURL(this.files[0]);
        }
    }

}



$("#add_tag").tagsinput('items');
$(".textarea-tag").hashtags();
