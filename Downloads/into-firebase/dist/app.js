const { default: postcss } = require("postcss");


console.log(db);


db.collection('articles').onSnapshot(snap => {

    console.log(snap.docs);
    snap.docs.forEach(doc => {
        render(doc.data())
    });
});

const section = document.querySelector(".section")

function render(doc){
    const element = document.createElement('div');
    element.classList.add(`section__container`);
    element.innerHTML = `
    <div class="section__icon">
    <i class="${doc.icon}"></i>
    </div>
    <div class="section__content">
    <h2 class="section_title">${doc.title}
        <span class="section__date">${formatDate(doc.date)}</span>
    </h2>

    <p class="section__desctiption">
    ${doc.content}
    </p>`;


section.appendChild(element);
}

function formatDate(date) {
    const newDate = date.toDate();
    const day = newDate.toLocaleString("en-US", {weekday:'long'})
    const month = newDate.toLocaleString("en-US", {month:'short'})
    const year = newDate.toLocaleString("en-US", {year:'numeric'})

return `Released at ${day} ${month} ${year}`

}

searchInput.addEventListener('inout',e => {

    const title = document.querySelector('.section__title').innerText;
    const content = document.querySelector('.section__description');
    const posts = document.querySelector('.section__container');

    const value = e.target.value;
    posts.forEach(item => {

    

    })

})




//ADD MODULE 


btn.addEventListener('click',(e) =>{

    addModal.classList.add('modal-show');

})

window.addEventListener('DOMContentLoaded', (e) => {
    if(e.target === addModal){
        addModal.classList.remove('modal-show')
    }
})