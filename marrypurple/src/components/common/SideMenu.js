import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SideMenuResponsive from './SideMenuResponsive';
import '../../lib/styles/styles.scss';

const SideMenu = () => {
    return (
        <>
            <div className="wrap">
                <div className="left_menu">
                    <ul>
                        <li>
                            <ul id="myprofile">
                                <a href="Profile.html" id="myprofile_btn"><li><div id="myPho"><div></div></div><span>나의 프로필</span></li></a>
                                <a href="work.html"><li></li></a>
                            </ul>
                        </li>
                        <li>
                            <ul id="sub_menu">
                                <a href="match.html" id="m1"><li>매치</li></a>
                                <a id="m2"><li>메시지</li></a>
                                <a id="m3" class="on"><li>엔터테인먼트</li></a>
                            </ul>
                        </li>
                        <li>
                            <div id="slide_box">
                                <div id="sub_menu_match" class="off">
                                    <ul>
                                        <a href="match_like.html"><div><li>나를 좋아요</li></div></a>
                                        <a href="message.html"><div><li>123</li></div></a>
                                        <a href="message.html"><div><li>야야야</li></div></a>
                                    </ul>
                                </div>
                                <div id="sub_menu_message" class="off">
                                    <ul id="message_list">
                                        <a href="message.html"><li class="message_listP">
                                            <div class="message_listP_wrap"><div class="message_listP_photo"><div></div></div>
                                            <div><span class="message_listP_id">냐옹</span></div></div>
                                        </li></a>
                                        <a href="message.html"><li class="message_listP">
                                            <div class="message_listP_wrap"><div class="message_listP_photo"><div></div></div>
                                            <div><span class="message_listP_id">냐옹</span></div></div>
                                        </li></a>
                                        <a href="message.html"><li class="message_listP">
                                            <div class="message_listP_wrap"><div class="message_listP_photo"><div></div></div>
                                            <div><span class="message_listP_id">냐옹</span></div></div>
                                        </li></a>
                                    </ul>
                                </div>
                                <div id="sub_menu_enter" class="on">
                                    <ul>
                                        <a href="worldcup1.html"><div><li>이상형 월드컵</li></div></a>
                                        <a href="Telepathy.html"><div><li>텔레파시</li></div></a>
                                        <a href="find_main.html"><div><li>이상형 찾기</li></div></a>
                                        <a href="gram_main.html"><div><li>메리퍼플그램</li></div></a>
                                        <a><div><li>공지사항</li></div></a>
                                        <a href="board_bad.html" class="on"><div><li>불량회원</li></div></a>
                                        <a href="FAQ.html"><div><li>FAQ</li></div></a>
                                    </ul>
                                </div>
                                <div id="sub_menu_myprofile" class="off">
                                    <dl>
                                        <a href="Payment.html"><div><dd>결제하기 <span class="sub_menu_myprofile_icon">&gt;</span></dd></div></a>
                                        <h2>DISCOVERY 설정</h2>
                                        <a>
                                            <div>
                                                <dd>원하는 상대 
                                                    <p class="input_type_radio2">
                                                        <input type="radio" name="gender" id="boy" checked/>
                                                        <label for="boy">남</label>
                                                        <input type="radio" name="gender" id="all"/>
                                                        <label id="md2" for="all">모두</label>
                                                        <input type="radio" name="gender" id="girl"/>
                                                        <label for="girl">여</label>
                                                    </p>
                                                </dd>
                                            </div>
                                        </a>
                                        <div><dd>
                                            <div>연령대 <span id="slider-value"></span>
                                                {/* <div slider id="slider-distance">
                                                    <div>
                                                    <div inverse-left style="width:100%;"></div>
                                                    <div inverse-right style="width:100%;"></div>
                                                    <div range style="left:0%;right:0%;"></div>
                                                    <span thumb style="left:0%;"></span>
                                                    <span thumb style="left:100%;"></span>
                                                    <div sign style="left:84%;">
                                                        <span id="value">18</span>
                                                    </div>
                                                    
                                                    <div sign style="left:96%;">
                                                        <span id="value">55</span>
                                                    </div>
                                                    </div>
                                                    <input type="range" value="18" max="55" min="18" step="1" oninput="
                                                    this.value=Math.min(this.value,this.parentNode.childNodes[5].value-1);
                                                    let value = ((this.value-18)/parseInt(this.max))*100
                                                    var children = this.parentNode.childNodes[1].childNodes;
                                                    children[1].style.width=value+'%';
                                                    children[5].style.left=value+'%';
                                                    children[7].style.left=value+'%';
                                                    // children[11].style.left=value+'%';
                                                    children[11].childNodes[1].innerHTML=this.value;" />
                                                
                                                    <input type="range" value="55" max="55" min="18" step="1" oninput="
                                                    this.value=Math.max(this.value,this.parentNode.childNodes[3].value-(-1));
                                                    let value = (this.value/parseInt(this.max))*100
                                                    var children = this.parentNode.childNodes[1].childNodes;
                                                    children[3].style.width=(100-value)+'%';
                                                    children[5].style.right=(100-value)+'%';
                                                    children[9].style.left=value+'%';
                                                    // children[13].style.left=value+'%';
                                                    children[13].childNodes[1].innerHTML=this.value;" />
                                                    <span id="slider-between">-</span>
                                                </div> */}
                                            </div>
                                        </dd></div>
                                        <h2>알림</h2>
                                        <a href="#"><div><dd>푸시알림 <span class="sub_menu_myprofile_icon">&gt;</span></dd></div></a>
                                        <h2>도움말·고객 지원</h2>
                                        <a href="FAQ2.html"><div><dd>도움말·고객 지원 <span class="sub_menu_myprofile_icon">&gt;</span></dd></div></a>
                                        <h2>커뮤니티</h2>
                                        <a href="FAQ2.html"><div><dd>커뮤니티 가이드라인 <span class="sub_menu_myprofile_icon">&gt;</span></dd></div></a>
                                        <a href="FAQ.html"><div><dd>안전 및 정책 센터 <span class="sub_menu_myprofile_icon">&gt;</span></dd></div></a>
                                        <a href="FAQ.html"><div><dd>안전을 위한 도움말 <span class="sub_menu_myprofile_icon">&gt;</span></dd></div></a>
                                        <h2>법적 고지</h2>
                                        <a href="FAQ.html"><div><dd>개인정보 취급방침 <span class="sub_menu_myprofile_icon">&gt;</span></dd></div></a>
                                        <a href="#"><div><dd>로그아웃</dd></div></a>
                                        <a href="#"><div><dd>계정삭제</dd></div></a>
                                    </dl>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
};

export default SideMenu;