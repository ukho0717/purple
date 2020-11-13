import React from 'react';

const ProfilePic = ({pics}) => {
    return(
        <div style={{display:"flex"}}>
            {pics.map(pic => (
                <img src={pic} alt="프로필사진" key={pics}/>
            ))}
        </div>
    )
}

export default ProfilePic