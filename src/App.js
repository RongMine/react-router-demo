import React, {Component} from 'react';
import logo from './logo.svg';
import './css/App.css';
import {Button, Steps, Spin} from 'antd';
import {
    BrowserRouter as Router,
    Route,
    Link,
    withRouter
} from 'react-router-dom'
import PrivateRoute from './route/PrivateRoute';
import Container from './route/Container'
import Login from './Login';
import Home from './Home';
import Center from './Center';

const Step = Steps.Step;

class App extends Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        localStorage.setItem("isLogin", false);
    }

    _login() {
        localStorage.setItem("isLogin", true);
    }

    _loginOut(){
        localStorage.setItem("isLogin", false);
    }

    render() {
        const AutbButton = withRouter(({history}) => (
            JSON.parse(localStorage.getItem("isLogin")) ? (
                    <Button type="primary" onClick={this._loginOut}>登出</Button>
                ) : (
                    <Button type="primary" onClick={this._login}>登录</Button>
                )
        ));
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <Steps current={2}>
                    <Step title="Finished" description="This is a description."/>
                    <Step title="In Progress" description="This is a description."/>
                    <Step title="Waiting" description="This is a description."/>
                </Steps>
                <Spin />
                <div style={{marginTop: '10px'}}>
                    <AutbButton/>
                    <hr/>
                    <Button type="primary">
                        <Link to="/">Login</Link>
                    </Button>
                    <Button type="primary">
                        <Link to={{
                            pathname:'/test2',
                            state:{test:'push test2'}
                        }}>Home</Link>
                    </Button>
                    <Button type="primary">
                        <Link to="/test3">Center</Link>
                    </Button>
                    <Route children={(props) => (
                        <Container {...props}>
                            <Route exact path="/" component={Login}/>
                            <Route path="/test2" component={Home}/>
                            <PrivateRoute path="/test3" routeComponent={Center}/>
                        </Container>
                    )}/>
                </div>
            </div>
        );
    }
}

export default App;
