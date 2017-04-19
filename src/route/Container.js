/**
 * Created by Wolf on 2017/4/19.
 */
import React, {Component} from 'react';
import '../css/App.css';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

export default class Container extends Component {
    render() {
        return (
            <CSSTransitionGroup
                component="div"
                transitionName="fade"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}>
                <div key={ this.props.location.pathname }
                     style={{position:'absolute',width:'100%'}}>
                    {
                        this.props.children
                    }
                </div>
            </CSSTransitionGroup>
        );
    }
}