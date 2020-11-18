import React from 'react';
import '../../lib/styles/worldcup.scss';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import heart from '../../lib/images/images/heart.png'
import fight from '../../lib/images/images/fight.png'

const Worldcup1 = () => {
    // console.log(listGram);
    const script = () => {

    }

    script();

    return(
        <>
            <div className="world1_1">
                <div className="world1_1_header"><div className="Wcup"><div></div></div><span>메리퍼플배 이상형 월드컵</span><div className="Wcup"><div></div></div></div>
            </div>
            <div className="world1_2">
                <div className="heartS">
                    <img src={heart} alt="heart image"/>
                    <img src={heart} alt="heart image"/>
                    <img src={heart} alt="heart image"/>
                </div>
                <p>이상형</p>
                <p>월드컵</p>
                <div className="fightS">
                    <img src={fight} alt="fight image"/>
                </div>
                <div className="startS">
                    <Link to="/worldcup2"><button>시작하기</button></Link>
                </div>
            </div>
        </>
    )
}

export default Worldcup1;