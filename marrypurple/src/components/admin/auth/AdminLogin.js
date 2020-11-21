import React from 'react';
import '../../../lib/styles/admin/adminLogin.scss';
import { Link } from 'react-router-dom';

const AdminLogin = () => {
    return (
        <>
            <div className="authBody">
                <div id="login-page">
                    <div className="container">
                        <form className="form-login" action="/Admin_main">
                            <h2 className="form-login-heading">sign in now</h2>
                            <div className="login-wrap">
                                <input type="text" className="form-control" placeholder="User ID" autofocus/>
                                <br/>
                                <input type="password" className="form-control" placeholder="Password"/>
                                <br/>
                                <button className="btn btn-theme btn-block" href="index.html" type="submit"><i class="fa fa-lock"></i> SIGN IN</button>
                                <hr/>
                                <div className="registration">
                                    Don't have an account yet?<br/>
                                    <Link className="" to="/Admin_regist">Create an account</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminLogin;