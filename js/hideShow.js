var button = document.getElementsByClassName('but'),
tabContent = document.getElementsByClassName('tab-content');
button[0].classList.add('active');
tabContent[0].style.display = 'block';


function project(e, project) {
    var i;
    for (i = 0; i < button.length; i++) {
        tabContent[i].style.display = 'none';
        button[i].classList.remove('active');
    }
    document.getElementById(project).style.display = 'block';
    e.currentTarget.classList.add('active');
}
