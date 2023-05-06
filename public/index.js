const contact = document.querySelector('.contact-btn')
const contactOverlay = document.querySelector('.contact-overlay')
contact.addEventListener('click', ()=>{
    if(contactOverlay.style.display === 'block'){
        contactOverlay.style.display = 'none'
    }
    else{
        contactOverlay.style.display = 'block'
    }
    
    
})