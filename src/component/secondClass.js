import React,{Component} from 'react'
import '../style/style.css'
export default class SecondClass extends Component{
 constructor(props){
     super(props)
     this.state ={
         name:''
     }
 }
    handleClick = (e)=>{
        console.log(e.target.value)
        this.setState({
            name:e.target.value
        })
    }
    render(){
         return(
             <div>
                <div style={{background:'red',height:100}}>
                    <input value={this.state.name} onChange={(e)=>{this.handleClick(e)}} />
                    {/*<button disabled={true} onClick={()=>{console.log('click')}}>submit</button> */}
                    <button onClick={()=>{console.log('click')}}>Submit</button>
                    {this.state.name}
                </div>

                <div style={{background:'blue',height:100}}>
                    <button>onclick</button>
                    <span style={{color:'white',fontSize:30}}>hello</span>
                    <span style={{fontSize:30,fontWeight:'bold'}}>hello</span>
                    
                </div>
             </div>
         )
    }
}