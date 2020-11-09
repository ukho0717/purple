import React from 'react';
// import styled from 'styled-components';
import '../../lib/styles/gram.scss';
import $ from 'jquery';
// import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const GramMain = () => {
    const script = () => {

    }

    script();

    return(
        <>
            <div class="gram_1">
                <Link to="/gram_write"><div class="gram_1_button">게시물 올리기</div></Link>
            </div>
            <div class="gram_2">
                <p>HOT</p>
                <Link to="/gram_post"><div class="gram_2_photo"></div></Link>
                <Link to="/gram_post"><div class="gram_2_photo"></div></Link>
                <Link to="/gram_post"><div class="gram_2_photo"></div></Link>
                <Link to="/gram_post"><div class="gram_2_photo"></div></Link>
            </div>
            <div class="gram_3">
                <p>최신 스토리</p>
                <Link to="/gram_post"><div class="gram_3_photo"></div></Link>
                <Link to="/gram_post"><div class="gram_3_photo"></div></Link>
                <Link to="/gram_post"><div class="gram_3_photo"></div></Link>
                <Link to="/gram_post"><div class="gram_3_photo"></div></Link>
            </div>
        </>
    )
}

export default GramMain;