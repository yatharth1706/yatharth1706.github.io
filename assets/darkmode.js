document.addEventListener('DOMContentLoaded',() => {
    const theme = document.getElementById('theme');
    const themeToggle = document.querySelector('.darkIcon');

    themeToggle.addEventListener('click',()=>{
        console.log("clicked")
        if(theme.href.includes('light')){
            theme.href = '../assets/dark.scss';
            themeToggle.name = 'sunny';
        }else{
            theme.href = '../assets/light.scss';
            themeToggle.name = 'moon';
        }
    });
});