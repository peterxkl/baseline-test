'use strict';

function collectSameElements(collectionA, objectB) {
  var collectionA_sub=[];
  for(var k=0;k<collectionA.length;k++){
      collectionA_sub.push(collectionA(k).key);
  }
  var collectionB_sub=objectB.value;
  var result=[];
  for(var i=0;i<collectionA_sub.length;i++){
    var x=collectionA_sub[i];
    for(var j=0;j<collectionB_sub.length;j++){
      if(x== collectionB_sub[j]){
        result.push(x);
        break;
      }
    }
    
  }
  return result;
}
