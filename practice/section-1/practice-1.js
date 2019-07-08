'use strict';

function collectSameElements(collectionA, collectionB) {
  var result=[];
  for(var i=0;i<collectionA.length;i++){
    var x=collectionA[i];
    for(var j=0;j<collectionB.length;j++){
      if(x== collectionB[j]){
        result.push(x);
        break;
      }
    }
    
  }
  return result;
}
