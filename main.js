import { GridGame } from './GridGame.js';

class Tile {
  constructor(kind) {this.kind=kind}
}

var gg = new GridGame(9, 9, (i) => new Tile(i++ < 10 ? '*' : ''));
gg.shuffleTiles();

function isBomb(x, y) {
  return gg.getTile(x, y).kind == '*';
}

function countBombsAround(x, y) {
  return gg.getAllNeighbours(x,y).filter(([x,y]) => isBomb(x,y)).length;
}

function revealAround(x, y) {
  var tile = gg.getTile(x, y);
  if (tile.counter != counter) {
    tile.counter = counter;
    gg.getAllNeighbours(x,y).forEach( ([x,y]) => isBomb(x,y) || check(x,y))
  }
}

function check(x, y) {
  if (isBomb(x, y)) {
    gg.reveal(x, y, 'red', "*");
  } else {
    var bombs = countBombsAround(x, y);
    gg.reveal(x, y, 'white', bombs > 0 ? "" + bombs : "");
    if (bombs == 0)
      revealAround(x, y);
  }
}

var counter = 0;
gg.onClick(function (x, y, button) {
  counter++;
  if (button == 2)
    gg.setText(x, y, "!");
  else
    check(x, y);
});


