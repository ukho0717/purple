import React from 'react';
import '../../../lib/styles/admin/adminstyle.scss';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const AdminContent = ({ children }) => {
    return (
        <>
            <Helmet>
                <script src="https://kit.fontawesome.com/f4b52f1d75.js" crossorigin="anonymous"></script>
            </Helmet>
            <section id="main-content">
                <section className="wrapper">
                    <div className="row">
                        <div className="col-lg-9 main-chart">{children}
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default AdminContent;