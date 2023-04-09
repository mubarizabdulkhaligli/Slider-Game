let slideImages = ['/images/1.jpg', '/images/2.jpg', '/images/3.jpg', '/images/4.jpg', '/images/5.jpg', '/images/6.jpg'];

let image = document.querySelector('.slider img');

let currentSlide = 0;

image.src = slideImages[currentSlide];

let next = document.querySelector('.next')
let prev = document.querySelector('.previous')

next.onclick = function(){
    currentSlide++
    if(currentSlide>=slideImages.length)
    {
        currentSlide=0
    }
    image.src = slideImages[currentSlide]
    setActiveDot()
}

prev.onclick = function(){
    currentSlide --
    if(currentSlide < 0)
    {
        currentSlide=slideImages.length-1
    }
    image.src = slideImages[currentSlide]
    setActiveDot()
}

let dots = document.querySelectorAll('.dot');

for(let dot of dots){
    dot.onclick = function(){
        let active = document.querySelector('.active');
        active.classList.remove('active')
        this.classList.add('active')
        let dotID = this.id;
        currentSlide = dotID - 1;
        image.src = slideImages[currentSlide];
    }
}

document.addEventListener('keydown', function(event) {
    if (event.code === 'ArrowRight') {
        currentSlide++;
        if(currentSlide >= slideImages.length) {
            currentSlide = 0;
        }
        image.src = slideImages[currentSlide];
        setActiveDot();
    } else if (event.code === 'ArrowLeft') {
        currentSlide--;
        if(currentSlide < 0) {
            currentSlide = slideImages.length - 1;
        }
        image.src = slideImages[currentSlide];
        setActiveDot();
    }
});



function setActiveDot() {
    let active = document.querySelector('.active');
    active.classList.remove('active')
    dots[currentSlide].classList.add('active')
}
