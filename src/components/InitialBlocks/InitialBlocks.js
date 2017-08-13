import React from 'react'

export default function InitialBlocks(props){
  let arr = [];
  let arrContainer=[];
  for (var i = 0; i < 50; i++) {
    arr.push(<div id={i}></div>);
  }
  for (var j = 0; j < 40; j++) {
    arrContainer.push(arr);
  }
  return <div> {arrContainer.map((el, indx)=>{
    return <div className='container' id={indx}>{arr.map((e, i)=>{
      return (
        <section>
          <div id={indx + "," + i} className={'block dead'} onClick={(e)=>{props.changeColor(e)}}></div> 
        </section>
      )
    })}
    </div>              
  })}
  </div>
}
