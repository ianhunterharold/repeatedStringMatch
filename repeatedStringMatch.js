/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */

/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
const repeatedStringMatch = function(A, B) {
  var nwStr = ""; // made a string
  for (var i = 0; i < B.length/A.length + 1; ++ i) { // iterate from 0 to the division of b/a + 1; increment i every iteration 
      nwStr += A; // c has A added to it.
      if (nwStr.includes(B)) { // if c includes B then return the index plus 1 
          // i dont understand this part is is the total number of times that A has to be repeated.. + 1 so this is saying that the index is related to how many times A is repeated + 1
          return i + 1;
      }
  }
  return -1; // if not return -1 bc B cannot be a substring of A.
};