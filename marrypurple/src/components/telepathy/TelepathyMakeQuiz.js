import React,{useState} from 'react';
import '../../lib/styles/Telepathy_make_quiz.scss'

const TelepathyMakeQuiz = ({ OnToggle, unfoldDiv }) => {
    const [mun, setMun]=useState([])
    const [ans, setAns]=useState([])
    const selectAns = (e, question) => {
        if(e.target.checked === true){
            e.target.removeAttribute('checked',false)
        }else if(e.target.checked === false){
            e. target.setAttribute('checked', true);
        }
        if(mun.length < 3 && ans.length <3){
            setMun(mun.filter(m => m != question).concat(question) )
            setAns(ans.filter(a => a != e.target.value).concat(e.target.value))
        }else{
            setMun(mun.filter(m => m != question).concat(question) )
            setAns(ans.filter(a => a != e.target.value).concat(e.target.value))
        }
    }
    return(
        <>
            <p class="guideline">
                <i class="fas fa-chevron-left"></i>
                텔레파시 통통통
            </p>
            <div class="choose_mun">문제고르기</div>
            <section id="part1">
                <div class="part1_fc">3가지 질문을 선택하고 답해주세요</div>
                <div class="process">
                    <div class="num1">1</div>
                    <div class="num2">2</div>
                    <div class="num3">3</div>
                </div>
            </section>
            <form>
                <section id="part2">
                    <div class="choose_mun">상황</div>
                    <div class="mun">
                        <a href="#mun1" onClick={() => OnToggle('mun1open')}><span>Q</span> 선호하는 음식 종류는?</a>
                    </div>
                    {unfoldDiv.unfold === 'mun1open' && (
                    <div class="answer">
                        <p class="choose_ans">
                            <input 
                            type="radio" 
                            name="answer1" 
                            id="answer1_1" 
                            mun="선호하는 음식 종류는?"
                            value="입맛은 흥선대원군, 한식!"
                            onClick={(e)=>selectAns(e,'선호하는 음식 종류는?')}/>
                            <label for="answer1_1">입맛은 흥선대원군, 한식!</label>
                        </p>
                        <p class="choose_ans">
                            <input 
                            type="radio" 
                            name="answer1" 
                            id="answer1_2" 
                            mun="선호하는 음식 종류는?"
                            value="단짠의 조화, 일식!"
                            onClick={(e)=>selectAns(e,'선호하는 음식 종류는?')}/>
                            <label for="answer1_2">단짠의 조화, 일식!</label>
                        </p>
                        <p class="choose_ans">
                            <input 
                            type="radio" 
                            name="answer1" 
                            id="answer1_3"
                            mun="선호하는 음식 종류는?"
                            value="고기 썰 줄 아는 양식"
                            onClick={(e)=>selectAns(e,'선호하는 음식 종류는?')}/>
                            <label for="answer1_3">고기 썰 줄 아는 양식</label>
                        </p>
                    </div>
                    )}
                    <div class="mun">
                        <a href="#mun2" onClick={() => OnToggle('mun2open')}><span>Q</span> 카페에서 즐기는 음료?</a>
                    </div>
                    {unfoldDiv.unfold === 'mun2open' && (
                    <div class="answer">
                        <p class="choose_ans">
                            <input 
                            type="radio" 
                            name="answer2" 
                            id="answer2_1"
                            mun='카페에서 즐기는 음료?'
                            value="얼어 죽어도 아이스 프라페"
                            onClick={(e)=>selectAns(e,'카페에서 즐기는 음료?')}/>
                            <label for="answer2_1">얼어 죽어도 아이스 프라페</label>
                        </p>
                        <p class="choose_ans">
                            <input 
                            type="radio" 
                            name="answer2" 
                            id="answer2_2"
                            mun='카페에서 즐기는 음료?'
                            value="커피종류만 마시는 커피매니아"
                            onClick={(e)=>selectAns(e,'카페에서 즐기는 음료?')}/>
                            <label for="answer2_2">커피종류만 마시는 커피매니아</label>
                        </p>
                        <p class="choose_ans">
                            <input 
                            type="radio" 
                            name="answer2" 
                            id="answer2_3"
                            mun='카페에서 즐기는 음료?'
                            value="입맛은 어르신, 차가 최고"
                            onClick={(e)=>selectAns(e,'카페에서 즐기는 음료?')}/>
                            <label for="answer2_3">입맛은 어르신, 차가 최고</label>
                        </p>
                    </div>
                    )}
                    <div class="mun">
                        <a href="#mun3" onClick={() => OnToggle('mun3open')}><span>Q</span> 놀이공원 가서 내가 처음으로 탈 것</a>
                    </div>
                    {unfoldDiv.unfold === 'mun3open' && (
                    <div class="answer">
                        <p class="choose_ans">
                            <input 
                            type="radio" 
                            name="answer3" 
                            id="answer3_1"
                            mun='놀이공원 가서 내가 처음으로 탈 것'
                            value="시작부터 세게 나간다. 롤러코스터"
                            onClick={(e)=>selectAns(e,'놀이공원 가서 내가 처음으로 탈 것')}/>
                            <label for="answer3_1">시작부터 세게 나간다. 롤러코스터</label>
                        </p>
                        <p class="choose_ans">
                            <input 
                            type="radio"
                            name="answer3" 
                            id="answer3_2"
                            mun='놀이공원 가서 내가 처음으로 탈 것'
                            value="놀이기구 no! 귀신의 집부터 간다"
                            onClick={(e)=>selectAns(e,'놀이공원 가서 내가 처음으로 탈 것')}/>
                            <label for="answer3_2">놀이기구 no! 귀신의 집부터 간다</label>
                        </p>
                        <p class="choose_ans">
                            <input 
                            type="radio" 
                            name="answer3" 
                            id="answer3_3"
                            mun='놀이공원 가서 내가 처음으로 탈 것'
                            value="회전목마로 워밍업"
                            onClick={(e)=>selectAns(e,'놀이공원 가서 내가 처음으로 탈 것')}/>
                            <label for="answer3_3">회전목마로 워밍업</label>
                        </p>
                    </div>
                    )}
                    <div class="mun">
                        <a href="#mun4"  onClick={() => OnToggle('mun4open')}><span>Q</span> 좋아하는 영화취향은?</a>
                    </div>
                    {unfoldDiv.unfold === 'mun4open' && (
                    <div class="answer">
                        <p class="choose_ans">
                            <input 
                            type="radio" 
                            name="answer4" 
                            id="answer4_1"
                            mun="좋아하는 영화취향은?"
                            value="고기 썰 줄 아는 양식"
                            onClick={(e)=>selectAns(e,'좋아하는 영화취향은?')}/>
                            <label for="answer4_1">긴장감 있는 반전 스릴러</label>
                        </p>
                        <p class="choose_ans">
                            <input 
                            type="radio" 
                            name="answer4" 
                            id="answer4_2"
                            mun="좋아하는 영화취향은?"
                            value="고기 썰 줄 아는 양식"
                            onClick={(e)=>selectAns(e,'좋아하는 영화취향은?')}/>
                            <label for="answer4_2">볼거리 많은 액션 판타지</label>
                        </p>
                        <p class="choose_ans">
                            <input 
                            type="radio" 
                            name="answer4" 
                            id="answer4_3"
                            mun="좋아하는 영화취향은?"
                            value="고기 썰 줄 아는 양식"
                            onClick={(e)=>selectAns(e,'좋아하는 영화취향은?')}/>
                            <label for="answer4_3">달달한 로맨틱 코메디</label>
                        </p>
                    </div>
                    )}
                    <div class="mun">
                        <a href="#mun5" onClick={() => OnToggle('mun5open')}><span>Q</span> 좋아하는 음악 스타일?</a>
                    </div>
                    {unfoldDiv.unfold === 'mun5open' && (
                    <div class="answer">
                        <p class="choose_ans">
                            <input 
                            type="radio"
                            name="answer5" 
                            id="answer5_1"
                            mun="좋아하는 음악 스타일?"
                            value="한국인은 k-pop"
                            onClick={(e)=>selectAns(e,'좋아하는 음악 스타일?')}/></p>
                            <label for="answer5_1">한국인은 k-pop</label>
                        <p class="choose_ans">
                            <input 
                            type="radio" 
                            name="answer5" 
                            id="answer5_2"
                            mun="요즘 대세 랩"
                            value="고기 썰 줄 아는 양식"
                            onClick={(e)=>selectAns(e,'좋아하는 음악 스타일?')}/></p>
                            <label for="answer5_2">요즘 대세 랩</label>
                        <p class="choose_ans">
                            <input 
                            type="radio" 
                            name="answer5" 
                            id="answer5_3"
                            mun="좋아하는 음악 스타일?"
                            value="팝송"
                            onClick={(e)=>selectAns(e,'좋아하는 음악 스타일?')}/>
                            <label for="answer5_3">팝송</label>
                        </p>
                    </div>
                    )}
                    <div class="mun">
                        <a href="#mun6" onClick={() => OnToggle('mun6open')}><span>Q</span> 나는 약속이 생기면</a>
                    </div>
                    {unfoldDiv.unfold === 'mun6open' && (
                    <div class="answer">
                        <p class="choose_ans">
                            <input 
                            type="radio" 
                            name="answer5" 
                            id="answer5_1"
                            mun="나는 약속이 생기면"
                            value="대충 약속시간 전후로 설렁설렁 나간다"
                            onClick={(e)=>selectAns(e,'나는 약속이 생기면')}/>
                            <label for="answer5_2">대충 약속시간 전후로 설렁설렁 나간다</label>
                        </p>
                        <p class="choose_ans">
                            <input 
                            type="radio" 
                            name="answer5" 
                            id="answer5_2"
                            mun="나는 약속이 생기면"
                            value="맨날 늦는다"
                            onClick={(e)=>selectAns(e,'나는 약속이 생기면')}/>
                            <label for="answer5_2">맨날 늦는다</label>
                        </p>
                        <p class="choose_ans">
                            <input 
                            type="radio" 
                            name="answer5" 
                            id="answer5_3"
                            mun="나는 약속이 생기면"
                            value="약속 시간 10분전에 미리 가 있는다"
                            onClick={(e)=>selectAns(e,'나는 약속이 생기면')}/>
                            <label for="answer5_3">약속 시간 10분전에 미리 가 있는다</label>
                        </p>
                    </div>
                    )}
                    <div class="mun">
                        <a href="#mun7" onClick={() => OnToggle('mun7open')}><span>Q</span> 내가 선택하는 라면은?</a>
                    </div>
                    {unfoldDiv.unfold === 'mun7open' && (
                    <div class="answer">
                        <p class="choose_ans">
                            <input 
                            type="radio" 
                            name="answer5" 
                            id="answer5_1"
                            mun="내가 선택하는 라면은?"
                            value="신라면"
                            onClick={(e)=>selectAns(e,'내가 선택하는 라면은?')}/>
                            <label for="answer5_1">신라면</label>
                        </p>
                        <p class="choose_ans">
                            <input 
                            type="radio" 
                            name="answer5" 
                            id="answer5_2"
                            mun="내가 선택하는 라면은?"
                            value="불닭볶음면"
                            onClick={(e)=>selectAns(e,'내가 선택하는 라면은?')}/>
                            <label for="answer5_2">불닭볶음면</label>
                        </p>
                        <p class="choose_ans">
                            <input 
                            type="radio"
                            name="answer5" 
                            id="answer5_3"
                            mun="내가 선택하는 라면은?"
                            value="튀김우동"
                            onClick={(e)=>selectAns(e,'내가 선택하는 라면은?')}/>
                            <label for="answer5_3">튀김우동</label>
                        </p>
                    </div>
                    )}
                    <div class="mun">
                        <a href="#mun8" onClick={() => OnToggle('mun8open')}><span>Q</span> 내가 샤워하는 시간은?</a>
                    </div>
                    {unfoldDiv.unfold === 'mun8open' && (
                    <div class="answer">
                        <p class="choose_ans">
                            <input 
                            type="radio" 
                            name="answer5" 
                            id="answer5_1"
                            mun="내가 샤워하는 시간은?"
                            value="아침"
                            onClick={(e)=>selectAns(e,'내가 샤워하는 시간은?')}/>
                            <label for="answer5_1">아침</label>
                        </p>
                        <p class="choose_ans">
                            <input 
                            type="radio" 
                            name="answer5" 
                            id="answer5_2"
                            mun="내가 샤워하는 시간은?"
                            value="점심"
                            onClick={(e)=>selectAns(e,'내가 샤워하는 시간은?')}/>
                            <label for="answer5_2">점심</label>
                        </p>
                        <p class="choose_ans">
                            <input 
                            type="radio" 
                            name="answer5" 
                            id="answer5_3"
                            mun="내가 샤워하는 시간은?"
                            value="저녁"
                            onClick={(e)=>selectAns(e,'내가 샤워하는 시간은?')}/>
                            <label for="answer5_3">저녁</label>
                        </p>
                    </div>
                    )}
                    <div class="mun">
                        <a href="#mun9" onClick={() => OnToggle('mun9open')}><span>Q</span> 내가 휴일을 즐기는 방법</a>
                    </div>
                    {unfoldDiv.unfold === 'mun9open' && (
                    <div class="answer">
                        <p class="choose_ans">
                            <input 
                            type="radio" 
                            name="answer5" 
                            id="answer5_1"
                            mun="내가 휴일을 즐기는 방법"
                            value="일단 친구들에게 전화해 나오라고 한다."
                            onClick={(e)=>selectAns(e,'내가 휴일을 즐기는 방법')}/>
                            <label for="answer5_1">일단 친구들에게 전화해 나오라고 한다.</label>
                        </p>
                        <p class="choose_ans">
                            <input 
                            type="radio" 
                            name="answer5" 
                            id="answer5_2"
                            mun="내가 휴일을 즐기는 방법"
                            value="영화 목록을 잔뜩 뽑아서 집에서 힐링타임 갖기"
                            onClick={(e)=>selectAns(e,'내가 휴일을 즐기는 방법')}/>
                            <label for="answer5_2">영화 목록을 잔뜩 뽑아서 집에서 힐링타임 갖기</label>
                        </p>
                        <p class="choose_ans">
                            <input 
                            type="radio" 
                            name="answer5" 
                            id="answer5_3"
                            mun="내가 휴일을 즐기는 방법"
                            value="봉사활동을 떠난다"
                            onClick={(e)=>selectAns(e,'내가 휴일을 즐기는 방법')}/>
                            <label for="answer5_3">봉사활동을 떠난다</label>
                        </p>
                    </div>
                    )}
                    <div class="mun">
                        <a href="#mun10" onClick={() => OnToggle('mun10open')}><span>Q</span> 계곡물이 흐르는 외나무 다리를 건널 때</a>
                    </div>
                    {unfoldDiv.unfold === 'mun10open' && (
                    <div class="answer">
                        <p class="choose_ans">
                            <input 
                            type="radio" 
                            name="answer5" 
                            id="answer5_1"
                            value="고기 썰 줄 아는 양식"
                            onClick={(e)=>selectAns(e,'선호하는 음식 종류는?')}/>
                            <label for="answer5_1">조심조심 천천히</label>
                        </p>
                        <p class="choose_ans">
                            <input 
                            type="radio" 
                            name="answer5" 
                            id="answer5_2"
                            value="고기 썰 줄 아는 양식"
                            onClick={(e)=>selectAns(e,'선호하는 음식 종류는?')}/>
                            <label for="answer5_2">빠지면 뭐 어때 성큼성큼 간다</label>
                        </p>
                        <p class="choose_ans">
                            <input 
                            type="radio" 
                            name="answer5" 
                            id="answer5_3"
                            value="고기 썰 줄 아는 양식"
                            onClick={(e)=>selectAns(e,'선호하는 음식 종류는?')}/>
                            <label for="answer5_3">기어(?)간다</label>
                        </p>
                    </div>
                    )}
                    <div class="mun">
                        <a href="#mun11" onClick={() => OnToggle('mun11open')}><span>Q</span> 내가 선택할 시리얼</a>
                    </div>
                    {unfoldDiv.unfold === 'mun11open' && (
                    <div class="answer">
                        <p class="choose_ans">
                            <input 
                            type="radio" 
                            name="answer5" 
                            id="answer5_1"
                            value="고기 썰 줄 아는 양식"
                            onClick={(e)=>selectAns(e,'선호하는 음식 종류는?')}/>
                            <label for="answer5_1">콘 프레이크</label>
                        </p>
                        <p class="choose_ans">
                            <input 
                            type="radio" 
                            name="answer5" 
                            id="answer5_2"
                            value="고기 썰 줄 아는 양식"
                            onClick={(e)=>selectAns(e,'선호하는 음식 종류는?')}/>
                            <label for="answer5_2">후르츠링</label>
                        </p>
                        <p class="choose_ans">
                            <input 
                            type="radio" 
                            name="answer5" 
                            id="answer5_3"
                            value="고기 썰 줄 아는 양식"
                            onClick={(e)=>selectAns(e,'선호하는 음식 종류는?')}/>
                            <label for="answer5_3">초코첵스</label>
                        </p>
                    </div>
                    )}
                    <div class="mun">
                        <a href="#mun12" onClick={() => OnToggle('mun12open')}><span>Q</span> 토론을 할 때 나는?</a>
                    </div>
                    {unfoldDiv.unfold === 'mun12open' && (
                    <div class="answer">
                        <p class="choose_ans">
                            <input 
                            type="radio" 
                            name="answer5" 
                            id="answer5_1"
                            value="고기 썰 줄 아는 양식"
                            onClick={(e)=>selectAns(e,'선호하는 음식 종류는?')}/>
                            <label for="answer5_1">토론을 즐기며 주도하는 역할</label>
                        </p>
                        <p class="choose_ans">
                            <input 
                            type="radio" 
                            name="answer5" 
                            id="answer5_2"
                            value="고기 썰 줄 아는 양식"
                            onClick={(e)=>selectAns(e,'선호하는 음식 종류는?')}/>
                            <label for="answer5_2">주로 다른 사람들이 하는 이야기를 듣는 역할</label>
                        </p>
                        <p class="choose_ans">
                            <input 
                            type="radio" 
                            name="answer5" 
                            id="answer5_3"
                            value="고기 썰 줄 아는 양식"
                            onClick={(e)=>selectAns(e,'선호하는 음식 종류는?')}/>
                            <label for="answer5_3">나는 토론이 싫다!</label>
                        </p>
                    </div>
                    )}
                    <div class="mun">
                        <a href="#mun13" onClick={() => OnToggle('mun13open')}><span>Q</span> 나는</a>
                    </div>
                    {unfoldDiv.unfold === 'mun13open' && (
                    <div class="answer">
                        <p class="choose_ans">
                            <input 
                            type="radio" 
                            name="answer5" 
                            id="answer5_1"
                            value="고기 썰 줄 아는 양식"
                            onClick={(e)=>selectAns(e,'선호하는 음식 종류는?')}/>
                            <label for="answer5_1">강아지파</label>
                        </p>
                        <p class="choose_ans">
                            <input 
                            type="radio"
                            name="answer5" 
                            id="answer5_2"
                            value="고기 썰 줄 아는 양식"
                            onClick={(e)=>selectAns(e,'선호하는 음식 종류는?')}/>
                            <label for="answer5_2">고양이파</label>
                        </p>
                        <p class="choose_ans">
                            <input 
                            type="radio" 
                            name="answer5" 
                            id="answer5_3"
                            value="고기 썰 줄 아는 양식"
                            onClick={(e)=>selectAns(e,'선호하는 음식 종류는?')}/>
                            <label for="answer5_3">동물은 싫다</label>
                        </p>
                    </div>
                    )}
                    <div class="mun">
                        <a href="#mun14" onClick={() => OnToggle('mun14open')}><span>Q</span> 화가 날때에는</a>
                    </div>
                    {unfoldDiv.unfold === 'mun14open' && (
                    <div class="answer">
                        <p class="choose_ans">
                            <input 
                            type="radio" 
                            name="answer5" 
                            id="answer5_1"
                            value="고기 썰 줄 아는 양식"
                            onClick={(e)=>selectAns(e,'선호하는 음식 종류는?')}/>
                            <label for="answer5_1">혼자만의 시간을 가지며 식힌다</label>
                        </p>
                        <p class="choose_ans">
                            <input 
                            type="radio" 
                            name="answer5" 
                            id="answer5_2"
                            value="고기 썰 줄 아는 양식"
                            onClick={(e)=>selectAns(e,'선호하는 음식 종류는?')}/>
                            <label for="answer5_2">친구한테 연락해 썰을 푼다</label>
                        </p>
                        <p class="choose_ans">
                            <input 
                            type="radio" 
                            name="answer5" 
                            id="answer5_3"
                            value="고기 썰 줄 아는 양식"
                            onClick={(e)=>selectAns(e,'선호하는 음식 종류는?')}/>
                            <label for="answer5_3">기억에서 잊고자 다른일을 한다</label>
                        </p>
                    </div>
                    )}
                    <div class="mun">
                        <a href="#mun15" onClick={() => OnToggle('mun15open')}><span>Q</span> 친구가 곤란한 부탁을 해왔을때</a>
                    </div>
                    {unfoldDiv.unfold === 'mun15open' && (
                    <div class="answer">
                        <p class="choose_ans">
                            <input 
                            type="radio" 
                            name="answer5" 
                            id="answer5_1"
                            value="고기 썰 줄 아는 양식"
                            onClick={(e)=>selectAns(e,'선호하는 음식 종류는?')}/>
                            <label for="answer5_1">내코가 석자다. 단번에 거절한다.</label>
                        </p>
                        <p class="choose_ans">
                            <input 
                            type="radio" 
                            name="answer5" 
                            id="answer5_2"
                            value="고기 썰 줄 아는 양식"
                            onClick={(e)=>selectAns(e,'선호하는 음식 종류는?')}/>
                            <label for="answer5_2">부탁을 거절하는게 더 곤란하다. 들어준다.</label>
                        </p>
                        <p class="choose_ans">
                            <input 
                            type="radio" 
                            name="answer5" 
                            id="answer5_3"
                            value="고기 썰 줄 아는 양식"
                            onClick={(e)=>selectAns(e,'선호하는 음식 종류는?')}/>
                            <label for="answer5_3">다른 이야기로 화제를 돌린다.</label>
                        </p>
                    </div>
                    )}
                    <div class="mun">
                        <a href="#mun16" onClick={() => OnToggle('mun16open')}><span>Q</span> 내가 선택할 시리얼</a>
                    </div>
                    {unfoldDiv.unfold === 'mun16open' && (
                    <div class="answer">
                        <p class="choose_ans">
                            <input 
                            type="radio" 
                            name="answer5" 
                            id="answer5_1"
                            value="고기 썰 줄 아는 양식"
                            onClick={(e)=>selectAns(e,'선호하는 음식 종류는?')}/>
                            <label for="answer5_1">콘 프레이크</label>
                        </p>
                        <p class="choose_ans">
                            <input 
                            type="radio" 
                            name="answer5" 
                            id="answer5_2"
                            value="고기 썰 줄 아는 양식"
                            onClick={(e)=>selectAns(e,'선호하는 음식 종류는?')}/>
                            <label for="answer5_2">후르츠링</label>
                        </p>
                        <p class="choose_ans">
                            <input 
                            type="radio" 
                            name="answer5" 
                            id="answer5_3"
                            value="고기 썰 줄 아는 양식"
                            onClick={(e)=>selectAns(e,'선호하는 음식 종류는?')}/>
                            <label for="answer5_3">초코첵스</label>
                        </p>
                    </div>
                    )}
                    <div class="mun">
                        <a href="#mun17" onClick={() => OnToggle('mun17open')}><span>Q</span> 내가 선택할 시리얼</a>
                    </div>
                    {unfoldDiv.unfold === 'mun17open' && (
                    <div class="answer">
                        <p class="choose_ans">
                            <input 
                            type="radio" 
                            name="answer5" 
                            id="answer5_1"
                            value="고기 썰 줄 아는 양식"
                            onClick={(e)=>selectAns(e,'선호하는 음식 종류는?')}/>
                            <label for="answer5_1">콘 프레이크</label>
                        </p>
                        <p class="choose_ans">
                            <input 
                            type="radio" 
                            name="answer5" 
                            id="answer5_2"
                            value="고기 썰 줄 아는 양식"
                            onClick={(e)=>selectAns(e,'선호하는 음식 종류는?')}/>
                            <label for="answer5_2">후르츠링</label>
                        </p>
                        <p class="choose_ans">
                            <input 
                            type="radio" 
                            name="answer5" 
                            id="answer5_3"
                            value="고기 썰 줄 아는 양식"
                            onClick={(e)=>selectAns(e,'선호하는 음식 종류는?')}/>
                            <label for="answer5_3">초코첵스</label>
                        </p>
                    </div>
                    )}
                    <div><input type="submit" value="등록"/></div>
                </section>
            </form>
        </>
    )
}

export default TelepathyMakeQuiz;