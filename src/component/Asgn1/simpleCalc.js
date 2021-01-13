import React,{Component} from 'react'
import '../../style/style.css'
export default class SimpleCalc extends Component{
 constructor(props){
     super(props)
     this.state ={
         a:'',
         b:''
     }
 }

    render(){
         return(
             <div>
                 <input size='11' onChange={(e)=>{this.setState({a:e.target.value})}} value={this.state.a}/>
                 <input size='11' onChange={(e)=>{this.setState({b:e.target.value})}} value={this.state.b}/>
                 <br/>
                 <button onClick={()=>alert(parseInt(this.state.a)+parseInt(this.state.b))}>ADD</button>
                 <button onClick={()=>alert(parseInt(this.state.a)-parseInt(this.state.b))}>SUB</button>
                 <button onClick={()=>alert(parseInt(this.state.a)*parseInt(this.state.b))}>MUL</button>
                 <button onClick={()=>alert(parseInt(this.state.a)/parseInt(this.state.b))}>DIV</button>
                 <button onClick={()=>alert(parseInt(this.state.a)%parseInt(this.state.b))}>MOD</button>
             </div>
         )
    }
}