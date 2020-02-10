# GridGame
A TypeScript class that makes it easy to create grid based games.

GridGame is a TypeScript helper class that creates a playing field.
It needs to know the amount of tiles you want horizontally and vertically.
It also supports a function that it can call that will set custom information that the game needs per tile.
For example a click counter or a secret that lies beneath the tile.
For Minesweeper the secret would be the kind of the tile: Is it a bomb or not.
 
GridGame contains the following helper methods:

 * getTile(x,y) => get back your custom information like counter or kind
 * reveal(x: number, y: number, backgroundColor: string, text: string) => visually reveal a tile
 * setText(x: number, y: number, text: string) => only set the text of a tile, useful for markings
 * shuffleTiles() => shuffle the custom information tiles so that their final location is random
 
 
# Here are some demos:

## Minesweeper

<img src="https://i.imgur.com/maVqzUN.png" height="220">

https://stackblitz.com/edit/typescript-minesweeper

## Sokoban

![Sokoban](https://i.imgur.com/0TZf71f.png)

https://stackblitz.com/edit/sokoban

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

https://typescript-lightsout.stackblitz.io/

## Tetris (unfinished)

<img src="https://i.imgur.com/eyodOLx.png" width="220">

https://stackblitz.com/edit/typescript-tetris
