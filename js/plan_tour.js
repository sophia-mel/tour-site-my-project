const planTourBtn = document.getElementsByClassName('section__button section__button-2')[0],
planTourClose = document.getElementsByClassName('plan_tour_close')[0],
planTourModal = document.getElementsByClassName('plan_tour_modal')[0],
planTourSend = document.getElementsByClassName('tour_modal_send')[0];



function modalCheck(info){
    planTourModal.style.display = info
}

planTourBtn.addEventListener('click', (e)=>modalCheck('flex'))
planTourClose.addEventListener('click', (e)=>modalCheck('none'))

planTourSend.addEventListener('submit', (e)=>{
    modalCheck('none')
})



planTourModal.addEventListener('click', (e)=> e.currentTarget === e.target && modalCheck('none'))