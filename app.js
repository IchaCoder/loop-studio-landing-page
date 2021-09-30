// Selecting targeted elements

const navBtns = document.querySelectorAll('.nav-btn');
const menuBtn = document.querySelector('.open-menu');
const closeBtn = document.querySelector('.close-nav');
const nav = document.querySelector('nav')
const workBody = document.querySelector('.body');

navBtns.forEach(btn => {
    btn.addEventListener('mouseover', function(e){
        let classListOfChild = e.currentTarget.children[0].classList;
        // Adding the underline class
        classListOfChild.add('show-underline')
        
        // Removing the underline class
        navBtns.forEach(div => {
            div.addEventListener('mouseout',function(){
                console.log('hello world');
                classListOfChild.remove('show-underline')

            } )
            
        })
    })
})

// Opening and closing the menu button on smaller screens

menuBtn.addEventListener('click', () => {
    const navClassList = nav.classList;
    navClassList.add('show-nav') 
})
closeBtn.addEventListener('click', () => {
    const navClassList = nav.classList;
    navClassList.remove('show-nav') 
})

workBody.addEventListener('click', () => {
    const navClassList = nav.classList;
    navClassList.remove('show-nav')
    console.log(workBody);
})