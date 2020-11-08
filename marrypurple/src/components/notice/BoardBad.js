import React from 'react';
// import styled from 'styled-components';
import '../../lib/styles/boardBad.scss';
import $ from 'jquery';
// import { Helmet } from 'react-helmet';

const BoardBad = ({ badList }) => {
    const script = () => {
        $('#contentBox .gramB_2 dt a').on('click', function(){
            $(this).parent().toggleClass('on').next().toggleClass('on');
            $(this).parent().prevAll('dt').removeClass('on');
            $(this).parent().nextAll('dt').removeClass('on');
            $(this).parent().next().prevAll('dd').removeClass('on');
            $(this).parent().next().nextAll('dd').removeClass('on');
        });
    }

    script();

    return (
        <>
            <div class="gramB_1">
                <h2>불량회원</h2>
            </div>
            <div class="gramB_2">
                <dl class="gramB_2_list">
                    {badList && (
                        <dl>
                            {badList.map(post => (
                                <>
                                    <dt>
                                    <a><div class="gramB_2_wrap"><p><span class="gramB_2_id">{post.User.user_nick}</span> - <span class="gramB_2_reason">{post.reason}</span></p><div class="gramB_2_icon"></div></div></a>
                                    </dt>
                                    <dd>
                                        <div class="gramB_2_detail">
                                            <div class="gramB_2_datail_photo" /*style="background: url('../../../../server/uploads/다운로드.jpg') no-repeat"*/></div>
                                            <p class="gramB_2_detail_content">{
                                                post.reason === '음담패설' && (
                                                <span>상대방에게 음담패설을 하여</span>
                                                ),post.reason === '욕설' && (
                                                    <span>상대방에게 욕설을 하여</span>
                                                ),post.reason === '사진도용' && (
                                                    <span>사진도용을 하여</span>
                                                )
                                            } 신고당하였습니다.<br/>이 회원을 보게되면 운영진에게 신고하여주세요.</p>
                                        </div>
                                    </dd>
                                </>
                            ))}
                        </dl>
                    )}
                </dl>
            </div>
        </>
    )
}

export default BoardBad;