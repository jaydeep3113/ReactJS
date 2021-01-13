import React from "react";
export default class Calc2 extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            valuea: this.props.vala,
            valueb: this.props.valb,
            valuec: this.props.valc
        }
    }

    handleB = (e) => {
        console.log(e);
        this.setState({
            b: e.target.value
        })
    }

    add = () => {

        this.setState({
            valuec: parseInt(this.state.valuea)+parseInt(this.state.valueb)
        })
    }

    sub = () => {

        this.setState({
            valuec: parseInt(this.state.valuea)-parseInt(this.state.valueb)
        })
    }


    mul = () => {

        this.setState({
            valuec: parseInt(this.state.valuea)*parseInt(this.state.valueb)
        })
    }

    div = () => {
        
        this.setState({
            valuec: parseInt(this.state.valuea)/parseInt(this.state.valueb)
        })
    }

    mod = () => {

        this.setState({
            valuec: parseInt(this.state.valuea)%parseInt(this.state.valueb)
        })
    }


    render(){
        return(
            <div>
                <button onClick={this.add}>+</button>
                <button onClick={this.sub}>-</button>
                <button onClick={this.mul}>*</button>
                <button onClick={this.div}>/</button>
                <button onClick={this.mod}>%</button>
                Result : {this.state.valuec}
               
            </div>
        )
    }
}