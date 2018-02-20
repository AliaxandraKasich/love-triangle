/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var length = preferences.length;
  var count = 0;
  var k1;
  var k2;
  var k3;
  var arrBool = [];
  for(var i=0; i<length;i++){
    arrBool[i] = false;
  }
  for(var i=0; i<length;i++){
    k1 = -1;
    k2 = -2;
    k3 = -3;
    if(arrBool[i] === false){
      var tempIndex = i+1;
      k1 = preferences[i];
      if(k1 != i+1){
         k2 = preferences[k1-1];
         if(k2 != k1){
          k3 = preferences[k2-1];
      }
    }
      if(tempIndex === k3){
        count++;
        arrBool[i]=true;
        arrBool[k1-1]=true;
        arrBool[k2-1] = true;
      }
    }
  }
  return count;
};
