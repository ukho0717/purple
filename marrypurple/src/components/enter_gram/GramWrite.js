import React from 'react';
// import styled from 'styled-components';
import '../../lib/styles/gram.scss';
import $ from 'jquery';
// import { Helmet } from 'react-helmet';

const GramWrite = () => {
    const script = () => {
        console.log('왜안되는거니');
        $('#gramW_1_file').on('change', function(){
            readURL(this);
            console.log('this', this);
            console.log('12345667');
        });
    }

    function readURL(input) {
        console.log('12345');
        if(input.files && input.files[0]) {
            console.log('2222');
            var reader = new FileReader();
        
            reader.onload = function (e) {
                $('#photoPre').css({'display': 'none'});
                $('#gramW_1_photo img').css({'display': 'block'});
                $('#gramW_1_photo img').attr('src', e.target.result);
            }
        
            reader.readAsDataURL(input.files[0]);
        }
    }

    script();

    return(
        <>
            <div class="gramW_1">
                <form method="post" enctype="multipart/form-data" action="/gram_main">
                    <p>작성하기</p>
                    <label for="gramW_1_file">사진선택</label>
                    <input type="file" id="gramW_1_file"/>
                    <div id="gramW_1_photo">
                        <span id="photoPre">미리보기</span>
                        <img/>
                    </div>
                    <textarea placeholder="내용을 입력해주세요.(100자 제한)
카카오톡 아이디 또는 개인 연락처를 
노출할 경우 계정이 정지될 수 있습니다."></textarea>
                    <p id="warning">* 개인 연락처 노출, 부적절한 이미지 등록,<br/>신고 3회 이상의 경우 계정이 정지처리 됩니다.</p>
                    <input type="submit" value="완료"/>
                </form>
            </div>
        </>
    )
}

export default GramWrite;