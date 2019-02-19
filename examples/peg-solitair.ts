import './style.css';
import { GridGame } from './GridGame';

var gg = new GridGame(7, 7);
gg.removeAllNeighbours(0, 0, true);
gg.removeAllNeighbours(6, 0, true);
gg.removeAllNeighbours(0, 6, true);
gg.removeAllNeighbours(6, 6, true);
gg.hide(3, 3);

var lastX = -100;
var lastY = -100;

gg.onClick(function click(x, y) {
  var dx = Math.abs(x - lastX);
  var dy = Math.abs(y - lastY);
  if (!gg.isHidden(x, y)) {
    if( lastX>=0)
      gg.toggleButton(lastX, lastY);
    lastX = x;
    lastY = y;
    gg.toggleButton(x, y);

  } else if ( (dx + dy == 2) && dx != dy) {
    var jumpedOverX = x - (x - lastX) / 2;
    var jumpedOverY = y - (y - lastY) / 2;
    if (!gg.isHidden(jumpedOverX, jumpedOverY))
    {
      gg.hide(lastX,lastY);
      gg.hide(jumpedOverX, jumpedOverY);
      gg.show(x, y);
      gg.toggleButton(x, y);
      lastX = x;
      lastY = y;
    }
  }
});
