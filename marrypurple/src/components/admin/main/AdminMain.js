import React from 'react';
import '../../../lib/styles/admin/adminstyle.scss';

const AdminMain = () => {
    return (
        <>
            <div class="row">
                <div class="col-lg-9 main-chart">
                    <div class="row mt">
                        <div class="col-md-4 col-sm-4 mb">
                            <div class="grey-panel pn donut-chart">
                                <div class="grey-header">
                                    <h5>전체 회원 수</h5>
                                </div>
                                <div class="row">
                                    <h2>21명</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row tt">
                        <div class="col-md-4 col-sm-4 mb">
                            <div class="darkblue-panel pn">
                                <div class="darkblue-header">
                                    <h5>신규 회원 수</h5>
                                </div>
                                <p>(오늘날짜)April 17, 2014</p>
                                <div class="darkblue-content">
                                    <h5>10명</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-8 mb">
                            <div class="message-p pn">
                                <div class="message-header">
                                    <h5>신고수</h5>
                                </div>
                                <div class="row">
                                    <p>총 20건</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminMain;