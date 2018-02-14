import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/site';
import Container from './components/Container/container';
import socketClient from 'socket.io-client';
import LoginForm from './components/LoginForm/LoginForm';
import {PropTypes} from 'prop-types';


/*import LoginForm from './components/Container/LoginForm';*/
/*const serverUrl = 'http://localhost:8080';*/



/*To Do : kalla á get from local storage til að athuga hvort að user sé loged in ef svo er routa á chat server */


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user:''
        };

        this.userHandler = this.userHandler.bind(this);


    }

    componentDidCatch(error,info) {
        console.log(error, info);
    }
    getChildContext() {
        return {
            socket:socketClient('http://localhost:8080')
        };

    }

    userHandler(nickname) {
        //const {user} = this.state;

        this.setState({user:nickname});
        console.log(this.state.user);
    }


    render() {
        return (

            <Container>
                <LoginForm userHandler={this.userHandler}/>
            </Container>
        );
    }
}
App.childContextTypes = {
    socket: PropTypes.object.isRequired

};

ReactDOM.render(<App />, document.getElementById('app'));
