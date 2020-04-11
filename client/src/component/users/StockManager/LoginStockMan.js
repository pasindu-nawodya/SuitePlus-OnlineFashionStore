import React, { Component } from 'react';
import './Login.css';

export default class LoginStockMan extends Component {
    render() {
        return (
            
            <div className={'authBox'}>
                <div className={'leftBox'}>
                    <div className={'bgGreen'} />
                    <div className={'imageAuth'} />                    
                    <div className={'imageText bold style1'}>LOGIN</div>
                    <div className={'imageText style2'}>Stock Manager</div>
                </div>  
                <div className={'rightBox'}>
                    <center>
                    <div className={'box'}>                    
                        <div className={'titleAuth'}>Login</div>
                        <div className={'inputSBox'}>
                            <input className={'inputS'} type={'text'} placeholder={'Username'} />
                        </div>
                        <div className={'inputSBox'}>
                            <input className={'inputS'} type={'password'} placeholder={'Password'} />
                        </div>
                        <br />
                        <div className={'contentBox'}>                            
                            <div className={'text1'}>Forgot Password? </div>
                        </div>
                        <center>
                            <div className={'btnAuth'}>Login</div>
                        </center>
                    </div>
                    </center>
                </div>                         
            </div>
        )
    }
}
