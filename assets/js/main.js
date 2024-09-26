"use strict";

let tabBtns = document.querySelectorAll('.tab__btn')
let tabTexts = document.querySelectorAll('.tab__text')

tabBtns.forEach((item, index)=>{
    item.addEventListener('click', function(){
        document.querySelector('.tab__btn.active').classList.remove('active');
        item.classList.add('active');

        document.querySelector('.tab__text.active').classList.remove('active');
        tabTexts[index].classList.add('active')
    })
})



const tabButtons = document.querySelectorAll('.tab-button');
const tabs = document.querySelectorAll('.tab');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
       
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabs.forEach(tab => tab.classList.remove('active'));

   
        button.classList.add('active');
        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});