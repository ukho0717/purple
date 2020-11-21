import React from 'react';
import '../../lib/styles/worldcup3.scss';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import Error from '../common/Error';

const Worldcup3 = ({ winner, error, loading }) => {
    console.log(winner);
    if(error){
        return (
            <>
                <Error/>
            </>
        )
    }

    return (
        <>
            {!loading && winner && (
                <>
                    <div className="world3_1">
                        <div className="world3_1_header"><div className="Wcup"><div></div></div><span>우승자</span><div className="Wcup"><div></div></div></div>
                    </div>
                    <div className="world3_2">
                        <div className="pictureMain">
                            <div id="WinPic"><div></div></div>
                        </div>
                        <div className="profile">
                                <h1>{winner.user_nick}<span>{winner.user_age}</span></h1>
                                {winner.address && (
                                    <>
                                        <div className="location"><div></div></div><span>{winner.address}</span>
                                    </>
                                )}
                                {winner.personality && winner.personality != "" && (
                                    <div id="hobbywrap">
                                        {winner.personality.map((personality, index) => (
                                            <div key={index} className="hobby">{personality}</div>
                                        ))}
                                    </div>
                                )}
                                
                        </div>
                        {/* 한줄소개가 스키마에 없음 */}
                        {/* <div className="sogae">
                            <div>한줄 소개 및 자기소개칸입니다. </div>
                        </div> */}

                        {/* 좋아요. 다시할래요 */}
                        <div className="likeU">
                            <Link to="/worldcup1"><button>좋아요</button></Link>
                        </div>
                    </div>
                </>
            )}
            
        </>
    )
}

export default Worldcup3;
