
const theme = {
    init: function () {
        console.log('initialisation du module theme');
        document.querySelector('#theme-switch').addEventListener('click', function () {
            
            if (theme.switchTheme())
            {
                document.cookie = 'theme=theme-disco';
                localStorage.setItem('theme', 'theme-disco');
            }
            else 
            {
                document.cookie = 'theme=theme-light';
                localStorage.setItem('theme', 'theme-light');
            }
            document.querySelector('.page_title').classList.toggle('theme-disco');
        });
       
    },
    

    switchTheme : function ()
    {
        return document.querySelector('body').classList.toggle('theme-disco');
    }
}

