import React from 'react';
import '../../lib/styles/profileMain.scss';
import { Link } from 'react-router-dom';
import $ from 'jquery';

const ProfileMain = () => {
    // const onInput1 = e => {
    //     console.log(e.target.parentNode.childNodes[5].value);

    //     // $(e.target).value = Math.min(e.target.value, e.target.parentNode.childNodes[5].value - 1);
    //     console.log(e.target.value);
    //     // $(this).defaultValue=Math.min($(this).defaultValue,$(this).parentNode.childNodes[5].defaultValue-1);
    //     // let defaultValue = (($(this).defaultValue-18)/parseInt($(this).max))*100
    //     // var children = $(this).parentNode.childNodes[1].childNodes;
    //     // children[1].style.width=defaultValue+'%';
    //     // children[5].style.left=defaultValue+'%';
    //     // children[7].style.left=defaultValue+'%';
    //     // // children[11].style.left=defaultValue+'%';
    //     // children[11].childNodes[1].innerHTML=$(this).defaultValue;
    // }

    // $('#range_min').onInput(function(){
    //     console.log('1234');
    // })

    $('#range_min').on('change', function() {
        console.log('1234');
    });

    return (
        <>
            <dl id="profileM">
                <Link to="Profile"><div><dd>프로필 수정 <span className="sub_menu_myprofile_icon">&gt;</span></dd></div></Link>
                <Link to="Payment"><div><dd>결제하기 <span className="sub_menu_myprofile_icon">&gt;</span></dd></div></Link>
                <h2>DISCOVERY 설정</h2>
                <Link><div><dd>원하는 상대 
                    <p className="input_type_radio2">
                        <input type="radio" name="gender" id="boy" defaultChecked/>
                        <label htmlFor="boy">남</label>
                        <input type="radio" name="gender" id="all"/>
                        <label id="md2" htmlFor="all">모두</label>
                        <input type="radio" name="gender" id="girl"/>
                        <label htmlFor="girl">여</label>
                    </p>
                </dd></div></Link>
                <div><dd>
                    <div>연령대 
                        <span id="slider-value"></span>
                        <div className="slider2" id="slider-distance">
                            <div>
                                <div className="inverse-left" style={{ width: "100%" }}></div>
                                <div className="inverse-right" style={{ width: "100%" }}></div>
                                <div className="range" style={{ left: "0%", right: "0%" }}></div>
                                <span className="thumb" style={{ left: "0%" }}></span>
                                <span className="thumb" style={{ left: "100%" }}></span>
                                <div className="sign" style={{ left: "84%" }}>
                                    <span id="defaultValue">18</span>
                                </div>
                                <div className="sign" style={{ left: "96%" }}>
                                    <span id="defaultValue">55</span>
                                </div>
                            </div>
                            <input type="range" defaultValue="18" max="55" min="18" step="1"
                            
                            // onInput={
                            //         // console.log(e.target.defaultValue);
                            //         // $(this).defaultdefaultValue=Math.min($(this).defaultdefaultValue,$(this).parentNode.childNodes[5].defaultdefaultValue-1);
                            //         // let defaultdefaultValue = (($(this).defaultdefaultValue-18)/parseInt($(this).max))*100
                            //         // var children = $(this).parentNode.childNodes[1].childNodes;
                            //         // children[1].style.width=defaultdefaultValue+'%';
                            //         // children[5].style.left=defaultdefaultValue+'%';
                            //         // children[7].style.left=defaultdefaultValue+'%';
                            //         // // children[11].style.left=defaultdefaultValue+'%';
                            //         // children[11].childNodes[1].innerHTML=$(this).defaultdefaultValue;
                            // }
                            id="range_min" />
                            
                            <input type="range" defaultValue="55" max="55" min="18" step="1" 
                            // onInput="
                            // this.defaultValue=Math.max(this.defaultValue,this.parentNode.childNodes[3].defaultValue-(-1));
                            // let defaultValue = (this.defaultValue/parseInt(this.max))*100
                            // var children = this.parentNode.childNodes[1].childNodes;
                            // children[3].style.width=(100-defaultValue)+'%';
                            // children[5].style.right=(100-defaultValue)+'%';
                            // children[9].style.left=defaultValue+'%';
                            // // children[13].style.left=defaultValue+'%';
                            // children[13].childNodes[1].innerHTML=this.defaultValue;" 
                            />
                            <span id="slider-between">-</span>
                        </div>
                    </div>
                </dd></div>
                <h2>알림</h2>
                <Link to="#"><div><dd>푸시알림 <span className="sub_menu_myprofile_icon">&gt;</span></dd></div></Link>
                <h2>도움말·고객 지원</h2>
                <Link to="FAQ2"><div><dd>도움말·고객 지원 <span className="sub_menu_myprofile_icon">&gt;</span></dd></div></Link>
                <h2>커뮤니티</h2>
                <Link to="FAQ2"><div><dd>커뮤니티 가이드라인 <span className="sub_menu_myprofile_icon">&gt;</span></dd></div></Link>
                <Link to="FAQ"><div><dd>안전 및 정책 센터 <span className="sub_menu_myprofile_icon">&gt;</span></dd></div></Link>
                <Link to="FAQ"><div><dd>안전을 위한 도움말 <span className="sub_menu_myprofile_icon">&gt;</span></dd></div></Link>
                <h2>법적 고지</h2>
                <Link to="FAQ"><div><dd>개인정보 취급방침 <span className="sub_menu_myprofile_icon">&gt;</span></dd></div></Link>
                <Link to="#"><div><dd>로그아웃</dd></div></Link>
                <Link to="#"><div><dd>계정삭제</dd></div></Link>
            </dl>
        </>
    )
}

export default ProfileMain;