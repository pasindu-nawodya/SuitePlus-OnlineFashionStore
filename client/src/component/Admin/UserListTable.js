import React, { Component } from 'react';
import Footer from './Component/Footer';
import NavBar from './Component/NavBar';
import TitleBanner from './Component/TitleBanner';
import UserTable from "./Component/UserTable";

export default class UserListTable extends Component {
    render() {
        return (
            <div>
            <TitleBanner TitleName={"Users List"} />
        <UserTable />
        <Footer />
        </div>
    )
    }
}