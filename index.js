const popUp = document.getElementById('pop-up');
const closeBtn = document.getElementById('close-btn');

setTimeout(() => {
    popUp.classList.remove('hide');
    popUp.classList.add('show');
}, 3000)

closeBtn.addEventListener('click', () => window.location.replace("https://docs.google.com/forms/d/e/1FAIpQLSc9urrrKWGUP9Wu8bEzUsc-ik-WbnEFgo_kJ2Ewz7F_J5A2cQ/viewform"))