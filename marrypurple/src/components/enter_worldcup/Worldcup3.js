import React from 'react';
import '../../lib/styles/worldcup3.scss';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import heart from '../../lib/images/images/heart.png'
import fight from '../../lib/images/images/fight.png'

const Worldcup3 = ({ winner }) => {
    console.log(winner);
    const script = () => {

    }

    script();

    return(
        <>
            {winner && (
                <>
                    <div className="world3_1">
                        <div className="world3_1_header"><div className="Wcup"><div></div></div><span>우승자</span><div className="Wcup"><div></div></div></div>
                    </div>
                    <div className="world3_2">
                        <div className="pictureMain">
                            <div id="WinPic"><div></div></div>
                        </div>
                        <div className="profile">
                                <h1>박보영<span>28</span></h1>
                                <div className="location"><div></div></div><span>서울특별시</span>
                                <div id="hobbywrap">
                                    <div className="hobby">편맥 하기</div>
                                    <div className="hobby">여행 가기</div>
                                    <div className="hobby">독서 하기</div>
                                </div>
                        </div>
                        <div className="sogae">
                            <div>한줄 소개 및 자기소개칸입니다. </div>
                        </div>
                        <div class="likeU">
                            <a href="./worldcup1.html"><button>좋아요</button></a>
                        </div>
                    </div>
                </>
            )}
            
        </>
    )
}

export default Worldcup3;