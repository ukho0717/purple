import React from 'react';
import '../../lib/styles/profile.scss';


const Profile = ({user,auth,error,loading}) =>{
    return(
        <>
        {user&&(
            <div className="photo_list">
                <div className="overflow_profile">
                    <div>
                        <ul className="photo_group">
                            <li className="photo_items">
                                <div className="photo_profile"><img src={user.profile_pic}/></div>
                                <div className="del_btn">
                                    <button><i className="fas fa-trash-alt"></i></button>
                                </div>
                            </li>
                            <li className="photo_items">
                                <div className="photo_profile"></div>
                                <div className="del_btn">
                                    <button><i className="fas fa-trash-alt"></i></button>
                                </div>
                            </li>
                            <li className="photo_items">
                                <div className="photo_profile"></div>
                                <div className="del_btn">
                                    <button><i className="fas fa-trash-alt"></i></button>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="photo_group">
                            <li className="photo_items">
                                <div className="photo_profile"></div>
                                <div className="del_btn">
                                    <button><i className="fas fa-trash-alt"></i></button>
                                </div>
                            </li>
                            <li className="photo_items">
                                <div className="photo_profile"></div>
                                <div className="del_btn">
                                    <button><i className="fas fa-trash-alt"></i></button>
                                </div>
                            </li>
                            <li className="photo_items">
                                <div className="photo_profile"></div>
                                <div className="del_btn">
                                    <button><i className="fas fa-trash-alt"></i></button>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="photo_group">
                            <li className="photo_items">
                                <div className="photo_profile"></div>
                                <div className="del_btn">
                                    <button><i className="fas fa-trash-alt"></i></button>
                                </div>
                            </li>
                            <li className="photo_items">
                                <div className="photo_profile"></div>
                                <div className="del_btn">
                                    <button><i className="fas fa-trash-alt"></i></button>
                                </div>
                            </li>
                            <li className="photo_items">
                                <div className="photo_profile"></div>
                                <div className="del_btn">
                                    <button><i className="fas fa-trash-alt"></i></button>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="add_photo_btn">
                        <p>사진을 추가해 프로필을 변경해보세요</p>
                        <button>사진 추가하기</button>
                    </div>
                    <div className="self_intro" id="intro">
                        <p>한줄 소개</p>
                        <p className="input_type_text"><input type="text" value={user.brief_intro} name="brief_intro"/></p>
                    </div>
                    <div className="self_intro" id="live">
                        <p>거주지</p> 
                        <p className="input_type_text"><input type="text" value={user.address} name="address"/></p>
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
                {user.user_gender=="male"&&(
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
                        <p className="input_type_text"><input type="text" value={user.school} name="school"/></p>
                    </div>
                    <div>
                        <p className="veryStressful">나의 이상형</p>
                        <section className="self_intro_check" id="self_intro_check_id">
                            <p className="selects">
                                <input type="checkbox" name="personality" id="cute" /><label for="cute">귀여운</label>
                                <input type="checkbox" name="personality" id="mature"/><label for="mature">어른스러운</label>
                                <input type="checkbox" name="personality" id="sexy"/><label for="sexy">섹시한</label>
                                <input type="checkbox" name="personality" id="manly"/><label for="manly">남자다운</label>
                            </p>
                            <p className="selects">
                                <input type="checkbox" name="personality" id="natural"/><label for="natural">청순한</label>
                                <input type="checkbox" name="personality" id="curious"/><label for="curious">호기심많은</label>
                                <input type="checkbox" name="personality" id="serious"/><label for="serious">진중한</label>
                                <input type="checkbox" name="personality" id="agressive"/><label for="agressive">과감한</label>
                            </p>
                            <p className="selects">
                                <input type="checkbox" name="personality" id="intelli"/><label for="intelli">지적인</label>
                                <input type="checkbox" name="personality" id="tsndere"/><label for="tsndere">츤데레</label>
                                <input type="checkbox" name="personality" id="honesty"/><label for="honesty">솔직한</label>
                                <input type="checkbox" name="personality" id="growth"/><label for="growth">성숙한</label>
                            </p>
                            <p className="selects">
                                <input type="checkbox" name="personality" id="cool"/><label for="cool">쿨한</label>
                                <input type="checkbox" name="personality" id="humorous"/><label for="humorous">유머있는</label>
                                <input type="checkbox" name="personality" id="careful"/><label for="careful">배려심많은</label>
                                <input type="checkbox" name="personality" id="timid"/><label for="timid">소심한</label>
                            </p>
                            <p className="selects">
                                <input type="checkbox" name="personality" id="cynical"/><label for="cynical">시니컬한</label>
                                <input type="checkbox" name="personality" id="tall"/><label for="tall">키가큰</label>
                                <input type="checkbox" name="personality" id="small"/><label for="small">아담한</label>
                                <input type="checkbox" name="personality" id="outgoing"/><label for="outgoing">쾌활한</label>
                            </p>
                        </section>
                    </div>
                    <div className="self_intro" id="best_song">
                        <p>SPOTIFY 베스트송</p> 
                        <p className="input_type_text"><input type="text" value={user.fav_song} name="fav_song"/></p>
                    </div>
                    <div className="self_intro" id="fav_movie">
                        <p>좋아하는 영화장르</p> 
                        <p className="input_type_text"><input type="text" value={user.fav_movie} name="fav_movie"/></p>
                    </div>
                    <div className="self_intro" id="food">
                        <p>음식취향</p> 
                        <p className="input_type_text"><input type="text" value={user.fav_food} name="fav_food"/></p>
                    </div>
                    <div className="submit_btn"><input type="submit" value="수정하기"/></div>
                </div>
                </div>
                        )}
                        </>
            )}
        
export default Profile;