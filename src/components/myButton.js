import React, { Component } from 'react';
  
export default class MyButton extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="button" onClick={this.onClick.bind(this)}>{ this.props.text}</div>
        );
    }

    onClick(){
        this.props.onClick && this.props.onClick();
    }
}