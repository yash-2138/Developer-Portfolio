const contact = document.querySelectorAll('.contact-btn')
const contactOverlay = document.querySelector('.contact-overlay')
const submitBtn = document.querySelector('.submit-btn')
const loader = document.querySelector('.loader')
let firstName = document.contact.name.value;
let email = document.contact.email.value;
let mobile = document.contact.mobile.value;
let subject = document.contact.subject.value;
let detail = document.contact.detail.value;

function validateForm() {
    var email = document.forms["contact"]["email"].value;
    var mobileNumber = document.forms["contact"]["mobile"].value;

    // Validate email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Invalid email address");
      return false;
    }

    // Validate mobile number
    var mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(mobileNumber)) {
      alert("Invalid mobile number");
      return false;
    }

    // If all validations pass, form is valid
    return true;
  }
submitBtn.addEventListener('click', async (event)=>{
    event.preventDefault()
    let validate = validateForm()
    if(validate){
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

        await fetch('http://127.0.0.1:3000/api/sendDetails', {
            method: 'POST',
            body: JSON.stringify({"data":data }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((res) => {
            loader.style.display = "none";
            // console.log(res)
            contactOverlay.style.display = 'none'
            // location.reload()
            return res.json();
        })
        .then(data =>{
            console.log(data);
        })
    }
    else{

    }
    
   
    })  



    contact.forEach((ele)=>{
        ele.addEventListener('click', ()=>{
            console.log("jello")
            if(contactOverlay.style.display === 'block'){
                contactOverlay.style.display = 'none'
            }
            else{
                contactOverlay.style.display = 'block'
            }
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
        })
})





async function addDetails(data){
    alert("hello")
    await fetch('http://127.0.0.1:3000/api/sendDetails', {
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