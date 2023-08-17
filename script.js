// Unfold form 

const formName = document.querySelector('.form__name');
const formTel = document.querySelector('.form__tel');

const formChildName = document.querySelector('.form__child-name');
const formAge = document.querySelector('.form__age');
const formSelect = document.querySelector('.form__select');
const formEmail = document.querySelector('.form__email');

const formSelectOptions = document.querySelector('.form__select__options');

const formShownArray = [formName, formTel];
const formHiddenArray = [formChildName, formAge, formSelect, formEmail];

function unfoldForm() {
    formTel.classList.add('form-unfold');
    for (let i = 0; i < formHiddenArray.length; i++) {
        formHiddenArray[i].style.zIndex = '0';
    }
}

formName.addEventListener('click', unfoldForm);
formTel.addEventListener('click', unfoldForm);

// Unfold selection input 

const formSelectImg = document.querySelector('.form__select__img');

function slideList() {
    formSelectImg.classList.toggle('arrow-rotation');
    formSelect.classList.toggle('unfold-select');
    formSelectOptions.classList.toggle('options-visibility');
    if (formEmail.style.zIndex === "0") {
        formEmail.style.zIndex = "-1";
    } else {
        formEmail.style.zIndex = "0";
    }
}

formSelectImg.addEventListener('click', slideList);

// Change body parts in "demonstration"

const demonstrationDescriptionText = document.querySelector('.demonstration__description__text');

const data = JSON.parse(bodyPartsData);
const demonstrationBoy = document.querySelector('.demonstration__boy');
const demonstrationArrow = document.querySelector('.demonstration__arrow');
let target;

function changeImg(target) {
    const getData = data[target.id];
    demonstrationBoy.setAttribute('src', getData['bodyImage']);
    demonstrationArrow.setAttribute('src', getData['arrowImage']);
    demonstrationArrow.className = "";
    demonstrationArrow.classList.add(`${getData['class']}`);
}

function removeSelectedClass(e) {
    if (e.target.classList.contains('description__item')) {
        let allSelected = document.querySelectorAll('.description__selected-item');
        allSelected.forEach(element => {
            element.classList.remove('description__selected-item')
        });
        target = e.target;
    } else if (e.target.parentElement.classList.contains('description__item')) {
        let allSelected = document.querySelectorAll('.description__selected-item');
        allSelected.forEach(element => {
            element.classList.remove('description__selected-item')
        });
        target = e.target.parentElement;
    }
}

function mouseoverDemonstraition(e) {
    if (target.classList.contains('description__item')) {
        target.classList.add('description__selected-item');
    }
}

demonstrationDescriptionText.addEventListener('mouseover', function (e) {
    removeSelectedClass (e);
    mouseoverDemonstraition(e);
    changeImg(target);
});