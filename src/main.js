let config = {
    type: Phaser.CANVAS,
    width: 1050,
    height: 600,
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade'
    },
    scene: [Menu, Help, Play, Ending]
}

let game = new Phaser.Game(config);

let w = game.config.width;
let h = game.config.height;
let keyUP, keyDOWN, keyH, keyESC, keyENTER;
let wDivide = w/7;
let hDivide = h/5;
let borderUISize = w / 10;
let borderPadding = borderUISize / 3;
let truckHeight = 76;
let policeHeight = 59;
let policeMargin = (hDivide - policeHeight)/2;
let truckMargin = (hDivide - truckHeight)/2; 
let count = 0;
let musicConfig;
// comment