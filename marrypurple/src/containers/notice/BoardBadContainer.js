import React, { useEffect } from 'react';
import ContentContainer from '../common/ContentContainer';
import BoardBad from '../../components/notice/BoardBad';
import qs from 'qs';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { badListPosts } from '../../modules/badList';

const BoardBadContainer = ({ location }) => {
    // const dispatch = useDispatch();
    // const { badLists, loading } = useSelector(
    //     ({ badLists, loading }) => ({
    //         badLists: badLists,
    //         // error: error,
    //         loading: loading['post/LIST_POSTS']
    //     })
    // );

    // useEffect(() => {
    //     const { user_nick, reason } = qs.parse(location.search, {
    //         ignoreQueryPrefix: true
    //     });
    //     dispatch(badListPosts({ user_nick, reason }));
    // }, [dispatch, location.search]);

    return (
        // <ContentContainer>
        //     <div><h2>안녕</h2></div>
        // </ContentContainer>
        <div id="content">
            <div id="contentBox">
                {/* <BoardBad loading={loading}  badLists={badLists}/> */}
            </div>
        </div>
    )
}

export default withRouter(BoardBadContainer);