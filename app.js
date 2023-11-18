const upBtn = document.querySelector('.up-button');
const douwnBtn = document.querySelector('.down-button');
const sideBar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const container = document.querySelector('.container');
const slidesCount = mainSlide.querySelectorAll('div').length;

sideBar.style.top = `-${(slidesCount - 1) * 100}vh`;

let activeSlideIndex = 0;

upBtn.addEventListener('click', () => {
    changeSlide('up');
})

douwnBtn.addEventListener('click', () => {
    changeSlide('down');
})

document.addEventListener('keydown',
    event => {
        if (event.key === 'ArrowUp') {
            changeSlide('up')

        } else if (event.key === 'ArrowDown') {
            changeSlide('down')
        }
    })

document.addEventListener('wheel',
    event => {
        console.log(event.deltaY);
        if (event.deltaY < 0) {
            changeSlide('up');
        } else if (event.deltaY > 0) {
            changeSlide('down');
        }

    })


function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0;
        }
    } else if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1;
        }
    }
    const height = container.clientHeight;
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sideBar.style.transform = `translateY(${activeSlideIndex * height}px)`
}

