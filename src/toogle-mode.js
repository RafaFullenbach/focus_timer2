let darkMode = false;

const buttonToogle = document.querySelector('.toogle-mode');

buttonToogle.addEventListener('click', (event) => {

    document.documentElement.classList.toggle('dark');

    const mode = darkMode ? 'light' : 'dark';

    event.currentTarget.querySelector('span').textContent = `${mode} mode ativado!`

    darkMode = !darkMode;
})
