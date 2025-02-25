function isTouching(obj1, obj2) {
    if (obj2.x - obj1.x <= obj1.width / 2 + obj2.width / 2 &&
        obj1.x - obj2.x <= obj1.width / 2 + obj2.width / 2 &&
        obj2.y - obj1.y <= obj1.height / 2 + obj2.height / 2 &&
        obj1.y - obj2.y <= obj1.height / 2 + obj2.height / 2) {
        return true;
    }
    else {
        return false;
    }
}
function bounceOff(obj1, obj2) {
    if (obj2.x - obj1.x < obj1.width / 2 + obj2.width / 2 &&
        obj1.x - obj2.x < obj1.width / 2 + obj2.width / 2) {
        obj2.velocityX = obj2.velocityX * (-1);
    }
    else if (obj2.y - obj1.y < obj1.height / 2 + obj2.height / 2 &&
        obj1.y - obj2.y < obj1.height / 2 + obj2.height / 2) {
        obj2.velocityY = obj2.velocityY * (-1);
    }
}