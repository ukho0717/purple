import React from 'react';
import '../../lib/styles/findOne.scss'

const FindOne = () => {
    return(
        <>
        <div class="findF_1">
                    <div id="findF_1_icon"></div>
                    <p>이상형을 선택하세요.<br/>3개 이상 선택해 주세요.</p>
                </div>
                <div class="findF_2">
                    <form>
                        <input type="checkbox" className="styles" value="귀여운" id="cute"/><label for="cute">귀여운</label>
                        <input type="checkbox" className="styles" value="어른스러운" id="mature"/><label for="mature">어른스러운</label>
                        <input type="checkbox" className="styles" value="섹시한" id="sexy" /><label for="sexy">섹시한</label>
                        <input type="checkbox" className="styles" value="남자다운" id="manly" /><label for="manly">남자다운</label>
                        <input type="checkbox" className="styles" value="청순한" id="natural" /><label for="natural">청순한</label>
                        <input type="checkbox" className="styles" value="호기심많은" id="curious" /><label for="curious">호기심많은</label>
                        <input type="checkbox" className="styles" value="진중한" id="serious" /><label for="serious">진중한</label>
                        <input type="checkbox" className="styles" value="과감한" id="agressive" /><label for="agressive">과감한</label>
                        <input type="checkbox" className="styles" value="지적인" id="intelli" /><label for="intelli">지적인</label>
                        <input type="checkbox" className="styles" value="츤데레" id="tsndere" /><label for="tsndere">츤데레</label>
                        <input type="checkbox" className="styles" value="솔직한" id="honesty" /><label for="honesty">솔직한</label>
                        <input type="checkbox" className="styles" value="성숙한" id="growth" /><label for="growth">성숙한</label>
                        <input type="checkbox" className="styles" value="쿨한" id="cool" /><label for="cool">쿨한</label>
                        <input type="checkbox" className="styles" value="유머있는" id="humorous" /><label for="humorous">유머있는</label>
                        <input type="checkbox" className="styles" value="배려심많은" id="careful" /><label for="careful">배려심많은</label>
                        <input type="checkbox" className="styles" value="소심한" id="timid" /><label for="timid">소심한</label>
                        <input type="checkbox" className="styles" value="시니컬한" id="cynical" /><label for="cynical">시니컬한</label>
                        <input type="checkbox" className="styles" value="키가큰" id="tall" /><label for="tall">키가큰</label>
                        <input type="checkbox" className="styles" value="아담한" id="small" /><label for="small">아담한</label>
                        <input type="checkbox" className="styles" value="쾌활한" id="outgoing" /><label for="outgoing">쾌활한</label>
                        <input type="checkbox" className="styles" value="어리버리" id="clumsy" /><label for="clumsy">어리버리</label>
                        <input type="checkbox" className="styles" value="감성적" id="emotional" /><label for="emotional">감성적</label>
                        <input type="checkbox" className="styles" value="책임감있는" id="leadership" /><label for="leadership">책임감있는</label>
                        <input type="checkbox" className="styles" value="통통튀는" id="bubbly" /><label for="bubbly">통통튀는</label>
                        <input type="checkbox" className="styles" value="드립장인" id="funny" /><label for="funny">드립장인</label>
                        <input type="checkbox" className="styles" value="깔끔한" id="tidy" /><label for="tidy">깔끔한</label>
                        <input type="checkbox" className="styles" value="힘이센" id="strong" /><label for="strong">힘이센</label>
                        <input type="checkbox" className="styles" value="인정많은" id="empathy" /><label for="empathy">인정많은</label>
                        <input type="checkbox" className="styles" value="뚝딱이" id="ddukddak" /><label for="ddukddak">뚝딱이</label>
                        <input type="checkbox" className="styles" value="사회성좋은" id="social" /><label for="social">사회성좋은</label>
                        <input type="checkbox" className="styles" value="믿음직한" id="trustworthy" /><label for="trustworthy">믿음직한</label>
                        <input type="checkbox" className="styles" value="미식가" id="foodlover" /><label for="foodlover">미식가</label>
                        <input type="checkbox" className="styles" value="활동적인" id="active" /><label for="active">활동적인</label>
                        <input type="checkbox" className="styles" value="고양이파" id="catperson" /><label for="catperson">고양이파</label>
                        <input type="checkbox" className="styles" value="강아지파" id="dogperson" /><label for="dogperson">강아지파</label>
                        <input type="checkbox" className="styles" value="부먹" id="pour" /><label for="pour">부먹</label>
                        <input type="checkbox" className="styles" value="찍먹" id="dip" /><label for="dip">찍먹</label>
                        <input type="checkbox" className="styles" value="바깥순이" id="outgirl" /><label for="outgirl">바깥순이</label>
                        <input type="checkbox" className="styles" value="바깥돌이" id="outboy" /><label for="outboy">바깥돌이</label>
                        <input type="checkbox" className="styles" value="집순이" id="homebodygirl" /><label for="homebodygirl">집순이</label>
                        <input type="checkbox" className="styles" value="집돌이" id="hombodyboy" /><label for="hombodyboy">집돌이</label>
                        <input type="checkbox" className="styles" value="친근한" id="friendly" /><label for="friendly">친근한</label>
                        <input type="checkbox" className="styles" value="독립적인" id="independency" /><label for="independency">독립적인</label>
                        <input type="checkbox" className="styles" value="무던한" id="dull" /><label for="dull">무던한</label>
                        <input type="checkbox" className="styles" value="멘탈왕" id="mentalking" /><label for="mentalking">멘탈왕</label>
                        <input type="checkbox" className="styles" value="양심적인" id="conscience" /><label for="conscience">양심적인</label>
                        <input type="checkbox" className="styles" value="계획적인" id="organized" /><label for="organized">계획적인</label>
                        <div class="findF_3">
                            <button>완료</button>
                        </div>
                    </form>
                </div>

        </>
    )
}

export default FindOne;