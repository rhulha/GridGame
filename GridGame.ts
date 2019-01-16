export class GridGame<T> {
  table: HTMLElement;
  customTiles = new Array<T>();

  ac(type_: string, father: HTMLElement): HTMLElement {
    return father.appendChild(document.createElement(type_));
  }

  constructor(public width: number, public height: number, callback?: (i: number) => T) {
    document.body.oncontextmenu = function () { return false };
    this.table = this.ac("table", document.body);
    for (var y = 0; y < height; y++) {
      var tr = this.ac("tr", this.table);
      for (var x = 0; x < width; x++) {
        var td = this.ac("td", tr);
        td.tabIndex = x + y * width; // lil hijack
        if( callback)
          this.customTiles.push(callback(td.tabIndex));
      }
    }
  }

  getTD(x: number, y: number): HTMLElement {
    return this.table.getElementsByTagName("tr")[y].getElementsByTagName("td")[x];
  }

  getTile(x: number, y: number): T {
    return this.customTiles[x + y * this.width];
  }

  toggleClass(x: number, y: number, class_) {
    this.getTD(x, y).classList.toggle(class_);
  }

  toggleButton(x: number, y: number) {
    this.toggleClass(x,y,"off");
    //bc = window.getComputedStyle(td).backgroundColor;
    //this.getTD(x,y).style.borderStyle = (bs=='inset'?'outset':'inset');
  }

  getAllNeighbours(x: number, y: number): number[][] {
    var array1 = [x - 1, x, x + 1].map(x => [y - 1, y, y + 1].map(y => [x, y]));
    var array2 = Array.prototype.concat.apply([], array1); // flatMap
    array2.splice(4, 1); // remove center [x,y] since it is not a neighbour
    var array3 = array2.filter(([x,y])=>x>=0&&x<=8&&y>=0&&y<=8)
    return array3;
  }

  reveal(x: number, y: number, backgroundColor: string, text: string, borderStyle = 'inset') {
    if (x < 0 || x >= this.width || y < 0 || y >= this.height)
      return;
    var td = this.getTD(x, y);
    td.style.backgroundColor = backgroundColor;
    td.style.borderStyle = borderStyle;
    td.innerHTML = text;
  }

  setText(x: number, y: number, text: string) {
    if (x < 0 || x >= this.width || y < 0 || y >= this.height)
      return;
    var td = this.getTD(x, y);
    td.innerHTML = text;
  }

  shuffleTiles() {
    var a = this.customTiles;
    for (var i = a.length - 1; i >= 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
  }

  print(txt) {
    var content = document.createTextNode("["+txt+"]");
    var div = document.createElement('div');
    div.appendChild(content);
    document.body.appendChild(div);
  }

  onClick(callback: (x: number, y: number, button: number) => void) {
    var that = this;
    this.table.addEventListener("mousedown", function (event: MouseEvent) {
      var td = event.target as HTMLElement;
      if (td.tabIndex >= 0) {
        callback(td.tabIndex % that.width, td.tabIndex / that.height | 0, event.button);
      }
    });
  }

}
