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
                <a><div><dd>원하는 상대 
                    <p className="input_type_radio2">
                        <input type="radio" name="gender" id="boy" defaultChecked/>
                        <label for="boy">남</label>
                        <input type="radio" name="gender" id="all"/>
                        <label id="md2" for="all">모두</label>
                        <input type="radio" name="gender" id="girl"/>
                        <label for="girl">여</label>
                    </p>
                </dd></div></a>
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