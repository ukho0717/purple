import React, { useState, useEffect } from 'react';
import '../../lib/styles/worldcup2.scss';

const Worldcup2 = ({ userList, history }) => {
    let item = new Array();
    if(userList){
        item = userList;
        console.log(item.length);
    }

    const [users, setUsers] = useState([]);
    const [display, setDisplay] = useState([]);
    const [winner, setWinner] = useState([]);
    useEffect(() => {
        setUsers(item);
        console.log('설정된user',users);
        setDisplay([item[0], item[1]]);
        
    }, []);

    const clickHandler = user => () => {
        // console.log(users.length);
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

    return(
        <>
            <div className="world2_1">
                <div className="world2_1_header"><div className="Wcup"><div></div></div><span>메리퍼플배 이상형 월드컵 4강 (1/4)</span><div className="Wcup"><div></div></div></div>
            </div>
            <div className="world2_2">
                {display.map(user => {
                    return (
                        <div onClick={clickHandler(user)} className="world2_2_picture">
                            <img src={user.profile_pic[0]} alt="회원 프로필사진"/>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Worldcup2;