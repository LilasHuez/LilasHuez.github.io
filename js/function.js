function discoTheme()
{
    const bodyElem = document.querySelector('body');
    bodyElem.classList.add('theme-disco');
}


function lightTheme()
{
    
    document.querySelector('body').classList.remove('theme-disco');
}


function switchTheme()
{
    

    document.querySelector('body').classList.toggle('theme-disco');

}

