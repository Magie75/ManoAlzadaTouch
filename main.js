var last_position_of_x, last_position_of_y;
color = "black";
width_of_line = 2;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
//Identifica ancho de pantalla dispositivo donde se esta visualizando
//Coloca medida estandar
var width = screen.width;
new_width = screen.width - 70;
new_height = screen.height - 300;

//Ancho de pantalla 1200px y más será la pantalla grande: Se trata de laptops y
// computadoras de escritorio.
// ● Ancho de pantalla entre 1200px y 992px: Se trata de laptops.
// ● Ancho de pantalla entre 992px y 768px: Son las tabletas.
// ● Ancho de pantalla menor a 768px: Son teléfonos.

if (width < 992) {
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    //hace que la pantalla principal html el estilo del cuerpo con la propiedad CSS
// overflow:hidden. Este estilo desactiva el desplazamiento de la página. Se hace
// para que la pintura en el lienzo se pueda hacer muy suavemente.
    document.body.style.overflow = "hidden";
}

// Eventos táctiles
canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) {
    console.log("my_touchstart");
    //Actividad adicional
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    //Final de la actividad adicional

    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) {

    console.log("my_touchmove");
    
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

    // old same old as the paint web app
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Posición ANTERIOR coordenadas de X y de Y = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("Posición ACTUAL coordenadas de X y de Y = ");
    console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();

    last_position_of_x = current_position_of_touch_x;
    last_position_of_y = current_position_of_touch_y;


    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    
}

// limpia el área del canvas de acuerdo al ancho y alto de la pantalla en la que se visualiza la
//página web
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
    // fin de la función
