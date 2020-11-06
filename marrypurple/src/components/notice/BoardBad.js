import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../../lib/styles/boardBad.scss';
import $ from 'jquery';
import { Helmet } from 'react-helmet';

export default class BoardBad extends React.Component {
    // constructor(){
    //     super();
    // }

    componentDidMount = () => {
        $('#contentBox .gramB_2 dt a').on('click', function(){
            $(this).parent().toggleClass('on').next().toggleClass('on');
            $(this).parent().prevAll('dt').removeClass('on');
            $(this).parent().nextAll('dt').removeClass('on');
            $(this).parent().next().prevAll('dd').removeClass('on');
            $(this).parent().next().nextAll('dd').removeClass('on');
            
        });
    }

    render(){
        return (
            <>
                <div class="gramB_1">
                    <h2>불량회원</h2>
                </div>
                <div class="gramB_2">
                    <dl class="gramB_2_list">
                        <dt>
                            <a><div class="gramB_2_wrap"><p><span class="gramB_2_id">사과</span> - <span class="gramB_2_reason">음담패설</span></p><div class="gramB_2_icon"></div></div></a>
                        </dt>
                        <dd>
                            <div class="gramB_2_detail">
                                <div class="gramB_2_datail_photo"></div>
                                <p class="gramB_2_detail_content">상대방에게 음담패설을 하여 신고당하였습니다.<br/>이 회원을 보게되면 운영진에게 신고하여주세요.</p>
                            </div>
                        </dd>
                        <dt>
                            <a><div class="gramB_2_wrap"><p><span class="gramB_2_id">사과</span> - <span class="gramB_2_reason">음담패설</span></p><div class="gramB_2_icon"></div></div></a>
                        </dt>
                        <dd>
                            <div class="gramB_2_detail">
                                <div class="gramB_2_datail_photo"></div>
                                <p class="gramB_2_detail_content">상대방에게 음담패설을 하여 신고당하였습니다.<br/>이 회원을 보게되면 운영진에게 신고하여주세요.</p>
                            </div>
                        </dd>
                        <dt>
                            <a><div class="gramB_2_wrap"><p><span class="gramB_2_id">사과</span> - <span class="gramB_2_reason">음담패설</span></p><div class="gramB_2_icon"></div></div></a>
                        </dt>
                        <dd>
                            <div class="gramB_2_detail">
                                <div class="gramB_2_datail_photo"></div>
                                <p class="gramB_2_detail_content">상대방에게 음담패설을 하여 신고당하였습니다.<br/>이 회원을 보게되면 운영진에게 신고하여주세요.</p>
                            </div>
                        </dd>
                        <dt>
                            <a><div class="gramB_2_wrap"><p><span class="gramB_2_id">사과</span> - <span class="gramB_2_reason">음담패설</span></p><div class="gramB_2_icon"></div></div></a>
                        </dt>
                        <dd>
                            <div class="gramB_2_detail">
                                <div class="gramB_2_datail_photo"></div>
                                <p class="gramB_2_detail_content">상대방에게 음담패설을 하여 신고당하였습니다.<br/>이 회원을 보게되면 운영진에게 신고하여주세요.</p>
                            </div>
                        </dd>
                    </dl>
                </div>
            </>
        )
    }
};