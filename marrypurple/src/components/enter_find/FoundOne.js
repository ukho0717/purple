import React from 'react';
import '../../lib/styles/found.scss';
import { IoMdRefreshCircle } from 'react-icons/io'

const FoundOne = ({who}) => {
    return(
        <>
            <div id="yours_is" className="common_div">당신의 이상형은...</div>
            <div id="found_profile_pic" className="common_div"><img src={who.profile_pic}/></div>
            <div id="detail_container" className="common_div">
                <div id="found_user_nick" className="common_div">
                    {who.user_nick}님
                    <span>({who.user_age})</span>
                    <div id="placeIco_find" className="common_div"></div><div id="found_address">{who.address}</div>
                </div>
                <div className="common_div">{(who.personality).map(p => (
                    <div className="found_personality">{p}</div>
                    ))}
                </div>
            </div>
            <div id="flex_div">
                <a><div id="like_you"></div><div>좋아요 하기</div></a>
                <a><IoMdRefreshCircle id="pass_you"/><div>다른사람 찾아볼래요</div></a>
            </div>
        </>
    )
}

export default FoundOne;