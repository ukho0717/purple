import React, { useState, useEffect } from 'react';
import '../../lib/styles/worldcup2.scss';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import fight from '../../lib/images/images/fight.png'


import styled from "styled-components";

export const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  .title {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    padding: 0px 30px;
    text-transform: uppercase;
    padding-bottom: 10px;
  }
  .flex-1 {
    flex: 1;
    min-width: 500px;
    overflow: hidden;
    background-color: black;
    position: relative;
  }
  .food-img {
    width: 100%;
    height: 100%;
    transition: 0.5s;
    cursor: pointer;
  }
  .food-img:hover {
    transform: scale(1.1);
    opacity: 0.8;
  }
  .name {
    position: absolute;
    z-index: 3;
    color: #fff;
    bottom: 10%;
    font-size: 90px;
    left: 50%;
    transform: translateX(-50%);
  }
`;


const Worldcup2 = ({ userList }) => {
    // console.log(userList);

    // const [users, setUsers] = useState([]);
    // const [display, setDisplay] = useState([]);
    // const [winner, setWinner] = useState([]);
    // useEffect(() => {
    //     setUsers(userList);
    //     setDisplay([userList[0], userList[1]]);
    // }, []);

    // const clickHandler = user => () => {
    //     if(users.length <= 2){
    //         if(winner.length === 0){
    //             setDisplay([user]);
    //         }else{
    //             let updateUser = [...winner, user];
    //             setUsers(updateUser);
    //             setDisplay([updateUser[0], upadateUser[1]]);
    //             setWinner([]);
    //         }
    //     }else if(users.length > 2){
    //         setWinner([...winner, user]);
    //         setDisplay([users[2]], users[3]);
    //         setUsers(users.slice(2));
    //     }
    // }

    return(
        <>
            {/* <div class="world2_1">
                <div class="world2_1_header"><div id="Wcup"><div></div></div><span>메리퍼플배 이상형 월드컵 4강 (1/4)</span><div id="Wcup"><div></div></div></div>
            </div>
            <div class="world2_2">
                <div class="picture1">
                    <a href="./worldcup3.html"><button></button></a>
                </div>
                <div class="fightG">
                    <img src={fight}/>
                </div>
                <div class="picture2">
                    <a href="./worldcup3.html"><button></button></a>
                </div>
            </div> */}
            {/* <FlexBox>
                <h1 className="title">Favorite Worldcup</h1>
                {display.map(d => {
                    return (
                    <div className="flex-1" key={d.name} onClick={clickHandler(d)}>
                        <img className="food-img" src={d.src} />
                        <div className="name">{d.name}</div>
                    </div>
                    );
                })}
            </FlexBox> */}
        </>
    )
}

export default Worldcup2;