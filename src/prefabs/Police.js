class Police extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);
        this.moveSpeed = hDivide;
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(keyUP) && this.y >= hDivide){
            this.y -= this.moveSpeed;
            console.log(this.y, h);
        }

        if(Phaser.Input.Keyboard.JustDown(keyDOWN) && this.y <= h - hDivide){
            this.y += this.moveSpeed;
            console.log(this.y, h);
        }
    }
}