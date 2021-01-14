import React from "react";
import Calc4 from "./calc4";
export default class Calc3 extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            a: 0,
            b: 0,
            c: 0
        }
    }

    handleA = (e) => {
        console.log(e);
        this.setState({
            a: e.target.value
        })
    }

    handleB = (e) => {
        console.log(e);
        this.setState({
            b: e.target.value
        })
    }

    handleC = (e) => {
        console.log(e);
        this.setState({
            c: e.target.value
        })
    }

    render(){
        return(
            <div>
                
                <input
                    name="num1input"
                    value={this.state.a}
                    onChange={this.handleA}
                    //size='5'
                />

                <input
                    name="num2input"
                    value={this.state.b}
                    onChange={this.handleB}
                    //size='5'
                />

                <Calc4 
                    vala={this.state.a}
                    valb={this.state.b}
                    //valc={this.state.c}
                    //myfunc={this.handleC}
                />
               
            </div>
        )
    }
}