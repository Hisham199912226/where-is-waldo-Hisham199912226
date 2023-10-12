# Where's Waldo?

Return the coordinates ([row, col]) of the element that differs from the rest given a matrix (an array of arrays).

**Notes:**
- Rows and columns are 1-indexed for the sake of this exercise (not zero-indexed).
- If you get stuck on a challenge, please search it online and try to find resources.
- If you are really stuck, please ask your instructors.

**Examples:**
```
whereIsWaldo([
  ["A", "A", "A"],
  ["A", "A", "A"],
  ["A", "B", "A"]
]) ➞ [3, 2]

whereIsWaldo([
  ["c", "c", "c", "c"],
  ["c", "c", "c", "d"]
]) ➞ [2, 4]

whereIsWaldo([
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["P", "O", "O", "O"],
  ["O", "O", "O", "O"]
]) ➞ [5, 1]

```

**To Run Your Code**

Open up a terminal in the CWD(Current Working Directory) and run `node index.js` or go ahead and install nodemon to run your code automatically continiously.
