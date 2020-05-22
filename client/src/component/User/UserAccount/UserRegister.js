import React, { Component } from 'react';
import Footer from './Component/Footer';
import TitleBanner from './Component/TitleBanner';
import UserRegisterForm from './Component/UserRegisterForm';

export default class UserRegister extends Component {
    render() {
        return (
            <div>
            <TitleBanner TitleName={"REGISTER"} />
        <UserRegisterForm />
        <Footer />
        </div>
    )
    }
}