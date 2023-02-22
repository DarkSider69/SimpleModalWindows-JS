'use strict';
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnsOpenModal = document.querySelectorAll('.show-modal')

console.log(btnsOpenModal)

for(let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', function() {
        modal.classList.remove('hidden')
        overlay.classList.remove('hidden')
    })
    btnCloseModal.addEventListener('click', function() {
        modal.classList.add('hidden')
        overlay.classList.add('hidden')
    })
}

const closeModal = function() {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

document.addEventListener('keydown', function(e) {
    if(e.key === 'Escape') {
        if(!modal.classList.contains('hidden')) {
            closeModal()
        }
    }
})