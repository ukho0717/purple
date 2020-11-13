import Chat from './models/chat';//chat 스키마 가져오기

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

        //로그인
        socket.on('login', function(login){
            console.log('login 이벤트를 받았습니다.');
            console.dir(login);
    
            login_ids[login.id] = socket.id;
            socket.login_id = login.id;
    
            console.log('접속한 클라이언트 id 갯수 : %d', Object.keys(login_ids).length);
        });

        // 메세지 보내기 + DB에 메세지 넣기
        socket.on('message', function(data) {
    
            io.sockets.emit('message', data);
            // chat스키마에 대화내용 추가
            let chat = new Chat({ roomname: data.room, username: data.name, message: data.message });
    
            chat.save(function (err, data) {
            if (err) {// TODO handle the error
                console.log("error");
            }
            console.log('message is inserted');
            });
    
        });

        //입장
        socket.on('room', function(room){
            console.log('room 이벤트를 받았습니다.');
            console.dir(room);
            console.log(room.commamd);
            if(room.command === 'create'){
                if(io.sockets.adapter.rooms[room.roomId]){
                    console.log('방이 이미 만들어져 있습니다.');
                }else{
                    console.log('방을 새로 만듭니다.');
                    socket.join(room.roomId);
                    let curRoom = io.sockets.adapter.rooms[room.roomId];
                    curRoom.id = room.roomId;
                    curRoom.name = room.roomName;
                    curRoom.owner = room.roomOwner;
                }
            }else if(room.command === 'update'){
                let curRoom = io.sockets.adapter.rooms[room.roomId];
                curRoom.id = room.roomId;
                curRoom.name = room.roomName;
                curRoom.owner = room.roomOwner;
            }else if(room.command === 'delete'){
                console.log('delete 호출');
                socket.leave(room.roomId);
                if(io.sockets.adapter.rooms[room.roomId]){
                    delete io.sockets.adapter.rooms[room.roomId];
                }else{
                    console.log('방이 만들어져 있지 않습니다.');
                }
            }else if(room.command === 'join'){
                console.log('join 됨');
                socket.join(room.roomId);
                sendResponse(socket, 'room', '200', '방에 입장했습니다.');
            }else if(room.command === 'leave'){
                console.log('leave 됨');
                socket.leave(room.roomId);
                sendResponse(socket, 'room', '200', '방에서 나갔습니다.');
            }
            
            let roomList = getRoomList();
            let output = {command:'list', rooms:roomList};
            console.log('클라이언트로 보낼 데이터 : ' + JSON.stringify(output));
            io.sockets.emit('room', output);
        });


    });
};

export default socketEvents;