const feedbackBtn = document.getElementsByClassName('section__button section__button-3')[0],
feedbackClose = document.getElementsByClassName('feedback_close')[0],
feedbackModal = document.getElementsByClassName('feedback_modal')[0],
feedbackShare = document.getElementsByClassName('feedback_share')[0];




function modalChange(info){
    feedbackModal.style.display = info
}

feedbackBtn.addEventListener('click', (e)=>modalChange('flex'))
feedbackClose.addEventListener('click', (e)=>modalChange('none'))

feedbackShare.addEventListener('submit', (e)=>{
    modalChange('none')
})



feedbackModal.addEventListener('click', (e)=> e.currentTarget === e.target && modalChange('none'))