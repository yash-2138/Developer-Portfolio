const loader = document.querySelector('.loader')
getArticles(1)

async function addArticles(data){
    
    
    for(let i=0;i <data.data.length;i++){
        let container = document.createElement('div');
        let h3 = document.createElement('h3'); 
        let p = document.createElement('p');
        h3.innerText = data.data[i].title;
        p.innerText = data.data[i].description
        container.setAttribute('class', 'container');
    
        let parentElement = document.querySelector('.inner-body');
    
        container.appendChild(h3)
        container.appendChild(p)
        parentElement.appendChild(container);
         
    }
}


async function getArticles(page){
    // alert("hello")
    loader.style.display = "flex";
    await fetch(`http://127.0.0.1:3000/api/getArticles?page=${page}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(res => res.json())
    .then((data) =>{
        console.log(data);
        loader.style.display = "none";
        addArticles(data)
        
    })
    .catch(error => {
        console.log(error)
    });
}