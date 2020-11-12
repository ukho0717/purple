import React from 'react';
// import styled from 'styled-components';
import '../../lib/styles/gram.scss';
import $ from 'jquery';
// import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const GramWrite = ({ gram }) => {
    console.log(gram);
    const script = () => {
        $('.gramP_1_back').on('click', function(){
            window.history.back();
        });


        let media = window.matchMedia('( max-width: 768px )');
        if(media.matches == true) {
            // 모바일

            // 신고버튼 누르면 팝업
            $('.declare_popup').on('click',function(){
                var $href = $(this).attr('href');
                layer_popup($href);
            });
            function layer_popup(el){
                var $el = $(el);        //레이어의 id를 $el 변수에 저장
                var isDim = $el.prev().hasClass('dimBg');   //dimmed 레이어를 감지하기 위한 boolean 변수

                isDim ? $('.dim-layer').fadeIn() : $el.fadeIn();

                var $elWidth = ~~($el.outerWidth()),
                    $elHeight = ~~($el.outerHeight()),
                    docWidth = $(document).width(),
                    docHeight = $(document).height();

                // 화면의 중앙에 레이어를 띄운다.
                if ($elHeight < docHeight || $elWidth < docWidth) {
                    $el.css({
                        marginTop: 0,
                        marginLeft: 0
                    })
                } else {
                    $el.css({top: 0, left: 0});
                }

                $el.find('.popup_close').on('click', function(){
                    isDim ? $('.dim-layer').fadeOut() : $el.fadeOut(); // 닫기 버튼을 클릭하면 레이어가 닫힌다.
                    return false;
                });

                $('.layer .dimBg').on('click', function(){
                    $('.dim-layer').fadeOut();
                    return false;
                });
            }
        }else{
            // 웹

            // 신고버튼 누르면 팝업
            $('.declare_popup').on('click', function(){
                var $href = $(this).attr('href');
                layer_popup($href);
            });
            function layer_popup(el){
                var $el = $(el);        //레이어의 id를 $el 변수에 저장
                var isDim = $el.prev().hasClass('dimBg');   //dimmed 레이어를 감지하기 위한 boolean 변수

                isDim ? $('.dim-layer').fadeIn() : $el.fadeIn();

                var $elWidth = ~~($el.outerWidth()),
                    $elHeight = ~~($el.outerHeight()),
                    docWidth = $(document).width(),
                    docHeight = $(document).height();

                // 화면의 중앙에 레이어를 띄운다.
                if ($elHeight < docHeight || $elWidth < docWidth) {
                    $el.css({
                        marginTop: -$elHeight /2,
                        marginLeft: -$elWidth/2
                    })
                } else {
                    $el.css({top: 0, left: 0});
                }

                $el.find('.popup_close').on('click', function(){
                    isDim ? $('.dim-layer').fadeOut() : $el.fadeOut(); // 닫기 버튼을 클릭하면 레이어가 닫힌다.
                    return false;
                });

                $('.layer .dimBg').on('click',function(){
                    $('.dim-layer').fadeOut();
                    return false;
                });

            }
        }
        $('.pop-layer a').on('click', function(){
            // alert('on');
            $(this).toggleClass('on');
            $(this).parent().siblings().children('a').removeClass('on');
            if($(this).hasClass('on')){
                $('.pop-layer button').css({
                    'background': 'linear-gradient( to left, #FFD7DD, #9E7FFE )'
                }).text('신고').on('click', function(){
                    alert('신고가 접수되었습니다');
                });
            }
        });
    }


    script();


    return(
        <>
            {gram && (
                <>
                    <div class="gramP_1">
                        <div className="gramP_1_back"></div><div class="gramP_1_myPho"><div></div></div><span class="gramP_id" id="gramP_1_id">apple</span><div id="gramP_1_hot">HOT</div> <a href="#layer2"><div id="gramP_1_decla"></div></a>
                    </div>
                    <div class="gramP_2">
                        <div id="gramP_2_photo"><img src={gram.InstaImage}/></div>
                    </div>
                    <div class="gramP_3">
                        <div id="gramP_3_heart"></div>
                        <p><span id="gramP_3_count">{gram.likeCount}</span>명이 좋아합니다.</p>
                        <p><span class="gramP_id" id="gramP_3_id">apple</span> <span id="gramP_3_content">{gram.content}</span></p>
                    </div>
                    <div class="gramP_4">
                        <p><span class="gramP_reID" id="gramP_4_reID">야오옹</span> 멈뭄미가 정말 귀엽네요.</p>
                    </div>
                    <div class="gramP_5">
                        <div class="gramP_id" id="gramP_5_id">apple</div><input type="text"/> <button>게시</button>
                    </div>
                    <div class="dim-layer">
                        <div class="dimBg"></div>
                        <div id={`${gram._id}layer2`} class="pop-layer">
                            <div class="pop-container">
                                <div>
                                <h2>회원 신고</h2>
                                <p><span class="messageP_id">apple</span>님께는 알리지 않습니다.</p>
                                </div>
                                <hr/>
                                <div>
                                <ul>
                                    <li>
                                    <a>
                                        <div><img src="./images/icon/004980c2c35d4fa37d9635ed7f159c3c.png" alt="부적절한 사진"/></div>
                                        <div>부적절한 사진</div>
                                    </a>
                                    </li>
                                    <li>
                                    <a>
                                        <div><img src="./images/icon/f84abf6d0bd53bf97dbb1011aa640499.png" alt="스팸으로 의심됨"/></div>
                                        <div>스팸으로 의심됨</div>
                                    </a>
                                    </li>
                                    <li>
                                    <a>
                                        <div><img src="./images/icon/49f19f63a24305a4f1dedfd8481c01e2.png" alt="부적절한 메시지"/></div>
                                        <div>부적절한 메시지</div>
                                    </a>
                                    </li>
                                    <li>
                                    <a>
                                        <div><img src="./images/icon/8c6f9b49103dd67cf3bfd50f561b46d6.png" alt="부적절한 메시지"/></div>
                                        <div>기타</div>
                                    </a>
                                    </li>
                                </ul>
                                <button class="popup_close"><span>취소</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
            
        </>
    )
}

export default GramWrite;