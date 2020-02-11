# GridGame
A TypeScript class that makes it easy to create grid based games.

GridGame is a TypeScript helper class that creates a playing field.  
It needs to know the amount of tiles you want horizontally and vertically.  
It also supports a function that it can call that will set custom information that the game needs per tile.  
For example a click counter or a secret that lies beneath the tile.  
For Minesweeper the secret would be the kind of the tile: Is it a bomb or not.  
 
GridGame contains the following helper methods:
(see [end of document](#gridgame-contains-the-following-primary-methods))

# It lets you create a lot with just a few lines of code:

 * Minesweeper: 45 lines of code
 * Sokoban: 67 lines of code
 * Tic-tac-toe with decision tree AI: 137 lines of code
 * Chess with Toledo Nanochess AI: 70 lines of code
 * Peg-Solitair: 36 lines of code
 * Lightsout: 25 lines of code
 * Tetris: unfinished


# Here are some demos:

## Minesweeper

<img src="https://i.imgur.com/maVqzUN.png" height="220">

https://stackblitz.com/edit/typescript-minesweeper

## Sokoban

![Sokoban](https://i.imgur.com/0TZf71f.png)

https://stackblitz.com/edit/sokoban  
https://stackblitz.com/edit/sokoban-level-editor

## Tic-tac-toe

<img src="https://i.imgur.com/pacK1im.png" height="220">

https://stackblitz.com/edit/typescript-tictactoe

## Chess

<img src="https://i.imgur.com/1eqYzFC.png" width="220" height="220">

https://stackblitz.com/edit/typescript-nanochess

## Peg-Solitair

![Peg-Solitair](https://i.imgur.com/5lqUrNx.png)

https://stackblitz.com/edit/typescript-peg-solitair

## Lightsout

<img src="https://i.imgur.com/lqcTxaY.png" width="220" height="220">

https://stackblitz.com/edit/typescript-lightsout  
Play: https://typescript-lightsout.stackblitz.io/

## Tetris (unfinished)

<img src="https://i.imgur.com/eyodOLx.png" width="220">

https://stackblitz.com/edit/typescript-tetris

# GridGame contains the following primary methods:

### getTile(x,y)
Get back your custom information class instance that can contains things like counter or kind.

### setClass(x: number, y: number, class: string)
Set the HTML style sheet class for a tile (td).

### toggleClass(x: number, y: number, class: string)
Toggle the HTML style sheet class for a tile (td).

### toggleButton(x: number, y: number)
Convenience function.  
Simply calls toggleClass(x,y,"off").  
Used in many of the demos.

### onClick(callback: (x: number, y: number, button: number) => void)
Call callback on mouse click. Passes x,y coordinate of tile clicked.  
As well as the mouse button that was clicked.

### isPressed(x: number, y: number): boolean
Convenience function.  
Returns true if x or y are out of bounds (this helps some demos work better)  
Returns true if the <td> classList contains "off".

### getAllNeighbours(x: number, y: number, includeThyself=false): number[][]
Returns an array of 8 or 9 tuples with the x,y coordinates of a tile and its surrounding neighbours.  
It starts top left and ends bottom right.  
Why does it return x,y coordinates and not simply the tile itself ?  
Because a tile is not guaranteed to have the x,y coordinates.  
So this way it is guaranteed that the caller has acceess to both.

### remove(x: number, y: number)
calls getTD(x,y).style.visibility = "hidden";

### removeAllNeighbours(x: number, y: number, includeThyself=false)
calls getAllNeighboursTD(x,y,includeThyself).forEach((td) => td.style.visibility = "hidden")

### setHidden(x: number, y: number, trueOrFalse: boolean)
calls getTD( x,y ).style.backgroundColor = trueOrFalse ? "white" : null

### hide(x: number, y: number)
calls getTD( x,y ).style.backgroundColor = "white".  
The idea here is to make the tile disappear on a white page.

### show(x,y)
calls getTD( x,y ).style.backgroundColor = null.  
The idea here is to make the tile use the style from the style class definition and usually reappear.

### isHidden(x,y)
return this.getTD(x, y).style.backgroundColor == "white";  
Note: Working on the Minesweeper demo made me realize that this method might not be named well...

### reveal(x: number, y: number, backgroundColor: string, text: string, borderStyle = 'inset')
Sets:

 * td.style.backgroundColor = backgroundColor;
 * td.style.borderStyle = borderStyle;
 * td.innerHTML = text;

Can be used to show a hidden tile secret (like in Minesweeper).

### setText(x: number, y: number, text: string) 
Sets td.innerHTML = text

### setTextForList(list: [[number, number]], text: string)
Pass in an array of number tuples, which are used as x,y coordinates to call setText in a loop.

### getText(x: number, y: number): string
return td.innerHTML

### shuffleTiles()
Randomizes the tile class instances using [Fishers-Yates](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)

### getRandomInt(min: number, max: number): number
returns an integer number between min and max. BOTH LIMITS ARE INCLUSIVE.

### arrayEquals( array1, array2)
A nice array equals method I found on Stackoverflow.

## GridGame contains the following [leaky abstraction](https://en.wikipedia.org/wiki/Leaky_abstraction) methods:

### getTD(x: number, y: number): HTMLElement
Get access to the underlying HTML <td> element.

### getAllNeighboursTD(x: number, y: number, includeThyself=false): HTMLElement[]
Returns an array of 8 or 9 HTMLElements containing a td and its surrounding neighbours.
It starts top left and ends bottom right.

### forEachTD(callback: (x: number, y: number, td: HTMLElement) => void)
Call the callback for each tile td. Passes in x,y,td.

### print(txt)
Add some text to the HTML document.  
Usefull for quick debugging.

### reveal(x: number, y: number, backgroundColor: string, text: string)
visually reveal a tile

### setText(x: number, y: number, text: string)
only set the text of a tile, useful for markings

### shuffleTiles()
shuffle the custom information tiles so that their final location is random

