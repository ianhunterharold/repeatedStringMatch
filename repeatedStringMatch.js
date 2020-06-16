/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */


var repeatedStringMatch = function(A, B) {
  
  if (A === B){
    return A.length;
  }
  
  let addedA = A.concat(A);
  let copies = 2;
  
  
  while (addedA.length <= (B.length) ){

    
    if (addedA.includes(B)){
      console.log("for this problem")
      return copies;
    } else {
      addedA += addedA.concat(A);
      copies++;

      if (addedA.includes(B)){
        return copies;
      }
    }
   
  }
  return -1;
};

const A = "abcd", B = "cdabcdab";
repeatedStringMatch(A,B)
