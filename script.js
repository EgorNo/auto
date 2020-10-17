setTimeout(function () {
    document.body.classList.add('body_visible');
}, 200);
function first() {
    document.getElementById("second_hide").setAttribute("style", "opacity:1; transition: 1s; height: 100%;");
    document.getElementById("first").setAttribute("style", "display: none");
    document.getElementById("first_yelloy").setAttribute("style", "display: block");
}

function first_yelloy() {
    document.getElementById("second_hide").setAttribute("style", "display: none");
    document.getElementById("first_yelloy").setAttribute("style", "display: none");
    document.getElementById("first").setAttribute("style", "display: block");
}


document.ondragstart = noselect; 
// запрет на перетаскивание 
document.onselectstart = noselect; 
// запрет на выделение элементов страницы 
document.oncontextmenu = noselect; 
// запрет на выведение контекстного меню 
function noselect() {return false;} 
