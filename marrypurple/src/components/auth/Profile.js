<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> ed61bf815cc78cfe92d3a2be8cd8ef64f918a0a7
import React, {useEffect, useState} from 'react';
import '../../lib/styles/profile.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
<<<<<<< HEAD
=======
=======
// import React, {useState} from 'react';
// import '../../lib/styles/profile.scss';
>>>>>>> 2cf6053e159fdbe7f9dc9fd45da53964834f02f0
>>>>>>> ed61bf815cc78cfe92d3a2be8cd8ef64f918a0a7

const Profile = ({user,form,onChange,loading,profileSubmit,error, profile}) =>{
 
    const {brief_intro,address,fav_food,fav_movie,fav_song,user_gender,personality,school} = user;
    const elements=[];

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> ed61bf815cc78cfe92d3a2be8cd8ef64f918a0a7
    const [profile_pic, setProfile_pic] = useState(profile);
    
    const [bi, setBi] = useState(brief_intro);
    const [ad, setAd] =useState(address);
    const [ff, setFf] = useState(fav_food);
    const [fm, setFm] = useState(fav_movie);
    const [fs, setFs] = useState(fav_song);
    const [sc,setSc] = useState(school);
    // const [per, setPer]= useState([personality])
    // const [pic, setPic]= useState([profile_pic])
    
    
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

    useEffect(()=> {
        console.log(profile_pic);
    },[profile_pic, bi, sc, ad, personality, fs, fm, ff])

    const picarr = profile_pic;
    for(let i = 0; i<picarr.length; i++){
        elements.push(<img src={picarr[i]}/>)
    }
    // const elements2=[];
    // const personarr=[personality]
    // for(let i=0; i<personarr.length; i++){
    //     if(personarr[i]==valueByName){
    //         elements2.push(<checked/>)
    //     }
    // 
    // }
    
    
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

    const clickBack = () => {
        window.history.back();
    }
    // const onToggle= () => {
    //     if(e.target.value==personality)
    // }
    if(user){
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
                                    <button><i className="fas fa-trash-alt"></i></button>
                                </div>
                            </li>
                            <li className="photo_items">
                                <div className="photo_profile">{elements[1]}</div>
                                <div className="del_btn">
                                    <button><i className="fas fa-trash-alt"></i></button>
                                </div>
                            </li>
                            <li className="photo_items">
                                <div className="photo_profile">{elements[2]}</div>
                                <div className="del_btn">
                                    <button><i className="fas fa-trash-alt"></i></button>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="photo_group">
                            <li className="photo_items">
                                <div className="photo_profile">{elements[3]}</div>
                                <div className="del_btn">
                                    <button><i className="fas fa-trash-alt"></i></button>
                                </div>
                            </li>
                            <li className="photo_items">
                                <div className="photo_profile">{elements[4]}</div>
                                <div className="del_btn">
                                    <button><i className="fas fa-trash-alt"></i></button>
                                </div>
                            </li>
                            <li className="photo_items">
                                <div className="photo_profile">{elements[5]}</div>
                                <div className="del_btn">
                                    <button><i className="fas fa-trash-alt"></i></button>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="photo_group">
                            <li className="photo_items">
                                <div className="photo_profile">{elements[6]}</div>
                                <div className="del_btn">
                                    <button><i className="fas fa-trash-alt"></i></button>
                                </div>
                            </li>
                            <li className="photo_items">
                                <div className="photo_profile">{elements[7]}</div>
                                <div className="del_btn">
                                    <button><i className="fas fa-trash-alt"></i></button>
                                </div>
                            </li>
                            <li className="photo_items">
                                <div className="photo_profile">{elements[8]}</div>
                                <div className="del_btn">
                                    <button><i className="fas fa-trash-alt"></i></button>
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
=======
// const Profile = ({user,form,onChange,loading,profileUpdate}) =>{
//     const {profile_pic,brief_intro,address,fav_food,fav_movie,fav_song,user_gender,school} = user;
//     const [bi, setBi] = useState(brief_intro,address,fav_food,fav_movie,fav_song,school);
//     const biChange = e => {
//         setBi(e.target.value);
//         console.log(bi)
//     } 
//     const clickBack = () => {
//         window.history.back();
//     }
//     return(
//         <>
//         {user&&(
//             <form method="patch" onSubmit={commentSubmit}>
//             <div className="photo_list">
//                 <div className="overflow_profile">
//                     <div>
//                         <ul className="photo_group">
//                             <li className="photo_items">
//                                 <div className="photo_profile"><img src={profile_pic}/></div>
//                                 <div className="del_btn">
//                                     <button><i className="fas fa-trash-alt"></i></button>
//                                 </div>
//                             </li>
//                             <li className="photo_items">
//                                 <div className="photo_profile"></div>
//                                 <div className="del_btn">
//                                     <button><i className="fas fa-trash-alt"></i></button>
//                                 </div>
//                             </li>
//                             <li className="photo_items">
//                                 <div className="photo_profile"></div>
//                                 <div className="del_btn">
//                                     <button><i className="fas fa-trash-alt"></i></button>
//                                 </div>
//                             </li>
//                         </ul>
//                     </div>
//                     <div>
//                         <ul className="photo_group">
//                             <li className="photo_items">
//                                 <div className="photo_profile"></div>
//                                 <div className="del_btn">
//                                     <button><i className="fas fa-trash-alt"></i></button>
//                                 </div>
//                             </li>
//                             <li className="photo_items">
//                                 <div className="photo_profile"></div>
//                                 <div className="del_btn">
//                                     <button><i className="fas fa-trash-alt"></i></button>
//                                 </div>
//                             </li>
//                             <li className="photo_items">
//                                 <div className="photo_profile"></div>
//                                 <div className="del_btn">
//                                     <button><i className="fas fa-trash-alt"></i></button>
//                                 </div>
//                             </li>
//                         </ul>
//                     </div>
//                     <div>
//                         <ul className="photo_group">
//                             <li className="photo_items">
//                                 <div className="photo_profile"></div>
//                                 <div className="del_btn">
//                                     <button><i className="fas fa-trash-alt"></i></button>
//                                 </div>
//                             </li>
//                             <li className="photo_items">
//                                 <div className="photo_profile"></div>
//                                 <div className="del_btn">
//                                     <button><i className="fas fa-trash-alt"></i></button>
//                                 </div>
//                             </li>
//                             <li className="photo_items">
//                                 <div className="photo_profile"></div>
//                                 <div className="del_btn">
//                                     <button><i className="fas fa-trash-alt"></i></button>
//                                 </div>
//                             </li>
//                         </ul>
//                     </div>
//                     <div className="add_photo_btn">
//                         <p>사진을 추가해 프로필을 변경해보세요</p>
//                         <button>사진 추가하기</button>
//                     </div>
//                     <div className="self_intro" id="intro">
//                         <p>한줄 소개</p>
//                         <p className="input_type_text"><input type="text" name="brief_intro" value={bi} onChange={biChange} /></p>
//                     </div>
//                     <div className="self_intro" id="live">
//                         <p>거주지</p> 
//                         <p className="input_type_text"><input type="text"  name="address" value={address}/></p>
//                     </div>
//                 {user.user_gender=="female"&&(
//                     <div className="self_intro" id="gender">
//                         <p>성별</p> 
//                         <p className="input_type_radio">
>>>>>>> 2cf6053e159fdbe7f9dc9fd45da53964834f02f0

//                             <input type="radio" name="user_gender" id="boy" />
//                             <label for="boy">남</label>
//                             <input type="radio" name="user_gender" id="girl"checked/>
//                             <label for="girl">여</label>

//                         </p>
//                     </div>
//                         )}
//                 {user_gender=="male"&&(
//                     <div className="self_intro" id="gender">
//                         <p>성별</p> 
//                         <p className="input_type_radio">

//                             <input type="radio" name="user_gender" id="boy" checked/>
//                             <label for="boy">남</label>
//                             <input type="radio" name="user_gender" id="girl"/>
//                             <label for="girl">여</label>

<<<<<<< HEAD
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
                                <input type="checkbox" name="personality" id="cute" value="cute" onChange={onChange}/><label for="cute" >귀여운</label>
                                <input type="checkbox" name="personality" id="mature" value="mature"/><label for="mature">어른스러운</label>
                                <input type="checkbox" name="personality" id="sexy" value="sexy"/><label for="sexy">섹시한</label>
                                <input type="checkbox" name="personality" id="manly"  value="manly"/><label for="manly">남자다운</label>
                            </p>
                            <p className="selects">
                                <input type="checkbox" name="personality" id="natural"  value="natural"/><label for="natural">청순한</label>
                                <input type="checkbox" name="personality" id="curious"  value="curious"/><label for="curious">호기심많은</label>
                                <input type="checkbox" name="personality" id="serious"  value="serious"/><label for="serious">진중한</label>
                                <input type="checkbox" name="personality" id="agressive"  value="agressive"/><label for="agressive">과감한</label>
<<<<<<< HEAD
                            </p>
                            <p className="selects">
                                <input type="checkbox" name="personality" id="intelli"  value="intelli"/><label for="intelli">지적인</label>
                                <input type="checkbox" name="personality" id="tsndere"  value="tsndere"/><label for="tsndere">츤데레</label>
                                <input type="checkbox" name="personality" id="honesty"  value="honesty"/><label for="honesty">솔직한</label>
                                <input type="checkbox" name="personality" id="growth"  value="growth"/><label for="growth">성숙한</label>
                            </p>
                            <p className="selects">
                                <input type="checkbox" name="personality" id="cool"  value="cool"/><label for="cool">쿨한</label>
                                <input type="checkbox" name="personality" id="humorous"  value="humorous"/><label for="humorous">유머있는</label>
                                <input type="checkbox" name="personality" id="careful"  value="careful"/><label for="careful">배려심많은</label>
                                <input type="checkbox" name="personality" id="timid"  value="timid"/><label for="timid">소심한</label>
                            </p>
                            <p className="selects">
                                <input type="checkbox" name="personality" id="cynical"  value="cynical"/><label for="cynical">시니컬한</label>
                                <input type="checkbox" name="personality" id="tall"  value="tall"/><label for="tall">키가큰</label>
                                <input type="checkbox" name="personality" id="small"  value="small"/><label for="small">아담한</label>
                                <input type="checkbox" name="personality" id="outgoing"  value="outgoing"/><label for="outgoing">쾌활한</label>
                            </p>
                            <p className="selects">
                                <input type="checkbox" className="styles" value="어리버리" id="clumsy" value="clumsy" /><label for="clumsy">어리버리</label>
                                <input type="checkbox" className="styles" value="감성적" id="emotional" value="emotional" /><label for="emotional">감성적</label>
                                <input type="checkbox" className="styles" value="책임감있는" id="leadership" value="leadership"  /><label for="leadership">책임감있는</label>
                                <input type="checkbox" className="styles" value="통통튀는" id="bubbly" value="bubbly"  /><label for="bubbly">통통튀는</label>
                            </p>
                            <p className="selects">
                                <input type="checkbox" className="styles" value="드립장인" id="funny" value="funny"  /><label for="funny">드립장인</label>
                                <input type="checkbox" className="styles" value="깔끔한" id="tidy" value="tidy"  /><label for="tidy">깔끔한</label>
                                <input type="checkbox" className="styles" value="힘이센" id="strong" value="strong" /><label for="strong">힘이센</label>
                                <input type="checkbox" className="styles" value="인정많은" id="empathy"value="empathy"  /><label for="empathy">인정많은</label>
                            </p>
                            <p className="selects">
                                <input type="checkbox" className="styles" value="뚝딱이" id="ddukddak" value="ddukddak"  /><label for="ddukddak">뚝딱이</label>
                                <input type="checkbox" className="styles" value="사회성좋은" id="social" value="social" /><label for="social">사회성좋은</label>
                                <input type="checkbox" className="styles" value="믿음직한" id="trustworthy" value="trustworthy"  /><label for="trustworthy">믿음직한</label>
                                <input type="checkbox" className="styles" value="미식가" id="foodlover" value="foodlover" /><label for="foodlover">미식가</label> 
                            </p>
                            <p className="selects">
=======
                            </p>
                            <p className="selects">
                                <input type="checkbox" name="personality" id="intelli"  value="intelli"/><label for="intelli">지적인</label>
                                <input type="checkbox" name="personality" id="tsndere"  value="tsndere"/><label for="tsndere">츤데레</label>
                                <input type="checkbox" name="personality" id="honesty"  value="honesty"/><label for="honesty">솔직한</label>
                                <input type="checkbox" name="personality" id="growth"  value="growth"/><label for="growth">성숙한</label>
                            </p>
                            <p className="selects">
                                <input type="checkbox" name="personality" id="cool"  value="cool"/><label for="cool">쿨한</label>
                                <input type="checkbox" name="personality" id="humorous"  value="humorous"/><label for="humorous">유머있는</label>
                                <input type="checkbox" name="personality" id="careful"  value="careful"/><label for="careful">배려심많은</label>
                                <input type="checkbox" name="personality" id="timid"  value="timid"/><label for="timid">소심한</label>
                            </p>
                            <p className="selects">
                                <input type="checkbox" name="personality" id="cynical"  value="cynical"/><label for="cynical">시니컬한</label>
                                <input type="checkbox" name="personality" id="tall"  value="tall"/><label for="tall">키가큰</label>
                                <input type="checkbox" name="personality" id="small"  value="small"/><label for="small">아담한</label>
                                <input type="checkbox" name="personality" id="outgoing"  value="outgoing"/><label for="outgoing">쾌활한</label>
                            </p>
                            <p className="selects">
                                <input type="checkbox" className="styles" value="어리버리" id="clumsy" value="clumsy" /><label for="clumsy">어리버리</label>
                                <input type="checkbox" className="styles" value="감성적" id="emotional" value="emotional" /><label for="emotional">감성적</label>
                                <input type="checkbox" className="styles" value="책임감있는" id="leadership" value="leadership"  /><label for="leadership">책임감있는</label>
                                <input type="checkbox" className="styles" value="통통튀는" id="bubbly" value="bubbly"  /><label for="bubbly">통통튀는</label>
                            </p>
                            <p className="selects">
                                <input type="checkbox" className="styles" value="드립장인" id="funny" value="funny"  /><label for="funny">드립장인</label>
                                <input type="checkbox" className="styles" value="깔끔한" id="tidy" value="tidy"  /><label for="tidy">깔끔한</label>
                                <input type="checkbox" className="styles" value="힘이센" id="strong" value="strong" /><label for="strong">힘이센</label>
                                <input type="checkbox" className="styles" value="인정많은" id="empathy"value="empathy"  /><label for="empathy">인정많은</label>
                            </p>
                            <p className="selects">
                                <input type="checkbox" className="styles" value="뚝딱이" id="ddukddak" value="ddukddak"  /><label for="ddukddak">뚝딱이</label>
                                <input type="checkbox" className="styles" value="사회성좋은" id="social" value="social" /><label for="social">사회성좋은</label>
                                <input type="checkbox" className="styles" value="믿음직한" id="trustworthy" value="trustworthy"  /><label for="trustworthy">믿음직한</label>
                                <input type="checkbox" className="styles" value="미식가" id="foodlover" value="foodlover" /><label for="foodlover">미식가</label> 
                            </p>
                            <p className="selects">
>>>>>>> ed61bf815cc78cfe92d3a2be8cd8ef64f918a0a7
                                <input type="checkbox" className="styles" value="활동적인" id="active"  value="active" /><label for="active">활동적인</label>
                                <input type="checkbox" className="styles" value="고양이파" id="catperson" value="catperson" /><label for="catperson">고양이파</label>
                                <input type="checkbox" className="styles" value="강아지파" id="dogperson" value="dogperson"  /><label for="dogperson">강아지파</label>
                                <input type="checkbox" className="styles" value="부먹" id="pour" value="pour"  /><label for="pour">부먹</label>   
                            </p>
                        <p className="selects">
                            <input type="checkbox" className="styles" value="찍먹" id="dip" value="dip"  /><label for="dip">찍먹</label>
                            <input type="checkbox" className="styles" value="바깥순이" id="outgirl" value="outgirl"  /><label for="outgirl">바깥순이</label>
                            <input type="checkbox" className="styles" value="바깥돌이" id="outboy"  value="outboy" /><label for="outboy">바깥돌이</label>
                            <input type="checkbox" className="styles" value="집순이" id="homebodygirl" value="homebodygirl" /><label for="homebodygirl">집순이</label>   
                        </p>
                        <p className="selects">
                            <input type="checkbox" className="styles" value="집돌이" id="hombodyboy" value="hombodyboy"  /><label for="hombodyboy">집돌이</label>
                            <input type="checkbox" className="styles" value="친근한" id="friendly" value="friendly" /><label for="friendly">친근한</label>
                            <input type="checkbox" className="styles" value="독립적인" id="independency" value="independency" /><label for="independency">독립적인</label>
                            <input type="checkbox" className="styles" value="무던한" id="dull" value="dull"  /><label for="dull">무던한</label>    
                        </p>
                        <p className="selects">
                            <input type="checkbox" className="styles" value="멘탈왕" id="mentalking"  value="mentalking" /><label for="mentalking">멘탈왕</label>
                            <input type="checkbox" className="styles" value="양심적인" id="conscience" value="conscience" /><label for="conscience">양심적인</label>
                            <input type="checkbox" className="styles" value="계획적인" id="organized" value="organized" /><label for="organized">계획적인</label>   
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
<<<<<<< HEAD
=======
=======
//                         </p>
//                     </div>
//                         )}                        
//                     <div className="self_intro" id="uni">
//                         <p>출신 학교</p> 
//                         <p className="input_type_text"><input type="text" value={school} name="school"/></p>
//                     </div>
//                     <div>
//                         <p className="veryStressful">나의 이상형</p>
//                         <section className="self_intro_check" id="self_intro_check_id">
//                             <p className="selects">
//                                 <input type="checkbox" name="personality" id="cute" /><label for="cute">귀여운</label>
//                                 <input type="checkbox" name="personality" id="mature"/><label for="mature">어른스러운</label>
//                                 <input type="checkbox" name="personality" id="sexy"/><label for="sexy">섹시한</label>
//                                 <input type="checkbox" name="personality" id="manly"/><label for="manly">남자다운</label>
//                             </p>
//                             <p className="selects">
//                                 <input type="checkbox" name="personality" id="natural"/><label for="natural">청순한</label>
//                                 <input type="checkbox" name="personality" id="curious"/><label for="curious">호기심많은</label>
//                                 <input type="checkbox" name="personality" id="serious"/><label for="serious">진중한</label>
//                                 <input type="checkbox" name="personality" id="agressive"/><label for="agressive">과감한</label>
//                             </p>
//                             <p className="selects">
//                                 <input type="checkbox" name="personality" id="intelli"/><label for="intelli">지적인</label>
//                                 <input type="checkbox" name="personality" id="tsndere"/><label for="tsndere">츤데레</label>
//                                 <input type="checkbox" name="personality" id="honesty"/><label for="honesty">솔직한</label>
//                                 <input type="checkbox" name="personality" id="growth"/><label for="growth">성숙한</label>
//                             </p>
//                             <p className="selects">
//                                 <input type="checkbox" name="personality" id="cool"/><label for="cool">쿨한</label>
//                                 <input type="checkbox" name="personality" id="humorous"/><label for="humorous">유머있는</label>
//                                 <input type="checkbox" name="personality" id="careful"/><label for="careful">배려심많은</label>
//                                 <input type="checkbox" name="personality" id="timid"/><label for="timid">소심한</label>
//                             </p>
//                             <p className="selects">
//                                 <input type="checkbox" name="personality" id="cynical"/><label for="cynical">시니컬한</label>
//                                 <input type="checkbox" name="personality" id="tall"/><label for="tall">키가큰</label>
//                                 <input type="checkbox" name="personality" id="small"/><label for="small">아담한</label>
//                                 <input type="checkbox" name="personality" id="outgoing"/><label for="outgoing">쾌활한</label>
//                             </p>
//                         </section>
//                     </div>
//                     <div className="self_intro" id="best_song">
//                         <p>SPOTIFY 베스트송</p> 
//                         <p className="input_type_text"><input type="text" value={fav_song} name="fav_song"/></p>
//                     </div>
//                     <div className="self_intro" id="fav_movie">
//                         <p>좋아하는 영화장르</p> 
//                         <p className="input_type_text"><input type="text" value={fav_movie} name="fav_movie"/></p>
//                     </div>
//                     <div className="self_intro" id="food">
//                         <p>음식취향</p> 
//                         <p className="input_type_text"><input type="text" value={fav_food} name="fav_food"/></p>
//                     </div>
//                     <div className="submit_btn"><input type="submit" value="수정하기"/></div>
//                 </div>
//                 </div>
//             </form>
//             )}
//         </>
//             )}
>>>>>>> 2cf6053e159fdbe7f9dc9fd45da53964834f02f0
>>>>>>> ed61bf815cc78cfe92d3a2be8cd8ef64f918a0a7
        
// export default Profile;