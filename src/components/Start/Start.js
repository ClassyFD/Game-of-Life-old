let timer;
export default function start(){
  if (timer){
    clearInterval(timer);
    timer = undefined;
    document.getElementById('start_button').innerText = 'Start';
  }else {
    document.getElementById('start_button').innerText = 'Stop'; 
    timer = setInterval(function(){
    let info=[];
    for (var i = 0; i < 40; i++){
      for (var j = 0; j < 50; j++) {
        let filled = 0;
        let currentID = document.getElementById(i+','+j).id.split(',');
        let left = document.getElementById(Number(currentID[0]) + ',' + (Number(currentID[1])-1));
        let topLeft = document.getElementById((Number(currentID[0])-1) + ',' + (Number(currentID[1])-1));
        let top = document.getElementById((Number(currentID[0])-1) + ',' + (Number(currentID[1])));
        let topRight = document.getElementById((Number(currentID[0])-1) + ',' + (Number(currentID[1])+1));
        let right = document.getElementById(Number(currentID[0]) + ',' + (Number(currentID[1])+1));
        let bottomRight = document.getElementById((Number(currentID[0])+1) + ',' + (Number(currentID[1])+1));
        let bottom = document.getElementById((Number(currentID[0])+1) + ',' + (Number(currentID[1])));
        let bottomLeft = document.getElementById((Number(currentID[0])+1) + ',' + (Number(currentID[1])-1));
        if (left !== null && topLeft !== null && top !== null && topRight !== null
        && right !== null && bottomRight !== null && bottom !== null && bottomLeft !== null){
        bottomRight.classList.contains('dead')?
        null: filled++
        bottom.classList.contains('dead')?
          null: filled++
        bottomLeft.classList.contains('dead')?
          null: filled++
        left.classList.contains('dead')?
          null: filled++
        topLeft.classList.contains('dead')?
          null: filled++
        top.classList.contains('dead')?
          null: filled++
        topRight.classList.contains('dead')?
          null: filled++
        right.classList.contains('dead')?
          null: filled++
        info.push(filled);
        } else if (left === null && topLeft === null && bottomLeft === null && 
        top !== null && topRight !== null && right !== null && bottomRight !== null && bottom !== null){
        bottomRight.classList.contains('dead')?
          null: filled++
        bottom.classList.contains('dead')?
          null: filled++
        top.classList.contains('dead')?
          null: filled++
        topRight.classList.contains('dead')?
          null: filled++
        right.classList.contains('dead')?
          null: filled++
        info.push(filled);
        } else if (right === null && topRight === null && bottomRight === null && 
        left !== null && topLeft !== null && top !== null && bottom !== null && bottomLeft !== null) {
        bottomLeft.classList.contains('dead')?
          null: filled++
        bottom.classList.contains('dead')?
          null: filled++
        top.classList.contains('dead')?
          null: filled++
        topLeft.classList.contains('dead')?
          null: filled++
        left.classList.contains('dead')?
          null: filled++
        info.push(filled);
        } else if(topLeft === null && top === null && topRight === null && 
        bottom !== null && bottomRight !== null && right !== null && bottomLeft !== null && left !== null){
        bottomRight.classList.contains('dead')?
          null: filled++
        bottom.classList.contains('dead')?
          null: filled++
        bottomLeft.classList.contains('dead')?
          null: filled++
        left.classList.contains('dead')?
          null: filled++
        right.classList.contains('dead')?
          null: filled++
        info.push(filled);
        } else if(bottom === null && bottomLeft === null && bottomRight === null &&
        left !== null && right !== null && topRight !== null && top !== null && topLeft !== null){
        topRight.classList.contains('dead')?
          null: filled++
        top.classList.contains('dead')?
          null: filled++
        topLeft.classList.contains('dead')?
          null: filled++
        left.classList.contains('dead')?
          null: filled++
        right.classList.contains('dead')?
          null: filled++
        info.push(filled);
        } else if(topRight === null && top === null &&  right === null && topLeft === null && bottomRight===null &&
        bottom !== null && bottomLeft !== null && left !== null) {                
        bottom.classList.contains('dead')?
          null: filled++
        left.classList.contains('dead')?
          null: filled++
        bottomLeft.classList.contains('dead')?
          null: filled++    
        info.push(filled);
        } else if(bottomRight === null && bottom === null &&  right === null && topRight === null && bottomLeft===null && 
        left !== null && topLeft !== null && top !== null) {
        top.classList.contains('dead')?
          null: filled++
        topLeft.classList.contains('dead')?
          null: filled++
        left.classList.contains('dead')?
          null: filled++
        info.push(filled);
        } else if(topLeft === null && top === null &&  left === null && topRight === null && bottomLeft === null && 
        bottomRight!==null && bottom !== null && right !== null) {
        bottom.classList.contains('dead')?
          null: filled++
        bottomRight.classList.contains('dead')?
          null: filled++
        right.classList.contains('dead')?
          null: filled++    
        info.push(filled);
        } else if(bottomLeft === null && bottom === null && left  === null  && topLeft === null && bottomRight===null && 
        right !== null && top !== null && topRight !== null) {
        topRight.classList.contains('dead')?
          null: filled++
        top.classList.contains('dead')?
          null: filled++
        right.classList.contains('dead')?
          null: filled++    
        info.push(filled);
        }
      } 
    }   
    var inform = info
    var initial = 0;
    for (var z = 0; z < 40; z++){
      for (var x = 0; x < 50; x++) {
        if (inform[initial] === 3 ){
          document.getElementById(z+','+x).classList.add('alive');
          document.getElementById(z+','+x).classList.remove('dead');
        } else if (inform[initial] === 2){
            null;                
        } else {
          document.getElementById(z+','+x).classList.remove('alive');
          document.getElementById(z+','+x).classList.add('dead');
        }
        initial++;
      }
    }
    },20)
  }
}