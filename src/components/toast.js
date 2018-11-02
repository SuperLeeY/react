import React, { Component } from 'react';
  
export default class Toast extends Component {
    constructor(props){
        super(props);
        this.timer = null;
        this.state = {
            status: true
        };
    }

    render(){
        if(this.props.text && this.state.status){
            return (
                <div ref="toast" className="toast">{ this.props.text}</div>
            );
        }

        return '';
    }

    componentWillReceiveProps(props){
        if(props.text){
            clearTimeout(this.timer);
            this.setState({
                status: true
            }, () => {
                this.timer = setTimeout(() => {
                    this.refs.toast.classList.add('opacity');
                    setTimeout(() => {
                        this.setState({
                            status: false
                        });
                    }, 1000);
                }, 1500);
            });
        }
    }
}