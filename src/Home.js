/**
 * Created by Wolf on 2017/4/17.
 */
import React, {Component} from 'react';

export default class Test2 extends Component {

    render() {
        console.log(this.props);
        return (
            <div className="App" style={{backgroundColor:'rgb(0, 136, 204)',fontSize:36,color:'#fff'}}>
                test256
                <p>2222</p>
                <p>{this.props.location.state.test}</p>
            </div>
        );
    }
}