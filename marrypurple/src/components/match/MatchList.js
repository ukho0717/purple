import React from 'react';
import '../../lib/styles/matchList.scss';
import { Link } from 'react-router-dom';
import $ from 'jquery';

const MatchList = () => {
    return (
        <>
            <div className="matchList_1">
                <div className="matchList_1_title">
                    <h2>매치</h2><span className="matchList_count">2</span>
                </div>
                <div className="matchList_1_content">
                    <ul id="matchList_1_list">
                        <Link to="/match_like"><div><li></li></div>나를 좋아요</Link>
                        <Link to="/message"><div><li></li></div>123</Link>
                        <Link to="/message"><div><li></li></div>야야야</Link>
                    </ul>
                </div>
            </div>
            <div className="matchList_2">
                <div className="matchList_2_title">
                    <h2>메시지</h2><span class="matchList_count">3</span>
                </div>
                <div className="matchList_2_content">
                    <ul id="matchList_2_list">
                        <Link to="/message"><li className="matchList_2_listP">
                            <div className="matchList_2_listP_wrap"><div className="matchList_2_listP_photo"></div></div>
                            <div className="matchList_2_listP_idwrap"><span className="matchList_2_listP_id">냐옹</span></div>
                        </li></Link>
                        <Link to="/message"><li className="matchList_2_listP">
                            <div className="matchList_2_listP_wrap"><div className="matchList_2_listP_photo"></div></div>
                            <div className="matchList_2_listP_idwrap"><span className="matchList_2_listP_id">냐옹</span></div>
                        </li></Link>
                        <Link to="/message"><li className="matchList_2_listP">
                            <div className="matchList_2_listP_wrap"><div class="matchList_2_listP_photo"></div></div>
                            <div className="matchList_2_listP_idwrap"><span class="matchList_2_listP_id">냐옹</span></div>
                        </li></Link>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MatchList;