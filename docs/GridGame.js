export class GridGame {

  ac(type_, father) {
    return father.appendChild(document.createElement(type_));
  }

  constructor(width, height, callback) {
    this.width=width;
    this.height = height;
    this.customTiles = new Array();
    document.body.oncontextmenu = function () { return false };
    this.table = this.ac("table", document.body);
    for (var y = 0; y < height; y++) {
      var tr = this.ac("tr", this.table);
      for (var x = 0; x < width; x++) {
        var td = this.ac("td", tr);
        td.tabIndex = x + y * width; // lil hijack
        this.customTiles.push(callback(td.tabIndex));
      }
    }
  }

  getTD(x, y) {
    return this.table.getElementsByTagName("tr")[y].getElementsByTagName("td")[x];
  }

  getTile(x, y) {
    return this.customTiles[x + y * this.width];
  }

  getAllNeighbours(x, y){
    var array1 = [x - 1, x, x + 1].map(x => [y - 1, y, y + 1].map(y => [x, y]));
    var array2 = Array.prototype.concat.apply([], array1); // flatMap
    array2.splice(4, 1); // remove center [x,y] since it is not a neighbour
    var array3 = array2.filter(([x,y])=>x>=0&&x<=8&&y>=0&&y<=8)
    return array3;
  }

  reveal(x, y, backgroundColor, text, borderStyle = 'inset') {
    if (x < 0 || x >= this.width || y < 0 || y >= this.height)
      return;
    var td = this.getTD(x, y);
    td.style.backgroundColor = backgroundColor;
    td.style.borderStyle = borderStyle;
    td.innerHTML = text;
  }

  setText(x, y, text) {
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

  onClick(callback) {
    var that = this;
    this.table.addEventListener("mousedown", function (event) {
      var td = event.target;
      if (td.tabIndex >= 0) {
        callback(td.tabIndex % that.width, td.tabIndex / that.height | 0, event.button);
      }
    });
  }

}
