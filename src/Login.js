/**
 * Created by Wolf on 2017/4/17.
 */
import React, {Component} from 'react';
import {Button} from 'antd';
import TweenOne from 'rc-tween-one';
import SvgDrawPlugin from 'rc-tween-one/lib/plugin/SvgDrawPlugin';
import PathPlugin from 'rc-tween-one/lib/plugin/PathPlugin';
TweenOne.plugins.push(SvgDrawPlugin);
TweenOne.plugins.push(PathPlugin);

export default class Test1 extends Component {
    componentDidMount() {
    }

    render() {
        const {from} = this.props.location.state || {from: {pathname: '/'}}
        return (
            <div className="App" style={{fontSize: 36}}>
                test113
                <p>ddd</p>
                <Button type="primary" onClick={() => this.props.history.push('/test2', {test: 'from test1'})}>
                    Go Test2
                </Button>
                <svg width="200" height="84" version="1.2"
                     style={{display: 'block', margin: 'auto'}}
                >
                    <TweenOne
                        animation={{
                            SVGDraw: '40% 60%',
                            yoyo: true,
                            repeat: -1,
                            duration: 1000
                        }}
                        style={{fill: 'none', strokeWidth: 10, stroke: '#019BF0'}}
                        component="path"
                        d="M10,10c65,50,115,50,180,0"/>
                </svg>
                <div style={{position:'relative'}}>
                    <TweenOne
                        animation={{
                            path: 'M5 75 C 35 5, 75 20,105 100 S 145 145, 175 75',
                            yoyo: true,
                            repeat: -1,
                            duration: 6000
                        }}
                        style={{fill: 'none', strokeWidth: 10, stroke: '#019BF0',position:'absolute'}}>
                        <div style={{position:'absolute',width:'20px',height:'20px',borderRadius:'10px',backgroundColor:'blue'}}></div>
                    </TweenOne>
                    <svg width="100%" height="200" version="1.2">
                        <path d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" stroke="black" fill="transparent"/>
                    </svg>
                </div>
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