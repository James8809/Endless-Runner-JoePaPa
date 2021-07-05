class Play extends Phaser.Scene{
    constructor() {
        super("playScene")
    }

    init() {

    }
    preload() {
        this.load.spritesheet('police', './assets/spritesheet(3).png',{
            frameWidth:105,
            frameHeight:59
        });
        this.load.image('truck', './assets/truck.png');
        this.load.image('highway', './assets/highway.png');
    }
    create() {
        this.highway = this.add.tileSprite(0, 0, 1080, 600, 'highway').setOrigin(0, 0);
        this.p1Police = new Police(this, 10, 18.5, 'police').setOrigin(0,0);
        this.truck1 = new Truck(this, w + wDivide, truckMargin, 'truck').setOrigin(0,0);
        this.truck2 = new Truck(this, w + wDivide, hDivide + truckMargin, 'truck').setOrigin(0,0);
        this.truck3 = new Truck(this, w + wDivide, hDivide*2 + truckMargin, 'truck').setOrigin(0,0);
        this.truck4 = new Truck(this, w + wDivide, hDivide*3 + truckMargin, 'truck').setOrigin(0,0);
        this.truck5 = new Truck(this, w + wDivide, hDivide*4 + truckMargin, 'truck').setOrigin(0,0);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    }
    update() {
        this.highway.tilePositionX += game.settings.startSpeed;
        this.p1Police.update();
        this.truck1.update();
        this.truck2.update();
        this.truck3.update();
        this.truck4.update();
        this.truck5.update();

        count++;
        if(count % 50 == 0) {
            game.settings.startSpeed += 1;
        }
    }
}