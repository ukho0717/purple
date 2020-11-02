import Matching from '../../models/matching';
import User from '../../models/user';
import mongoose from 'mongoose';
import io from 'socket.io-client';//클라이언트에서 연결할 소켓

// 매칭이 되었을 때 방이 생성됨
export const matching = async ctx=>{
    connetToServer();
}

// 입장
export const join = async ctx=>{
    connetToServer();
}

// 메세지 보내기
export const send = async ctx=>{
    connetToServer();
}

// 사용자 차단
export const block = async ctx=>{
    connetToServer();
}

// 매치 취소하기
export const cancel = async ctx=>{
    connetToServer();
}

//포트번호
const { PORT } = process.env;
//서버접속
function connetToServer(){
    console.log('connetToServer 호출');

    let url = 'http://localhost:' + PORT;
    const socket = io.connect(url);
    console.log('socket 객체 생성');
    socket.on('connect', function() {
        console.log('웹소켓 서버에 연결되었습니다. : ' + url);

        socket.on('message', function(message) {
        });
        socket.on('response', function(response) {
        });
        socket.on('room', function(data){
        });
    });

    socket.on('disconnect', function() {
        console.log('웹소켓 연결이 종료되었습니다.');
        println('웹소켓 연결이 종료되었습니다.');
    });
}