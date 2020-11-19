import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import '../../lib/styles/Telepathy_make_quiz.scss'

const QuizPieces = ({info, OnToggle, unfoldDiv, selectAns}) => {
    return(
        <>
            <div className="mun">
                <a href="#mun" onClick={() => OnToggle(info.open)}><span>Q</span> {info.mun}</a>
            </div>
            {unfoldDiv.unfold === info.open && (//토글함수. unfoldDiv.unfold가 info.open과 같으면 답 div가 열림. 답은 3개가 있다
                <div class="answer">
                    <p class="choose_ans">
                        <input 
                        type="radio" 
                        name= {info.name}
                        id={info.name + '_1'}
                        value={info.ans1}
                        onClick={(e)=>selectAns(e,info.mun)}
                        />
                        <label for={info.name + '_1'} >{info.ans1}</label>
                    </p>
                    <p class="choose_ans">
                        <input 
                        type="radio" 
                        name={info.name} 
                        id={info.name + '_2'} 
                        value={info.ans2}
                        onClick={(e)=>selectAns(e,info.mun)}
                        />
                        <label for={info.name + '_2'} >{info.ans2}</label>
                    </p>
                    <p class="choose_ans">
                        <input 
                        type="radio" 
                        name={info.name}
                        id={info.name + '_3'}
                        value={info.ans3}
                        onClick={(e)=>selectAns(e,info.mun)}
                        />
                        <label for={info.name + '_3'} >{info.ans3}</label>
                    </p>
                </div>
            )}
        </>
    )
}


const TelepathyMakeQuiz2 = ({ OnToggle, unfoldDiv, Qna, sort, handMun, handAns }) => {
    const [collectMun, setCollectMun] = useState([])
    const [collectAns, setCollectAns] = useState([])
    const [mun, setMun] = useState('')//내가 고른 문제
    const [ans, setAns] = useState('')//내가 고른 답

    const collectVal = () =>{
        setCollectMun(collectMun.concat(handMun));// 문제에다가 넘어온 이전 문제를 합쳐줌
        setCollectAns(collectAns.concat(handAns));// 답에다가 넘어온 이전 답을 합쳐줌
        console.log("현재까지의 문제: ",collectMun)
        console.log("현재까지의 답변: ",collectAns)
    }

    const selectAns = (e, question) => {//답 고르기
        setMun(question)
        setAns(e.target.value)
        // if(question){//얘는 그냥 문제랑 답이 잘 찍히는지 보기 위해 쓴것.
        //      console.log(mun)
        //      console.log(ans)
        // }
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
                    <div class="num3" style={{borderWidth:'4px', borderColor:'#ff00ca'}}>3</div>
                </div>
            </section>
            <form>
                <section id="part2">
                    <div class="choose_mun">{sort}</div>
                    {Qna.map((a,index) => (// sort값에 대한 질문들. QuizPieces는 위에 따로 빼놨음
                        <QuizPieces 
                            info={a} 
                            OnToggle={OnToggle} 
                            key={index} 
                            unfoldDiv={unfoldDiv}
                            selectAns={selectAns}
                        />
                    ))}
                    <div><Link to={{ pathname:'/Telepathy_make_quiz_fin', mun:mun, ans:ans }} onClick={collectVal}></Link>등록</div>
                </section>
            </form>
        </>
    )
}

export default withRouter(TelepathyMakeQuiz2);