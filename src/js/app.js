const footerOne = document.querySelector('.card-footer');
const footerTwo = document.querySelector('.share-section');
const shareBtn = document.getElementById('shareBtn');
const shareBtn1 = document.getElementById('shareBtn1');

shareBtn.addEventListener('click', () => {
    if (window.innerWidth < 700) {
        footerOne.classList.toggle('active');
        footerTwo.classList.toggle('active');  
    } else {
        document.querySelector('.popover-wrapper').classList.toggle('active');
    }
    
});
shareBtn1.addEventListener('click', () => {
    footerOne.classList.toggle('active');
    footerTwo.classList.toggle('active');
});
