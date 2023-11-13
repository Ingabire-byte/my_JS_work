function displayPattern(rows, cols) {
    for (let i = 0; i < rows; i++) {
      let pattern = '';
      for (let j = 0; j < cols; j++) {
        pattern += '* ';
      }
      console.log(pattern);
    }
  }
  
  displayPattern(4, 5);