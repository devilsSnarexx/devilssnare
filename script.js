// Mobile navigation toggle
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
}

// Brainfuck page interaction
const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

if (wrapper && question && yesBtn && noBtn) {
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    yesBtn.addEventListener('click', () => {
        question.innerHTML = 'Great! New brain fucks soon :)';
    });

    noBtn.addEventListener('mouseover', () => {
        const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
        const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;

        noBtn.style.left = i + 'px';
        noBtn.style.top = j + 'px';
    });
}
