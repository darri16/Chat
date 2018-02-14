import React from 'react';
import {PropTypes} from 'prop-types';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error:'',
            nickname:''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidCatch(error,info) {
        console.log(error, info);
    }

    handleSubmit(event) {
        event.preventDefault();

        const {socket} = this.context;
        const {nickname} = this.state;

        socket.emit('adduser',nickname,function(isUser) {
            if(isUser) {
                console.log('avilable');
                this.setState({nickname});
                let user = this.state.nickname;
                console.log(user);
                this.props.userHandler(user);
                this.setState({error:''});
                //localStorage.setItem(nickname, this.state.nickname);
            }else {
                this.setState({error:'Username is Taken'});
            }
        }.bind(this));
        console.log(nickname);
    };

    handleChange(event) {
        this.setState({nickname:event.target.value});
    }
    render () {
        const {nickname,error} = this.state;
        return (
            <div className="login">
                <form onSubmit={this.handleSubmit} className="login-form" >
                    <label htmlFor='nickname'>
                        <h2>Insert a nickname</h2>
                    </label>
                    <input
                        ref={(input)=>{ this.textInput = input }}
                        type='text'
                        id='nickname'
                        value={nickname}
                        onChange={this.handleChange}
                        placeholder={'MyUsername'}
                    />
                    <div className='error'>{error ? error:null}</div>
                </form>
            </div>
        );
    };
}

LoginForm.contextTypes = {
    socket:PropTypes.object.isRequired
};

export default LoginForm;
