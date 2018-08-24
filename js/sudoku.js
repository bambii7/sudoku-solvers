
const sameRow = (i, j) => {
  return (i / 9 == j / 9);
}

const sameCol = (i, j) => {
  return ((i - j) % 9) == 0;
}

const sameBlock = (i, j) => {
  return (i / 27 == j / 27 && i % 9 / 3 == j % 9 / 3);
}

const solve = (puzzle) => {
  const i = puzzle[0];
}

def solve(puzzle)
  i = puzzle.index('0')
  # puts "abc #{i} #{i.nil?}"
  if i.nil?
    puts puzzle
    exit
  end

  exclude = Set[]
  (0..80).to_a.each do |j|
    # puts "same row #{same_row(i, j)}"
    # puts "same col #{same_col(i, j)}"
    if same_row(i, j) || same_col(i, j) || same_block(i, j)
      exclude.add(puzzle[j])
      # puts exclude
    end
  end

  '123456789'.split('').each do |m|
    # puts puzzle[0...i] + m + puzzle[i + 1..-1] unless exclude.include?(m)
    solve(puzzle[0...i] + m + puzzle[i + 1..-1]) unless exclude.include?(m)
  end
end

if ARGV.length == 1 && ARGV[0].length == 81
  puzzle = ARGV[0]
  solve(puzzle)
else
  puts 'Usage: python sudoku.py puzzle'
  puts 'where puzzle is an 81 character string representing the puzzle read
        left-to-right, top-to-bottom, and 0 is a blank'
end
