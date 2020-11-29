import React, {useEffect, useState} from 'react';
import '../../lib/styles/profile.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Profile = ({user,form,onChange,loading,profileSubmit,error, profile,personal}) =>{

    const {brief_intro,address,fav_food,fav_movie,fav_song,user_gender,school} = user;


    const elements=[];
    const [profile_pic, setProfile_pic] = useState(profile);
    const [bi, setBi] = useState(brief_intro);
    const [ad, setAd] =useState(address);
    const [ff, setFf] = useState(fav_food);
    const [fm, setFm] = useState(fav_movie);
    const [fs, setFs] = useState(fav_song);
    const [sc,setSc] = useState(school);
    const [personality, setPersonality]= useState(personal);
    const onToggle = (e) =>{
        if(e.target.checked ===true){
            e.target.removeAttribute('checked',false);
        }else if(e.target.checked ===false){
            e.target.setAttribute('checked',true);
        }
        if(e.target.checked){
            var i='';
            for(var k=0; k < personality.length; k++){
                i += personality[k] +',';
            }
            i += e.target.value;
            setPersonality(i.split(','));
            console.log("Dfdasfdsfsad"+ setPersonality)
        }else{
            setPersonality(personality.filter(personality=>personality!=e.target.value))
        }

    }
    // const [pic, setPic]= useState([profile_pic])
    // const spChange = e =>{
    //     var i='';
    //     for(var k=0; k < personality.length; k++){
    //         i += personality[k] +',';
    //     }
    //     i += e.target.value;
    //     setPersonality(i.split(','));
    //     console.log("Dfdasfdsfsad"+ setPersonality)
    // }


    
    const fileSelectHandler = (event) =>{
        imgbbUploader(event.target.files[0]).then(resp => {
        console.log(resp.data.data.url);
        var i='';
        for(var k = 0; k < profile_pic.length; k++){
            i += profile_pic[k] + ',';
        }
        i += resp.data.data.url;
        setProfile_pic(i.split(','));
    })}

    var picarr;
    useEffect(()=> {
        picarr = user.profile_pic;
        for(let i = 0; i< picarr.length; i++){
            elements.push(<img src={picarr[i]}/>)
        } 
    },[profile_pic, bi, sc, ad, personality, fs, fm, ff, picarr])


    const imgbbUploader = ( img ) => {
        let body = new FormData()
        body.set('key', 'fc932c3718be04e605f6d38678fc9533')
        body.append('image', img)
    
        return axios({
            url: 'https://api.imgbb.com/1/upload',
            method: 'post',
            timeout: 0,
            processData: false,
            mimeType: "multipart/form-data",
            contentType: false,
            data: body
        })
    }
    const biChange = e => {
        setBi(e.target.value);
    }
    const adChange = e =>{
        setAd(e.target.value);
    }
    const ffChange = e =>{
        setFf(e.target.value);
    }
    const fmChange = e =>{
        setFm(e.target.value);
    }
    const fsChange = e =>{
        setFs(e.target.value);
    }
    const scChange = e =>{
        setSc(e.target.value);
    }

    function onRemove0(){
        picarr.splice(0,1);
    }
    function onRemove1(){
        picarr.splice(1,1);
    }
    function onRemove2(){
        picarr.splice3(2,1);
    }
    function onRemove3(){
        picarr.splice(3,1);
    }
    function onRemove4(){
        picarr.splice(4,1);
    }
    function onRemove5(){
        picarr.splice(5,1);
    }
    function onRemove6(){
        picarr.splice(6,1);
    }
    function onRemove7(){
        picarr.splice(7,1);
    }
    function onRemove8(){
        picarr.splice(8,1);
    }

    // const clickBack = () => {
    //     window.history.back();
    // }
    // const onToggle= () => {
    //     if(e.target.value==personality)
    // }

    if(user){
        picarr = user.profile_pic;
        for(let i = 0; i< picarr.length; i++){
            elements.push(<img src={picarr[i]}/>)
        } 
    return(
        <>
        {user&&(
            <form method="patch" onSubmit={profileSubmit}>
            <div className="photo_list">
                <div className="overflow_profile">
                    <div>
                        <ul className="photo_group">
                            <li className="photo_items">
                                <div className="photo_profile">{elements[0]}</div>
                                <div className="del_btn">
                                    <button onClick={onRemove0}><i className="fas fa-trash-alt"></i></button>
                                </div>
                            </li>
                            <li className="photo_items">
                                <div className="photo_profile">{elements[1]}</div>
                                <div className="del_btn">
                                    <button onClick={onRemove1}><i className="fas fa-trash-alt"></i></button>
                                </div>
                            </li>
                            <li className="photo_items">
                                <div className="photo_profile">{elements[2]}</div>
                                <div className="del_btn">
                                    <button onClick={onRemove2}><i className="fas fa-trash-alt"></i></button>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="photo_group">
                            <li className="photo_items">
                                <div className="photo_profile">{elements[3]}</div>
                                <div className="del_btn">
                                    <button onClick={onRemove3}><i className="fas fa-trash-alt"></i></button>
                                </div>
                            </li>
                            <li className="photo_items">
                                <div className="photo_profile">{elements[4]}</div>
                                <div className="del_btn">
                                    <button onClick={onRemove4}><i className="fas fa-trash-alt"></i></button>
                                </div>
                            </li>
                            <li className="photo_items">
                                <div className="photo_profile">{elements[5]}</div>
                                <div className="del_btn">
                                    <button onClick={onRemove5}><i className="fas fa-trash-alt"></i></button>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="photo_group">
                            <li className="photo_items">
                                <div className="photo_profile">{elements[6]}</div>
                                <div className="del_btn">
                                    <button onClick={onRemove6}><i className="fas fa-trash-alt"></i></button>
                                </div>
                            </li>
                            <li className="photo_items">
                                <div className="photo_profile">{elements[7]}</div>
                                <div className="del_btn">
                                    <button onClick={onRemove7}><i className="fas fa-trash-alt"></i></button>
                                </div>
                            </li>
                            <li className="photo_items">
                                <div className="photo_profile">{elements[8]}</div>
                                <div className="del_btn">
                                    <button onClick={onRemove8}><i className="fas fa-trash-alt"></i></button>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="add_photo_btn">
                        <p>사진을 추가해 프로필을 변경해보세요</p>
                        <p className="picName"><span>프로필 사진</span></p>
                        <input type="file" 
                        name="profile_pic"
                        onChange={fileSelectHandler}
                        id="filebtn2"
                        />
                    </div>
                    <input type="hidden" value={profile_pic} name="profile_array"/>
                    <div className="self_intro" id="intro">
                        <p>한줄 소개</p>
                        <p className="input_type_text"><input type="text" name="brief_intro" value={bi} onChange={biChange} /></p>
                    </div>
                    <div className="self_intro" id="live">
                        <p>거주지</p> 
                        <p className="input_type_text"><input type="text"  name="address" value={ad} onChange={adChange}/></p>
                    </div>
                {user.user_gender=="female"&&(
                    <div className="self_intro" id="gender">
                        <p>성별</p> 
                        <p className="input_type_radio">

                            <input type="radio" name="user_gender" id="boy" />
                            <label for="boy">남</label>
                            <input type="radio" name="user_gender" id="girl"checked/>
                            <label for="girl">여</label>

                        </p>
                    </div>
                        )}
                {user_gender=="male"&&(
                    <div className="self_intro" id="gender">
                        <p>성별</p> 
                        <p className="input_type_radio">

                            <input type="radio" name="user_gender" id="boy" checked/>
                            <label for="boy">남</label>
                            <input type="radio" name="user_gender" id="girl"/>
                            <label for="girl">여</label>

                        </p>
                    </div>
                        )}                        
                    <div className="self_intro" id="uni">
                        <p>출신 학교</p> 
                        <p className="input_type_text"><input type="text" value={sc} onChange={scChange} name="school"/></p>
                    </div>
                    <div>
                        <p className="veryStressful">나의 이상형</p>
                        <section className="self_intro_check" id="self_intro_check_id">
                            <p className="selects">
                                <input type="checkbox" name="personality" id="cute"  value="cute" onClick={(e)=>onToggle(e)}/><label for="cute" >귀여운</label>
                                <input type="checkbox" name="personality" id="mature" value="mature" onClick={(e)=>onToggle(e)} /><label for="mature">어른스러운</label>
                                <input type="checkbox" name="personality" id="sexy" value="sexy" onClick={(e)=>onToggle(e)} /><label for="sexy">섹시한</label>
                                <input type="checkbox" name="personality" id="manly"  value="manly" onClick={(e)=>onToggle(e)} /><label for="manly">남자다운</label>
                            </p>
                            <p className="selects">
                                <input type="checkbox" name="personality" id="natural"  value="natural" onClick={(e)=>onToggle(e)} /><label for="natural">청순한</label>
                                <input type="checkbox" name="personality" id="curious"  value="curious"  onClick={(e)=>onToggle(e)}/><label for="curious">호기심많은</label>
                                <input type="checkbox" name="personality" id="serious"  value="serious"  onClick={(e)=>onToggle(e)}/><label for="serious">진중한</label>
                                <input type="checkbox" name="personality" id="agressive"  value="agressive"  onClick={(e)=>onToggle(e)}/><label for="agressive">과감한</label>
                            </p>
                            <p className="selects">
                                <input type="checkbox" name="personality" id="intelli"  value="intelli"  onClick={(e)=>onToggle(e)}/><label for="intelli">지적인</label>
                                <input type="checkbox" name="personality" id="tsndere"  value="tsndere"  onClick={(e)=>onToggle(e)}/><label for="tsndere">츤데레</label>
                                <input type="checkbox" name="personality" id="honesty"  value="honesty"  onClick={(e)=>onToggle(e)}/><label for="honesty">솔직한</label>
                                <input type="checkbox" name="personality" id="growth"  value="growth" onClick={(e)=>onToggle(e)}/><label for="growth">성숙한</label>
                            </p>
                            <p className="selects">
                                <input type="checkbox" name="personality" id="cool"  value="cool"  onClick={(e)=>onToggle(e)}/><label for="cool">쿨한</label>
                                <input type="checkbox" name="personality" id="humorous"  value="humorous"  onClick={(e)=>onToggle(e)}/><label for="humorous">유머있는</label>
                                <input type="checkbox" name="personality" id="careful"  value="careful"  onClick={(e)=>onToggle(e)}/><label for="careful">배려심많은</label>
                                <input type="checkbox" name="personality" id="timid"  value="timid" onClick={(e)=>onToggle(e)}/><label for="timid">소심한</label>
                            </p>
                            <p className="selects">
                                <input type="checkbox" name="personality" id="cynical"  value="cynical"  onClick={(e)=>onToggle(e)}/><label for="cynical">시니컬한</label>
                                <input type="checkbox" name="personality" id="tall"  value="tall" onClick={(e)=>onToggle(e)}/><label for="tall">키가큰</label>
                                <input type="checkbox" name="personality" id="small"  value="small"  onClick={(e)=>onToggle(e)}/><label for="small">아담한</label>
                                <input type="checkbox" name="personality" id="outgoing"  value="outgoing"  onClick={(e)=>onToggle(e)}/><label for="outgoing">쾌활한</label>
                            </p>
                            <p className="selects">
                                <input type="checkbox" className="styles" value="어리버리" id="clumsy" value="clumsy"  onClick={(e)=>onToggle(e)}/><label for="clumsy">어리버리</label>
                                <input type="checkbox" className="styles" value="감성적" id="emotional" value="emotional" onClick={(e)=>onToggle(e)}/><label for="emotional">감성적</label>
                                <input type="checkbox" className="styles" value="책임감있는" id="leadership" value="leadership"  onClick={(e)=>onToggle(e)} /><label for="leadership">책임감있는</label>
                                <input type="checkbox" className="styles" value="통통튀는" id="bubbly" value="bubbly" onClick={(e)=>onToggle(e)}  /><label for="bubbly">통통튀는</label>
                            </p>
                            <p className="selects">
                                <input type="checkbox" className="styles" value="드립장인" id="funny" value="funny"  onClick={(e)=>onToggle(e)} /><label for="funny">드립장인</label>
                                <input type="checkbox" className="styles" value="깔끔한" id="tidy" value="tidy" onClick={(e)=>onToggle(e)} /><label for="tidy">깔끔한</label>
                                <input type="checkbox" className="styles" value="힘이센" id="strong" value="strong"onClick={(e)=>onToggle(e)}/><label for="strong">힘이센</label>
                                <input type="checkbox" className="styles" value="인정많은" id="empathy"value="empathy" onClick={(e)=>onToggle(e)}/><label for="empathy">인정많은</label>
                            </p>
                            <p className="selects">
                                <input type="checkbox" className="styles" value="뚝딱이" id="ddukddak" value="ddukddak"  onClick={(e)=>onToggle(e)} /><label for="ddukddak">뚝딱이</label>
                                <input type="checkbox" className="styles" value="사회성좋은" id="social" value="social"  onClick={(e)=>onToggle(e)}/><label for="social">사회성좋은</label>
                                <input type="checkbox" className="styles" value="믿음직한" id="trustworthy" value="trustworthy"  onClick={(e)=>onToggle(e)} /><label for="trustworthy">믿음직한</label>
                                <input type="checkbox" className="styles" value="미식가" id="foodlover" value="foodlover" onClick={(e)=>onToggle(e)} /><label for="foodlover">미식가</label> 
                            </p>
                            <p className="selects">
                                <input type="checkbox" className="styles" value="활동적인" id="active"  value="active" onClick={(e)=>onToggle(e)} /><label for="active">활동적인</label>
                                <input type="checkbox" className="styles" value="고양이파" id="catperson" value="catperson"  onClick={(e)=>onToggle(e)}/><label for="catperson">고양이파</label>
                                <input type="checkbox" className="styles" value="강아지파" id="dogperson" value="dogperson"   onClick={(e)=>onToggle(e)}/><label for="dogperson">강아지파</label>
                                <input type="checkbox" className="styles" value="부먹" id="pour" value="pour"   onClick={(e)=>onToggle(e)}/><label for="pour">부먹</label>   
                            </p>
                        <p className="selects">
                            <input type="checkbox" className="styles" value="찍먹" id="dip" value="dip"  onClick={(e)=>onToggle(e)} /><label for="dip">찍먹</label>
                            <input type="checkbox" className="styles" value="바깥순이" id="outgirl" value="outgirl"  onClick={(e)=>onToggle(e)} /><label for="outgirl">바깥순이</label>
                            <input type="checkbox" className="styles" value="바깥돌이" id="outboy"  value="outboy"  onClick={(e)=>onToggle(e)}/><label for="outboy">바깥돌이</label>
                            <input type="checkbox" className="styles" value="집순이" id="homebodygirl" value="homebodygirl"  onClick={(e)=>onToggle(e)}/><label for="homebodygirl">집순이</label>   
                        </p>
                        <p className="selects">
                            <input type="checkbox" className="styles" value="집돌이" id="hombodyboy" value="hombodyboy" onClick={(e)=>onToggle(e)} /><label for="hombodyboy">집돌이</label>
                            <input type="checkbox" className="styles" value="친근한" id="friendly" value="friendly" onClick={(e)=>onToggle(e)} /><label for="friendly">친근한</label>
                            <input type="checkbox" className="styles" value="독립적인" id="independency" value="independency"onClick={(e)=>onToggle(e)} /><label for="independency">독립적인</label>
                            <input type="checkbox" className="styles" value="무던한" id="dull" value="dull"  onClick={(e)=>onToggle(e)}/><label for="dull">무던한</label>    
                        </p>
                        <p className="selects">
                            <input type="checkbox" className="styles" value="멘탈왕" id="mentalking"  value="mentalking" onClick={(e)=>onToggle(e)}/><label for="mentalking">멘탈왕</label>
                            <input type="checkbox" className="styles" value="양심적인" id="conscience" value="conscience" onClick={(e)=>onToggle(e)} /><label for="conscience">양심적인</label>
                            <input type="checkbox" className="styles" value="계획적인" id="organized" value="organized"  onClick={(e)=>onToggle(e)}/><label for="organized">계획적인</label>   
                        </p>
                        </section>
                    </div>
                    <div className="self_intro" id="best_song">
                        <p>SPOTIFY 베스트송</p> 
                        <p className="input_type_text"><input type="text" value={fs} onChange={fsChange} name="fav_song"/></p>
                    </div>
                    <div className="self_intro" id="fav_movie">
                        <p>좋아하는 영화장르</p> 
                        <p className="input_type_text"><input type="text" value={fm} onChange={fmChange}  name="fav_movie"/></p>
                    </div>
                    <div className="self_intro" id="food">
                        <p>음식취향</p> 
                        <p className="input_type_text"><input type="text" value={ff} onChange={ffChange}  name="fav_food"/></p>
                    </div>

                    <input type="hidden" value={personality} name="personality_arry"/>
                    <div className="submit_btn"><input type="submit" value="수정하기"/></div>
                </div>
                </div>
            </form>
            )}
        </>
            )
    }else{
        return(
            <div>망함</div>
        )
    }
        
}
        
export default Profile;