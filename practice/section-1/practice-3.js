'use strict';

function collectSameElements(collectionA, objectB) {
  var collectionB_sub=objectB.value;
  var result=[];
  for(var i=0;i<collectionA.length;i++){
    var x=collectionA[i];
    for(var j=0;j<collectionB_sub.length;j++){
      if(x== collectionB_sub[j]){
        result.push(x);
        break;
      }
    }
    
  }
  return result;
}
