document.addEventListener('DOMContentLoaded',() => {
    const theme = document.getElementById('theme');
    const themeToggle = document.querySelector('.darkIcon');

    function addIcon(mode){
        var icon = document.createElement("i");
        if(mode == "dark"){
            icon.className = "fas fa-moon dark";
        }else{
            icon.className = "fas fa-sun dark";
        }
        themeToggle.innerHTML = '';
        themeToggle.insertAdjacentElement("beforeend",icon);      
    }

    // check if href set in localstorage or not
    const localTheme = localStorage.getItem('theme');
    if(localTheme){
        if(localTheme == 'dark'){
            theme.href = '../assets/dark.scss';
            addIcon("light");
        }else{
            theme.href = '../assets/light.scss';
            addIcon("dark");
        }
    }else{
        theme.href = '../assets/light.scss';
        addIcon("dark");
    }

    themeToggle.onclick = () => {
        console.log("clicked")
        if(theme.href.includes('light')){
            theme.href = '../assets/dark.scss';
            localStorage.setItem('theme','dark');
            addIcon("light");
        }else{
            theme.href = '../assets/light.scss';
            localStorage.setItem('theme','light');
            addIcon("dark");
        }
    };
});