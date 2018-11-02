import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from '../actions/home';
import 'whatwg-fetch';

//component
import MyButton from '../components/myButton';
import Toast from '../components/toast';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: 'Hello World!'
        };
    }

    render(){
        return (
            <div>
                <MyButton
                    text={'toast'}
                    onClick={this.onToast.bind(this)} />
                <MyButton
                    text={'跳转'}
                    onClick={this.onNavigationUrl.bind(this)} />
                <Toast text={this.props.toastState.text} />
            </div>
        )
    }

    onToast(){
        const { dispatch, toastState } = this.props;
        dispatch(toast('toast'));
    }

    onNavigationUrl(){
        window.location.href = './test.html';
    }
}

const mapStateToProps = (state) => {
    return {
        toastState: state.toastState
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch,
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);