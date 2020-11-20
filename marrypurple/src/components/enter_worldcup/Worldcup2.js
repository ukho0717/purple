import React, { useState, useEffect } from 'react';
import '../../lib/styles/worldcup2.scss';

const Worldcup2 = ({ history, error, loading, list, usersList }) => {
    let item = new Array();
    if(list){
        item = list;
        // console.log(item);
    }

    let userList = new Array();
    if(usersList){
        userList = usersList;
    }
    console.log(item.length);
    console.log('userList',usersList);
    

    const [users, setUsers] = useState(item);
    const [display, setDisplay] = useState(userList);
    const [winner, setWinner] = useState([]);
    // useEffect(() => {
    //     setUsers(item);
    //     console.log('설정된user',users);
    //     setDisplay([item[0], item[1]]);
    //     console.log('display',display);
    // }, []);
    console.log('설정된user2',users);
    console.log('display2',display);


    const clickHandler = user => () => {
        console.log(user);
        console.log('users', users);
        console.log('winner', winner);
        if(users.length <= 2){
            if(winner.length === 0){
                setDisplay([user]);
                history.push(`/worldcup3/${user._id}`);
            }else{
                let updateUser = [...winner, user];
                setUsers(updateUser);
                setDisplay([updateUser[0], updateUser[1]]);
                setWinner([]);
            }
        }else if(users.length > 2){
            setWinner([...winner, user]);
            setDisplay([users[2], users[3]]);
            setUsers(users.slice(2));
        }
    }

    if(error){
        return (
            <div><h2>오류가 발생했습니다.</h2></div>
        )
    }
    
    return(
        <>  
            {!list || !usersList && (
                <>
                    <div>로딩중</div>
                </>
            )}
            {!loading && (
                <>
                    <div className="world2_1">
                        <div className="world2_1_header"><div className="Wcup"><div></div></div><span>메리퍼플배 이상형 월드컵 4강 (1/4)</span><div className="Wcup"><div></div></div></div>
                    </div>
                    <div className="world2_2">
                        {display.map(user => {
                            return (
                                <div key={user._id} onClick={clickHandler(user)} className="world2_2_picture">
                                    <img src={user.profile_pic[0]} alt="회원 프로필사진"/>
                                </div>
                                // <div key={user._id}>{user.user_nick}</div>
                            )
                        })}
                    </div>
                </>
            )}
            
        </>
    )
}

export default Worldcup2;