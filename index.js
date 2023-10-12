const example = [
  ["A", "A", "A"],
  ["A", "A", "A"],
  ["A", "B", "A"]];

const example1 = [
  ["c", "c", "c", "c"],
  ["c", "c", "c", "d"]
  ];

const example2 = [["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["P", "O", "O", "O"],
  ["O", "O", "O", "O"]];

const whereIsWaldo = (matrix) => {
  let possibleWildoIndex;
  for(let row = 0 ; row < matrix.length; row++){
    for(let column = 0 ; column < matrix[row].length - 1; column++){
      if(matrix[row][column] != matrix[row][column + 1])
         possibleWildoIndex = [row, column];
    }
  }

  if(checkNotWeldo(matrix,possibleWildoIndex))
    return [possibleWildoIndex[0] + 1, possibleWildoIndex[1] + 1 + 1];
  
  return [possibleWildoIndex[0] + 1, possibleWildoIndex[1] + 1];
}

function checkNotWeldo(matrix, possibleWildoIndex){
  return matrix.flat().filter(element => element === matrix[possibleWildoIndex[0]][possibleWildoIndex[1]]).length > 1;
}

console.log("Expect => [ 3, 2 ]");
console.log(whereIsWaldo(example));
console.log("Expect => [ 2, 4 ]");
console.log(whereIsWaldo(example1));
console.log("Expect => [ 5, 1 ]");
console.log(whereIsWaldo(example2));

