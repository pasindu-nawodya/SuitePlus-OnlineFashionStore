import React, { Component } from 'react';
import TitleBanner from './Component/TitleBanner';
import UserLoginForm from './Component/UserLoginForm';

export default class UserLogin extends Component {
    render() {
        return (
            <div>
                <TitleBanner TitleName={"LOGIN"} />
                <UserLoginForm />
            </div>
    )
    }
}