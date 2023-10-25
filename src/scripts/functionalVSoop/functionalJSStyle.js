// speed, maxSpeed, engine,
// speedUp, slowDown, startEngine, stopEngine

// factory function

function Auto(brand, maxSpeed){
    this.speed = 0;
    this.maxSpeed = maxSpeed;
    this.brand = brand;
    this.engine = false;
}

Auto.prototype.startEngine = function () {
    if (!this.engine) {
        Auto.engine = true;
        console.log('Silnik odpalony!');
    } else {
        console.log('Silnik już był odpalony');
    }
}

Auto.prototype.stopEngine = function() {
    if (this.speed === 0) {
        this.engine = false;
        console.log('Silnik zgaszony')
    }else{
        console.log('Zatrzymaj furę wpierw.')
    }
}

Auto.prototype.speedUp = function speedUp (amount){
    if (this.engine) {
        this.speed = Math.min(this.speed + amount, this.maxSpeed);
        console.log(`jedziesz z prędkością ${this.speed}`)
    } else {
        console.log('odpal silnik');
    }
}

Auto.prototype.slowDown = function(amount){
    this.speed = Math.max(this.speed - amount, 0);
    console.log(`jedziesz z prędkością ${this.speed}`);
}

const bmw = new Auto('bmw', 160);
const toyota = new Auto('toyota', 198);

bmw.speedUp(100);
bmw.startEngine();
bmw.speedUp(50);
bmw.speedUp(100);
bmw.speedUp(100);
bmw.stopEngine();
bmw.slowDown(100);
bmw.slowDown(100);
bmw.stopEngine();