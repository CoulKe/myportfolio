const summary = document.querySelectorAll('.summary');
let full_desc = document.querySelectorAll('.full-description');

summary.forEach((s, index) => {
    s.addEventListener('click', ()=>{
        full_desc[index].style.display = 'block';
    })
})