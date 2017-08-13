import React,{Component} from 'react';
import './Blocks.css'
import Start from '../Start/Start'
import InitialBlocks from '../InitialBlocks/InitialBlocks'
class Blocks extends Component {
    constructor(props){
        super(props);
        this.state = {
            color:'gray',
            status:'Start',
            count:null,
            container:null,      
            info:[],
            saved:[],
            textChanged:'',
            displayedText:[],
            name:{},
            loaded:{},
            loadFrom:[],
            dropDown:false,
        }
    }
    componentWillMount(){ 
        const cachedHits= localStorage;
        if (cachedHits) {
            for (var prop in cachedHits){
                this.state.name[prop] = prop,
                this.state.loaded[prop] = [cachedHits[prop]];
                this.state.loadFrom.push(<savediv style={{width:'100px'}} 
                id={prop} className={cachedHits[prop]} onClick={(e)=>this.load(e)}>{prop}</savediv>)        
            }
        }
    }
    setAliveColor(event){
        if (event.target.value === 'yellow' || event.target.value === 'blue' || event.target.value === 'white'){
            console.log(event.target.value)
            this.setState({
                color: event.target.value
            })
        }
    }
    changeColor(event){
        if (event.target.classList.contains('dead')){
        event.target.classList.remove('dead')
        event.target.classList.add('alive')
        } else {
        event.target.classList.remove('alive')
        event.target.classList.add('dead')
        }
    }
    activate(id){
        let filled = 0;
        let currentID = id.id.split(',');
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
                this.state.info.push(filled);
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
                this.state.info.push(filled);
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
                this.state.info.push(filled);
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
                this.state.info.push(filled);
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
                this.state.info.push(filled);
                } else if(topRight === null && top === null &&  right === null && topLeft === null && bottomRight===null && bottom !== null && bottomLeft !== null && left !== null) {                
                bottom.classList.contains('dead')?
                    null: filled++
                left.classList.contains('dead')?
                    null: filled++
                bottomLeft.classList.contains('dead')?
                    null: filled++    
                this.state.info.push(filled);
                } else if(bottomRight === null && bottom === null &&  right === null && topRight === null &&
                bottomLeft===null && left !== null && topLeft !== null && top !== null) {
                top.classList.contains('dead')?
                    null: filled++
                topLeft.classList.contains('dead')?
                    null: filled++
                left.classList.contains('dead')?
                    null: filled++
                this.state.info.push(filled);
                } else if(topLeft === null && top === null &&  left === null && topRight === null && 
                bottomLeft === null && bottomRight!==null && bottom !== null && right !== null) {
                bottom.classList.contains('dead')?
                    null: filled++
                bottomRight.classList.contains('dead')?
                    null: filled++
                right.classList.contains('dead')?
                    null: filled++    
                this.state.info.push(filled);
                } else if(bottomLeft === null && bottom === null && left  === null  && topLeft === null && 
                bottomRight===null && right !== null && top !== null && topRight !== null) {
                topRight.classList.contains('dead')?
                    null: filled++
                top.classList.contains('dead')?
                    null: filled++
                right.classList.contains('dead')?
                    null: filled++    
                this.state.info.push(filled);
            this.setState({
                info: this.state.info.push(filled)
            })
        } else{
        this.setState({
            info: this.state.info.push(filled)
        })
        }
    }
    nextStep(){
        for (var i = 0; i < 40; i++){
            for (var j = 0; j < 50; j++) {
                this.activate(document.getElementById(i+','+j));
            }
        }
        var inform = this.state.info
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
        this.setState({info:[]})
    }
    setStatus(){
        if (this.state.status==='Start')
        {this.setState({
            status: 'Stop'
        })
        }
    }
    clear() {
        var initial = 0;
        for (var z = 0; z < 40; z++){
            for (var x = 0; x < 50; x++) {
                document.getElementById(z+','+x).classList.remove('alive');
                document.getElementById(z+','+x).classList.add('dead');
            }
        }
        this.setState({
            info:[]
        })
        console.log( this.state)
    }
    save(value) {
        value.preventDefault();
        if (!this.state.currentText || this.state.currentText.replace(/^\s+|\s+$/g, '') == ''){
            alert('Please enter a name for your save.')
        } else {
        this.state.displayedText.push([this.state.currentText]);
        let current = [];
        for (var z = 0; z < 40; z++){
            for (var x = 0; x < 50; x++) {
                current.push(document.getElementById(z+','+x).classList[1])
            }
        }
        this.state.saved.push(current);
        this.state.loadFrom.push(<savediv id={this.state.displayedText} className={current.map((e)=>{return e})} onClick={(e)=>this.load(e)}>{this.state.displayedText}</savediv>)
        this.setState({
            loadFrom:this.state.loadFrom
        })
        setTimeout(()=>{this.afterSave()},1000)
        }
    }
    afterSave(){
        localStorage.setItem(this.state.currentText, document.getElementById(this.state.currentText).classList)
    }
    load(event){
        console.log(event.target)
        let count = 0;
        for (var z = 0; z < 40; z++){
            for (var x = 0; x < 50; x++) {
                document.getElementById(z+','+x).classList.remove('alive');
                document.getElementById(z+','+x).classList.add(event.target.classList[0].split(',')[count]);
                document.getElementById(z+','+x).classList[2]?
                document.getElementById(z+','+x).classList.remove('dead'): null
                count++;
            }
        }
    }
    textChanged(event){
        this.setState({
            currentText:event.target.value
        })
    }
    loadDivs(event){
        this.state.dropDown === false?
        this.setState({
            dropDown: true
        }) : 
        this.setState({
            dropDown: false
        })
        for (var prop in document.getElementById('saved_div_parent').children){
            if (document.getElementById('saved_div_parent').children[prop].style){
                if (this.state.dropDown===false){
                    document.getElementById('saved_div_parent').children[prop].classList.remove('drop_up')
                    document.getElementById('saved_div_parent').children[prop].classList.add('drop_down')
                    document.getElementById('saved_div_parent').children[prop].style.display='flex'
                } else if(this.state.dropDown===true){
                    
                    document.getElementById('saved_div_parent').children[prop].classList.add('drop_up')
                    document.getElementById('saved_div_parent').children[prop].style.display='none'
                }
            }
        }
        
    }
    render(){
        return(
            <container className='main_container'>
                <section className='blocks_container'>
                    <InitialBlocks changeColor={this.changeColor}/>
                </section>
                <footer className='footer'>
                    <section className='button_container'>
                        <button className='next_button button' onClick={()=>this.nextStep()}>Next</button>
                        <button id='start_button' className='start_button button' onClick={(e)=>{Start()}}>Start</button>
                        <button className='clear_button button' onClick={()=>this.clear()}>Clear</button>
                        <form onClick={(e)=>this.setAliveColor(e)}>
                            Alive Color
                            <input type="radio" name='alive_color' value='yellow'/>Yellow
                            <input type="radio" name='alive_color' value='white'/>White
                            <input type="radio" name='alive_color' value='blue'/>Blue
                        </form>
                            Dead Color
                        <form>
                            <input type="radio" name='dead_color' value='yellow'/>black
                            <input type="radio" name='dead_color' value='gray'/>gray
                            <input type="radio" name='dead_color' value='red'/>red
                        </form>
                    </section>
                    <section className='saving_container'>
                        <form className='save_form'onSubmit={(e)=>{this.save(e)}}>
                            <button className='save_button button'>Save</button>
                            <input className='text_field' onChange={(e)=>this.textChanged(e)}/>
                        </form>
                    </section>
                    <section className='loading_container'>
                            <header className='load_section'onClick={(e)=>this.loadDivs(e)}>Your Saves</header>
                            <list id='saved_div_parent'>{this.state.loadFrom}</list>
                    </section>
                </footer>
            </container>
        );    
    }
}

export default Blocks;