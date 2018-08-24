#!/usr/bin/env node

const sameRow = (i, j) => {
  return parseInt(i / 9) == parseInt(j / 9);
}

const sameCol = (i, j) => {
  return ((i - j) % 9) == 0;
}

const sameBlock = (i, j) => {
  return (parseInt(i / 27) == parseInt(j / 27) && parseInt(i % 9 / 3) == parseInt(j % 9 / 3));
}

function solve(puzzle) {
  const i = puzzle.indexOf('0')
  if (i === -1) {
    console.log(puzzle);
    process.exit();
  }

  const exclude = new Set();
  const range = [ ...Array(81).keys() ];
  range.forEach((j) => {
    // console.log((sameBlock(i, j)))
    // console.log(i, j)
    if (sameRow(i, j) || sameCol(i, j) || sameBlock(i, j)) {
      exclude.add(puzzle[j])
    }
  });
  // console.log('exclude', exclude)
  '123456789'.split('').forEach((p) => {
    if (!exclude.has(p)) {
      const newSample = puzzle.slice(0, i) + p + puzzle.slice(i + 1, puzzle.length)
      // console.log(newSample)
      return solve(newSample)
    }
  });
  return puzzle;
}

const arg = process.argv[2]
if (arg) {
  console.log("Solving ", arg);
  const solution = solve(arg);
} else {
  console.log('put a sudoku puzzle in single line format as an argument');
}
