var obj1, obj2;
var car, wall;
function setup() {
    createCanvas(1200, 800);
    wall = createSprite(250, 400, 100, 250);
    car = createSprite(1050, 400, 50, 50);
    car.velocityX = -10;
}

function draw() {
    background("yellow");
    if (isTouching(wall, car)) {
        car.velocityX = 0;
        wall.shapeColor = "red";
    }
    else {
        wall.shapeColor = "green";
    }
    drawSprites();
}