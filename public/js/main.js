import SpriteSheet from './SpriteSheet.js';
import {loadImage, loadLevel} from './loaders.js';

function drawBackground(background, context, sprites) {
    background.ranges.forEach(([x1, x2, y1, y2]) => {
        for (let x = x1; x < x2; ++x) {
            for (let y = y1; y < y2; ++y) {
                sprites.drawTile(background.tile, context, x, y);
            } 
        }
    });
}

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

loadImage('/img/tiles.png')
.then(image => {
    const sprites = new SpriteSheet(image, 16, 16);
    sprites.define('sky.blue', 1, 15);
    sprites.define('cloud.left', 1, 18);    
    sprites.define('cloud.right', 2, 18); 
    sprites.define('mountain.straight', 2, 7);
    sprites.define('mountain.right', 3, 7);
    sprites.define('mountain.left', 1, 7);
    sprites.define('mountain.full', 2, 9);
    sprites.define('mountain.full.right', 3, 9);
    sprites.define('mountain.full.left', 1, 9);
    sprites.define('block.star', 4, 2);

    loadLevel('1')
    .then(level => {
        level.backgrounds.forEach(background => {
            drawBackground(background, context, sprites);
        })
    });
});

loadImage('/img/tiles.png')
.then(image => {
    const sprites = new SpriteSheet(image, 16, 16);
    

     for (let x = 0; x < 20; ++x) {
         for (let y = 0; y < 40; ++y) {
             sprites.drawTile('sky.blue', context, x, y);
         } 
     }
});