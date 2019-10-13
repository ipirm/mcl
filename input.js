if (document.querySelector('.js__focus__search') !== null) {
    const search_input = document.querySelector('.js__focus__search');
    search_input.onfocus = (e) => {
        e.target.closest('.search-item').style.border = '1px solid #005ED9';

    };
    search_input.onblur = (e) => {
        e.target.closest('.search-item').style.border = '1px solid #D9D9DE';
    };
}
if (document.querySelector('.city_1 input') !== null) {
    const input_location = document.querySelector('.city_1 input');
    const btn_location = document.querySelector('.city_1 .city-input button');
    const autocomplete = document.querySelector('.inputAutocomlete');
    input_location.oninput = () => {
        if (input_location.value.length !== 0) {
            btn_location.style.backgroundColor = '#005ED9';
            autocomplete.style.display = 'block';
            if (window.innerWidth < 500) {
                btn_location.style.display = 'block';
            }
        } else {
            btn_location.style.backgroundColor = '#A7A7AB';
            autocomplete.style.display = 'none';
            if (window.innerWidth < 500) {
                btn_location.style.display = 'none';
            }
        }
        document.querySelectorAll('.inputAutocomlete__item').forEach(function (item) {
            item.onclick = () => {
                input_location.value = item.innerText;
                autocomplete.style.display = 'none';
            }
        })
    };
}
if(document.querySelector('.location-block') !==0){
    document.querySelector('.location-block').onmouseover = () => document.querySelector('.choose-region').style.display = 'block';
    document.querySelector('.location-block').onmouseleave = () => document.querySelector('.choose-region').style.display = 'none';
}
