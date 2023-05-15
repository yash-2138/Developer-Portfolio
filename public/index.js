const contact = document.querySelector('.contact-btn')
const contactOverlay = document.querySelector('.contact-overlay')
const submitBtn = document.querySelector('.submit-btn')

let firstName = document.contact.name.value;
let email = document.contact.email.value;
let mobile = document.contact.mobile.value;
let subject = document.contact.subject.value;
let detail = document.contact.detail.value;


submitBtn.addEventListener('click', async (event)=>{
    event.preventDefault()
    loader.style.display = "flex";
    firstName = document.contact.name.value;
    email = document.contact.email.value;
    mobile = document.contact.mobile.value;
    subject = document.contact.subject.value;
    detail = document.contact.detail.value;
    let data ={
        name:firstName,
        email: email,
        mobile: mobile,
        sub:  subject,
        details:   detail
    }
//    await addDetails(data)
await fetch('http://127.0.0.1:8000/api/sendDetails', {
        method: 'POST',
        body: JSON.stringify({"data":data }),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then((res) => {
        alert("Thank you for Connecting!! \nCheck you mail for a message from me")
        contactOverlay.style.display = 'none'
        location.reload()
        loader.style.display = "none";
    })
})  



contact.addEventListener('click', ()=>{
    if(contactOverlay.style.display === 'block'){
        contactOverlay.style.display = 'none'
    }
    else{
        contactOverlay.style.display = 'block'
    }
    
    
})
async function addDetails(data){
    alert("hello")
    await fetch('http://127.0.0.1:8000/api/sendDetails', {
        method: 'POST',
        body: JSON.stringify({"data":data }),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(res => res.json())
    .then((data) =>{
        console.log(data);
        alert(data.message);
    })
    .catch(error => {
        if (error.response.status === 500) {
        alert('User not found');
        } else {
        console.error('Error:', error);
        }
    });
}