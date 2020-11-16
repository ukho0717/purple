import Chat from './models/chat';//chat 스키마 가져오기
let login_ids = {};
const socketEvents = (io)=>{
    io.on('connection', (socket) => { // 웹소켓 연결 시
        console.log('웹소켓이 실행됩니다.');
        // DB에 저장되어있던 이전 대화 띄워짐
        // Chat.find(function (err, result) {
        //     for(var i = 0 ; i < result.length ; i++) {
        //         var dbData = { roomname: result[i].room, name : result[i].username, message : result[i].message};
        //         io.sockets.sockets[socket.id].emit('preload', dbData);
        //     }
        // });
        
        socket.emit('yourId', socket.id);

        //로그인
        socket.on('login', function(login){
            console.log('login 이벤트를 받았습니다.');
            console.dir(login);
    
            login_ids[login.id] = socket.id;
            socket.login_id = login.id;
    
            console.log('접속한 클라이언트 id 갯수 : %d', Object.keys(login_ids).length);
        });

        // 메세지 보내기 + DB에 메세지 넣기
        socket.on('sendMessage', function(data) {
            console.log('message 이벤트를 받았습니다.');
            if(login_ids[data.recepient]){
                // io.sockets.connected[login_ids[data.recepient]].emit('message', data);
                io.sockets.emit('message', data);
            }else{
                console.log('보내는사람',data.sender)
                io.sockets.emit('message', data);
            }
            // chat스키마에 대화내용 추가
            // let chat = new Chat({ roomname: data.room, username: data.name, message: data.message });
    
            // chat.save(function (err, data) {
            // if (err) {// TODO handle the error
            //     console.log("error");
            // }
            // console.log('message is inserted');
            // });
    
        });
    });
};

export default socketEvents;
