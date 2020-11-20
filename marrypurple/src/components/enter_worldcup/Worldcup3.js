import React, { Component } from 'react';
import '../../lib/styles/worldcup3.scss';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import errorImg from '../../lib/images/images/500.png'

const Worldcup3 = ({ winner, error, loading }) => {
    console.log(winner);
    if(error || !winner){
        return (
            <>
                <div class="col-lg-6 col-lg-offset-3 p404 centered">
                    <img src={errorImg} alt=""/>
                    <h1>ERROR 500</h1>
                    <h3>Ouch!! Something Went Wrong!</h3>
                    <h5 class="mt">Hey, maybe you will be interested in these pages:</h5>
                    <p><Link to="/match">Match</Link> | <Link to="/FAQ2">FAQ</Link></p>
                </div>
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

// export default class Worldcup3 extends Component {
    

//     render() {
//         const { onClick } = this.props;
//         console.log('1234');
//         return (
//             <div>
//                 <h2>test</h2>
//                 <button onClick={onClick}>버튼</button>
//             </div>
//         )
//     }
// }