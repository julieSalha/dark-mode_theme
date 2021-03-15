/*


*/
const button    = document.querySelector('#mode');
const txtButton = document.querySelector('#mode span');
const body      = document.querySelector('body');

function darkMode() {
    console.log('dark mode');
    body.className = 'dark';
    txtButton.textContent = 'Clear mode';
    localStorage.setItem('theme', 'dark');
}


if(localStorage.getItem('theme')) {
    let mode = localStorage.getItem('theme');

    if(mode === "dark") {
        darkMode();
    }
}


button.addEventListener('click', () => {
    if(body.classList.contains('dark')) {
        body.classList.remove('dark');
        txtButton.textContent = 'Dark mode';
        localStorage.setItem('theme', 'clear');
    } else {
        darkMode()
    }
})