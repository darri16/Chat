/*import React from 'react';
import {shallow} from 'enzyme';
import {SocketIO, Server} from 'mock-socket';
import LoginForm from './LoginForm';

describe('LoginForm tests', ()=> {

    let mockSocketServer, mockSocket;

    beforeEach(() => {
        mockSocketServer = new Server('http://localhost:8080');

        mockSocketServer.on('connection', socket => {
            socket.on('adduser',(username,fn) => {
                socket.emit('adduser',username);
            });
        });
    });

    afterEach(() => {
    });
});*/
