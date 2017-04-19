/**
 * Created by Wolf on 2017/4/17.
 */
import React, {Component} from 'react';
import {Button} from 'antd';

export default class Test1 extends Component {

    componentDidMount(){
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } }

        return (
            <div className="App" style={{backgroundColor:'rgb(0, 204, 0)',fontSize:36,color:'#fff'}}>
                test113
                <p>ddd</p>
                <Button type="primary" onClick={() => this.props.history.push('/test2',{test:'from test1'})}>
                    Go Test2
                </Button>
                {
                    from.pathname === '/' ?
                        null
                        :
                        <p>请先登录后操作</p>
                }
            </div>
        );
    }
}