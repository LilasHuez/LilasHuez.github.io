var game = {
  nbRows: 4,
  nbCols: 6,
  start: {
    row: 1,
    col: 1
  },
  end: {
    row: 6,
    col: 6
  },
  current: null,
  direction: 'right', // top, right, bottom, left
  delay: 500,
  init: function() {
    console.log('init');

    game.randomStart();
    game.randomEnd();

    game.initGame();
    game.drawBoard();

    document.getElementById('launchScript').addEventListener('click', game.handleLaunchScriptButton);
  },
  randomStart: function() {
    game.start.row = Math.floor(Math.random() * Math.floor(game.nbRows))+1;
    game.start.col = Math.floor(Math.random() * Math.floor(game.nbCols))+1;
  },
  randomEnd: function() {
    game.end.row = Math.floor(Math.random() * Math.floor(game.nbRows))+1;
    game.end.col = Math.floor(Math.random() * Math.floor(game.nbCols))+1;
  },
  initGame: function() {
    game.current = {
      row: game.start.row,
      col: game.start.col
    };
    game.direction = 'right';
  },
  handleLaunchScriptButton: function() {
    game.initGame();

    // Strating displaying the board
    game.drawBoard();

    // get code
    var codeLines = document.getElementById('userCode').value.split("\n");

    window.setTimeout(function() {
      game.codeLineLoop(codeLines, 0);
    }, game.delay);
  },
  codeLineLoop: function(codeLines, index) {
    var currentLine = codeLines[index];

    var continueReading = game.interpretLine(currentLine);
    if (continueReading) {
      game.drawBoard();

      // Increment
      index++;

      // if still a line to interpret
      if (index < codeLines.length) {
        // Recall same method
        window.setTimeout(function() {
          game.codeLineLoop(codeLines, index);
        }, game.delay);
      } else {
        window.setTimeout(function() {
          game.checkSuccess();
        }, game.delay);
      }
    } else {
      alert('Game over...');
    }
  },
  interpretLine: function(line) {
    if (line == 'l;') {
      game.turnLeft();
    } else if (line == 'r;') {
      game.turnRight();
    } else if (line == 'f;') {
      var moveOk = game.moveForward();
      if (!moveOk) {
        alert('BRAIN ERROR ! out of bounds ...');
        return false;
      }
    } else {
      alert('MEGA ERROR ! unrecognized command "' + line + '"');
      return false;
    }

    return true;
  },
  checkSuccess: function() {
    // if coordinates are ok
    if (game.current.row == game.end.row && game.current.col == game.end.col) {
      alert('You WIINNN !!! congratulations !');
    } else {
      alert('You dramatically failed !');
    }
  },
  drawBoard: function() {
    var boardElement = document.getElementById('board');
    boardElement.innerHTML = '';

    var currentRow;
    var currentCell;
    for (var i = 1; i <= game.nbRows; i++) {
      currentRow = document.createElement('div');
      currentRow.classList.add('cellRow');
      currentRow.setAttribute('id', 'row' + i);

      for (var j = 1; j <= game.nbCols; j++) {
        currentCell = document.createElement('div');
        currentCell.classList.add('cell');
        currentCell.classList.add('cell' + j);

        // if start
        if (i == game.start.row && j == game.start.col) {
          currentCell.classList.add('cellStart');
        }
        // if end
        if (i == game.end.row && j == game.end.col) {
          currentCell.classList.add('cellEnd');
        }
        // if current
        if (i == game.current.row && j == game.current.col) {
          // current
          currentCell.classList.add('cellCurrent');
          // direction
          currentCell.classList.add('cellCurrent-' + game.direction);
        }

        currentRow.appendChild(currentCell);
      }

      boardElement.appendChild(currentRow);
    }
  },
  moveForward: function() {
    switch (game.direction) {
      case 'left':
        game.current.col--;
        break;
      case 'right':
        game.current.col++;
        break;
      case 'top':
        game.current.row--;
        break;
      case 'bottom':
        game.current.row++;
        break;
      default:
        console.log('direction unknown : ' + game.direction);
    }

    // if out of bounds => return false
    if (game.current.row < 1) {
      game.current.row = 1;
      console.log('out 1');
      return false;
    } else if (game.current.row > game.nbRows) {
      game.current.row = game.nbRows;
      console.log('out 2');
      return false;
    } else if (game.current.col < 1) {
      game.current.col = 1;
      console.log('out 3');
      return false;
    } else if (game.current.col > game.nbCols) {
      game.current.col = game.nbCols;
      console.log('out 4');
      return false;
    }

    return true;
  },
  turnLeft: function() {
    switch (game.direction) {
      case 'left':
        game.direction = 'bottom';
        break;
      case 'right':
        game.direction = 'top';
        break;
      case 'top':
        game.direction = 'left';
        break;
      case 'bottom':
        game.direction = 'right';
        break;
    }
  },
  turnRight: function() {
    switch (game.direction) {
      case 'left':
        game.direction = 'top';
        break;
      case 'right':
        game.direction = 'bottom';
        break;
      case 'top':
        game.direction = 'right';
        break;
      case 'bottom':
        game.direction = 'left';
        break;
    }
  }
};

document.addEventListener('DOMContentLoaded', game.init);