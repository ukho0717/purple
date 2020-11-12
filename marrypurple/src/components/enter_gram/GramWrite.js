import React, { Component } from 'react';
// import styled from 'styled-components';
import '../../lib/styles/gram.scss';
import $ from 'jquery';
// import { Helmet } from 'react-helmet';
import axios from 'axios';

// class GramWrite extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             selectedFile : null,
//             text: null,
//         }
//     }

//     inputChange(e){
//         // console.log(e.target.files[0]);
//         console.log(e.target.file);
//         this.setState({
//             selectedFile: e.target.file,
//         })
//     }

//     contextChange(e){
//         this.setState({
//             test: e.target.value,
//         })
//     }

//     handlePost(){
//         const formdata = new FormData();
//         formdata.append('file', this.state.selectedFile);
//         formdata.append('content', this.state.text);

//         return axios.post('/api/posts', formdata).then(res => {
//             alert('성공')
//         }).catch(err => {
//             alert('실패');
//         })
//     }

//     render(){
//         return(
//             <>
//                 {/* <div class="gramW_1">
//                     <form method="post" enctype="multipart/form-data" action="">
//                         <p>작성하기</p>
//                         <label for="gramW_1_file">사진선택</label>
//                         <input type="file" id="gramW_1_file" name="file" onChange={e => this.inputChange(e)}/>
//                         <div id="gramW_1_photo">
//                             <span id="photoPre">미리보기</span>
//                             <img/>
//                         </div>
//                         <textarea placeholder="내용을 입력해주세요.(100자 제한)
//                         카카오톡 아이디 또는 개인 연락처를 
//                         노출할 경우 계정이 정지될 수 있습니다." name="content" onChange={e => this.contextChange(e)}></textarea>
//                         <p id="warning">* 개인 연락처 노출, 부적절한 이미지 등록,<br/>신고 3회 이상의 경우 계정이 정지처리 됩니다.</p>
//                         <input type="submit" value="완료" onClick={this.handlePost()}/>
//                     </form>
//                 </div> */}
//                 <div>
//                     <input type="file" name="file" onChange={e => this.inputChange}/>
//                     <button type="button" onClick={this.handlePost()}>보내기</button>
//                 </div>
//             </>
//         )
//     }
// }

const GramWrite = ({ onSubmit }) => {
    const script = () => {
        $('.gramW_1_back').on('click', function(){
            window.history.back();
        });
    }

    function readURL(input) {
        if(input.files && input.files[0]) {
            // console.log('파일이름', input.files[0].name);
            // console.log(input.files[0].name);
            var reader = new FileReader();
        
            reader.onload = function (e) {
                $('#photoPre').css({'display': 'none'});
                $('#gramW_1_photo img').css({'display': 'block'});
                $('#gramW_1_photo img').attr('src', e.target.result);
            }
        
            reader.readAsDataURL(input.files[0]);
            // $('#gramW_1_file').addClass(res.data.data.url);
        }
    }

    const fileSelectHandler = e =>{
        imgbbUploader(e.target.files[0]).then(res => {
            // console.log(res.data.data.url);
            // console.log(e.target);
            readURL(e.target);
            $('#gramW_1_file').addClass(res.data.data.url);
        });
    }

    const imgbbUploader = ( img ) => {
        let body = new FormData();
        body.set('key', 'a88534ba3406503cc7c607af2810b2d9');
        body.append('image', img)
    
        return axios({
            url: 'https://api.imgbb.com/1/upload',
            method: 'post',
            timeout: 0,
            processData: false,
            mimeType: "multipart/form-data",
            contentType: false,
            data: body
        })
    }

    script();

    return(
        <>
            <div class="gramW_1">
                <form method="post" enctype="multipart/form-data" onSubmit={onSubmit}>
                    <div><div className="gramW_1_back"></div><p>작성하기</p></div>
                    <label for="gramW_1_file">사진선택</label>
                    <input type="file" id="gramW_1_file" name="file" onChange={fileSelectHandler}/>
                    <div id="gramW_1_photo">
                        <span id="photoPre">미리보기</span>
                        <img/>
                    </div>
                    <textarea placeholder="내용을 입력해주세요.(100자 제한)
카카오톡 아이디 또는 개인 연락처를 
노출할 경우 계정이 정지될 수 있습니다." name="content" ></textarea>
                    <p id="warning">* 개인 연락처 노출, 부적절한 이미지 등록,<br/>신고 3회 이상의 경우 계정이 정지처리 됩니다.</p>
                    <input type="submit" value="완료"/>
                </form>
            </div>
        </>
    )
}

export default GramWrite;