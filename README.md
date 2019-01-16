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
 
