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

function loadbackGroundSprites() {
    return loadImage('/img/tiles.png')
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
        return sprites;
    });
}

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

Promise.all([
    loadbackGroundSprites(),
    loadLevel('1')

])
.then(([sprites, level]) => {
    level.backgrounds.forEach(background => {
        drawBackground(background, context, sprites);
    })
});