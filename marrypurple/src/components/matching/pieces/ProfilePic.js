import React from 'react';

const ProfilePic = ({pics}) => {
    return(
        <div style={{display:"flex"}}>
            {pics.map((pic, index) => (
                <img src={pic} alt="프로필사진" key={index}/>
            ))}
        </div>
    )
}

export default ProfilePic