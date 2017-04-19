/**
 * Created by Wolf on 2017/4/17.
 */
import React, {Component} from 'react';
import '../css/App.css';
import {
    Route,
    Redirect
} from 'react-router-dom'

export default class PrivateRoute extends Component {
    componentDidMount(){

    }
    render() {
        const Component = this.props.routeComponent;
        return (
            <Route {...this.props} render={props => (
                JSON.parse(localStorage.getItem("isLogin")) ? (
                        <Component {...props}/>
                    ) : (
                        <Redirect to={{
                            pathname: '/',
                            state: { from: props.location }
                        }}/>
                    )
            )}/>
        );
    }
}