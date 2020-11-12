import React from 'react';
// import styled from 'styled-components';
import '../../lib/styles/gram.scss';
import $ from 'jquery';
// import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const GramLikeMain = ({ listLikeGram }) => {
    // console.log(listLikeGram);
    const script = () => {

    }

    script();

    return(
        <>
            <div class="gram_1">
                <Link to="/gram_write"><div class="gram_1_button">게시물 올리기</div></Link>
            </div>

            {listLikeGram && (
                <div class="gram_2">
                    <p>HOT</p>
                    {listLikeGram.map(likeGram => (
                        <Link to={`/gram_post/${likeGram._id}`}><div className="gram_2_photo" style={{ background: `url(${likeGram.InstaImage})`, backgroundSize: '100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div></Link>
                    ))}
                </div>
            )}
        </>
    )
}

export default GramLikeMain;