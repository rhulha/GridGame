import './style.css';
import { GridGame } from './GridGame';

var gg = new GridGame(5, 5);

var pattern = [
			1,0,0,1,1,
			0,0,1,0,1,
			0,1,0,1,0,
			1,0,1,0,0,
			1,1,0,0,1];

var i=pattern.length;
while (--i>=0) {
  if( pattern[i] == 0)
    gg.toggleButton(i%5, i/5|0);
}

gg.onClick(function click(x, y) {
  gg.toggleButton(x,y);
  gg.toggleButton(x-1,y);
  gg.toggleButton(x+1,y);
  gg.toggleButton(x,y-1);
  gg.toggleButton(x,y+1);
});

