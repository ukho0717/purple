import React, { useEffect } from 'react';
import GramRead from '../../components/enter_gram/GramRead';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { readGram, unloadGram } from '../../modules/gramPost';
import { deleteGram, updateCommentGram, updateLikeGram } from '../../modules/gramPost';
import $ from 'jquery';

const GramReadContainer = ({ match, location, history }) => {
    // console.log('~',history)
    const { gram_id } = match.params;
    // console.log(gram_id);
    const dispatch = useDispatch();
    const { gram, error, loading, user, listLikeGram } = useSelector(
        ({ gramPost, loading, user, listLikeGram }) => ({
            listLikeGram: listLikeGram.listLikeGram,
            user: user.user,
            gram: gramPost.gram,
            error: gramPost.error,
            loading: loading['gram/READ_GRAM']
        })
    );
    // console.log('유저어어',user);
    // console.log('리스트',listLikeGram);

    const deleteClick = () => {
        console.log('delete');
        console.log('아이디', gram_id);
        let result = window.confirm('삭제하시겠습니까?');
        
        if(result){
            dispatch(deleteGram(gram_id));
            history.push('/gram_main');
        }
    }

    const heartClick = e => {
        console.log('heartClick');
        // console.log(e.target);
        $(e.target).toggleClass('on');
        if($(e.target).hasClass('on')){
            let heart = 'plus';
            dispatch(updateLikeGram({
                gram_id,
                heart
            }));
            setTimeout(history.push(`/gram_post/${gram_id}`), 1000);
            // await history.push(`/gram_post/${gram_id}`);
        }else{
            let heart = 'minus';
            dispatch(updateLikeGram({
                gram_id,
                heart
            }));
            history.push(`/gram_post/${gram_id}`);
        }
    }

    const commentSubmit = e => {
        console.log('commentSubmit');
        console.log(e.target.comment.value);
        console.log(e.target.nickName.value);

        let nickName = e.target.nickName.value;
        let text = e.target.comment.value;

        e.preventDefault();

        dispatch(updateCommentGram({
            _id: gram_id,
            // comment: [{
            //     nickName,
            //     text
            // }]
            nickName,
            text
        }));
    }

    useEffect(() => {
        dispatch(readGram(gram_id));
        return () => {
            dispatch(unloadGram());
        }
    }, [dispatch, gram_id]);

    return (
        <GramRead listLikeGram={listLikeGram} user={user} gram={gram} commentSubmit={commentSubmit} deleteClick={deleteClick} heartClick={heartClick}/>
    )
}

export default withRouter(GramReadContainer);