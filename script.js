const openNav = document.getElementById("open-nav")
const closeNav = document.getElementById("close-nav")
const smUl = document.querySelector(".nav-ul-sm")
const myCard = document.getElementById("my-grid")
const center = document.getElementById('center')
// const drop = document.getElementById('t-cat')
// const subDrop = document.querySelector('.sub-drop')
// const chevUp = document.getElementById("my-chev")
var vari = 'all';
// nav functionality
openNav.addEventListener("click", ()=>{
    closeNav.style.display = "block"
    openNav.style.display = "none"
    smUl.style.display = "block"
})
closeNav.addEventListener("click", ()=>{
    closeNav.style.display = "none"
    openNav.style.display = "block"
    smUl.style.display = "none"
})


// .then solution
// function loader(){
//     myCard.innerHTML = ''
//     fetch(`https://inshorts.deta.dev/news?category=${vari}`)
//     .then(res => res.json())
//     .then((data)=>data.data)
//     .then(function(player){
//         player.map((item)=>{
//             myCard.innerHTML += `<div class="my-card">
//             <img src="${item.imageUrl}" alt="" class="img-card" >
//             <div class="my-text">
//                 <p class="my-date">${item.date}</p>
//                 <h3 class="author">${item.author}</h3>
//                 <p class="content">${item.title}</p>
//             </div>
//          </div>`
          
//         })
//     })
//     return
// }


// sport
const sport = document.querySelector(".sports")
sport.addEventListener("click",()=>{
     vari = "sports"
     fetchFromAPI()
})
// for geneal
const general = document.querySelector(".general")
general.addEventListener("click", ()=>{
     vari = "all"
     fetchFromAPI ()
})
// for business
const business = document.querySelector(".business")
business.addEventListener("click", ()=>{
     vari = "science"
     fetchFromAPI ()
})
// world
const world  = document.querySelector(".world")
world.addEventListener('click', ()=>{
    vari = "world"
    fetchFromAPI ()
})
// politoics
const politics = document.querySelector('.politics')
politics.addEventListener("click", ()=>{
    vari = "politics"
    fetchFromAPI ()
})
// technology
const technology = document.querySelector('.technology')
technology.addEventListener('click',()=>{
    vari = "technology"
    fetchFromAPI ()
})
// startUp
const startUp = document.querySelector('.startup')
startUp.addEventListener("click",()=>{
    vari = "startup"
    fetchFromAPI ()
})
// entertainment
const entertainer = document.querySelector('.entertainment')
entertainer.addEventListener("click", ()=>{
    vari = "entertainment"
    fetchFromAPI ()
})
// misel
const miscell = document.querySelector('.miscell')
miscell.addEventListener('click', ()=>{
    vari = "miscellaneous"
    fetchFromAPI ()
})
// for science
const science = document.querySelector('.science')
science.addEventListener('click',()=>{
    vari = "science"
    fetchFromAPI ()
})
// for automobile
const automobile = document.querySelector('.auto')
automobile.addEventListener('click', ()=>{
    vari = "automobile"
    fetchFromAPI ()
})
// await solution
const myBtn = document.getElementById('suhm')
async function fetchFromAPI (x) {
    center.style.display = 'flex'
    myCard.innerHTML = ''
    const response = await fetch(`https://inshorts.deta.dev/news?category=${vari}`)
    const res = await response.json()
    const data = await res.data
    if(data)(
        center.style.display = 'none'
    )
        data.map((item)=>{
            myCard.innerHTML += `<div class="my-card-con ">
            <img src="${item.imageUrl}" alt="" class="img-card" >
            <div class="my-text ps-3">
                <h3 class="author">${item.author}</h3>
                <p class="content">${item.title}</p>
                <div class="date-time">
                     <p class="my-date">${item.date}</p>
                    <p class="time">${item.time}</p>
                </div>
            </div>
         </div>`
          
        })
    return;
}
window.onload(fetchFromAPI () )
