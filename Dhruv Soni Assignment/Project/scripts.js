var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var reset = document.getElementById('reset');

//Create circle object
function circle(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.draw = function() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        context.fillStyle = this.color;
        context.fill();
    }
}



var circle1 = new circle(100, 100, 20, '#fff719');
circle1.draw();
var circle2 = new circle(100, 200, 20, '#0e98ed');
circle2.draw();
var circle3 = new circle(100, 300, 20, '#ed370e');
circle3.draw();
var circle4 = new circle(100, 400, 20, '#57ed39');
circle4.draw();


//Create arrow object
function arrow(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.draw = function() {
        context.beginPath();
        context.moveTo(this.x, this.y);
        context.lineTo(this.x + this.width, this.y + this.height);
        context.lineTo(this.x + this.width, this.y - this.height);
        context.fillStyle = 'black';
        context.fill();
    }

}


var arrow1 = new arrow(700, 100, 20, 10, 'black');
arrow1.draw();
var arrow2 = new arrow(700, 200, 20, 10, 'black');
arrow2.draw();
var arrow3 = new arrow(700, 300, 20, 10, 'black');
arrow3.draw();
var arrow4 = new arrow(700, 400, 20, 10, 'black');
arrow4.draw();

//funtion to draw all the objects
function objectDraw() {
    circle1.draw();
    circle2.draw();
    circle3.draw();
    circle4.draw();
    arrow1.draw();
    arrow2.draw();
    arrow3.draw();
    arrow4.draw();
}



//Create alert on click circle object
canvas.addEventListener('click', (event) => {
    // console.log('canvas click');
    if (event.offsetX > 80 && event.offsetX < 120 && event.offsetY > 80 && event.offsetY < 120) {
        console.log('circle1 click');
        //If circle1 is clicked, move arrow1 to circle1 through animation
        var x = 700;
        var y = 100;
        var id = setInterval(frame, 5);
        function frame() {
            if (x == 120) {
                clearInterval(id);
                //Change color of circle1
                circle1.color = 'grey';
                circle1.draw();
            } else {
                x--;
                context.clearRect(0, 0, 800, 150);
                // context.clearRect(arrow1.width, arrow1.height, arrow1.width, arrow1.height);    // (x, y, width, height)
                arrow1 = new arrow(x, y, 20, 10, 'black');    // (x, y, width, height, color)
               
                objectDraw();
            }
        }

    }
    if (event.offsetX > 80 && event.offsetX < 120 && event.offsetY > 180 && event.offsetY < 220) {
        console.log('circle2 click');

        //If circle2 is clicked, move arrow2 to circle2 through animation
        var x = 700;
        var y = 200;
        var id = setInterval(frame, 5);
        function frame() {
            if (x == 120) {
                clearInterval(id);
                //Change color of circle2
                circle2.color = 'grey';
                circle2.draw();
            } else {
                x--;
                context.clearRect(0, 0, 800, 250);    // (x, y, width, height)
                arrow2 = new arrow(x, y, 20, 10, 'black');    // (x, y, width, height, color)
                objectDraw();

            }
        }
    }
    if (event.offsetX > 80 && event.offsetX < 120 && event.offsetY > 280 && event.offsetY < 320) {
        console.log('circle3 click');

        //If circle3 is clicked, move arrow3 to circle3 through animation
        var x = 700;
        var y = 300;
        var id = setInterval(frame, 5);
        function frame() {
            if (x == 120) {
                clearInterval(id);
                //Change color of circle3
                circle3.color = 'grey';
                circle3.draw();
            } else {
                x--;
                context.clearRect(0, 0, 800, 350);    // (x, y, width, height)
                arrow3 = new arrow(x, y, 20, 10, 'black');    // (x, y, width, height, color)
                objectDraw();
            }
        }
    }
    if (event.offsetX > 80 && event.offsetX < 120 && event.offsetY > 380 && event.offsetY < 420) {
        console.log('circle4 click');

        //If circle4 is clicked, move arrow4 to circle4 through animation
        var x = 700;
        var y = 400;
        var id = setInterval(frame, 5);
        function frame() {
            if (x == 120) {
                clearInterval(id);
                //Change color of circle4
                circle4.color = 'grey';
                circle4.draw();
            } else {
                x--;
                context.clearRect(0, 0, 800, 450);    // (x, y, width, height)
                arrow4 = new arrow(x, y, 20, 10, 'black');    // (x, y, width, height, color)
                objectDraw();
            }
        }
    }
});

// Reset canvas
reset.addEventListener('click', () => {
    context.clearRect(0, 0, 800, 500);
    circle1 = new circle(100, 100, 20, '#fff719');
    circle1.draw();
    circle2 = new circle(100, 200, 20, '#0e98ed');
    circle2.draw();
    circle3 = new circle(100, 300, 20, '#ed370e');
    circle3.draw();
    circle4 = new circle(100, 400, 20, '#57ed39');
    circle4.draw();
    arrow1 = new arrow(700, 100, 20, 10, 'black');
    arrow1.draw();
    arrow2 = new arrow(700, 200, 20, 10, 'black');
    arrow2.draw();
    arrow3 = new arrow(700, 300, 20, 10, 'black');
    arrow3.draw();
    arrow4 = new arrow(700, 400, 20, 10, 'black');
    arrow4.draw();
}
);











