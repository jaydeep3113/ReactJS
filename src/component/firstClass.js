import React,{Component} from 'react'
import '../style/style.css'
export default class FirstClass extends Component{
 constructor(props){
     super(props)
     this.state ={
         a:'',
         b:'',
         name:'Jaydeep'
     }
 }
    handle=()=>{
        this.setState({name:'myname'})
    }
    render(){
        var a = 10
         return(
             <div>
                 {/* <span style={{fontSize:30}}>hello {a}</span>
                 <input onChange={(e)=>{this.setState({a:e.target.value})}} value={this.state.a}/>
                 <input onChange={(e)=>{this.setState({b:e.target.value})}} value={this.state.b}/>
                 <button onClick={()=>alert(parseInt(this.state.a)+parseInt(this.state.b))}>Submit</button> */}
                <span className='first'>Hello {this.state.name}</span>
                <button onClick={()=>{this.handle()}}>Change</button>
             </div>
         )
    }
}