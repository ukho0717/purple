import React, { useEffect } from 'react';
import GramWrite from '../../components/enter_gram/GramWrite';
// import qs from 'qs';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { writeGram } from '../../modules/writeGram';

const GramWriteContainer = ({ history }) => {
    const dispatch = useDispatch();
    const { InstaImage, content, comment, gram, gramError } = useSelector(({ gramWrite }) => ({
        InstaImage: gramWrite.InstaImage,
        content: gramWrite.content,
        comment: gramWrite.comment,
        gram: gramWrite.gram,
        gramError: gramWrite.gramError
    }));

    const onPublish = () => {
        dispatch(
            writeGram({
                InstaImage,
                content,
                comment
            })
        )
    };

    useEffect(() => {
        if(post){
            history.push('/gram_write');
        }
        if(postError){
            console.log(postError);
        }
    }, [history, gram, gramError])
    return (
        <GramWrite onPublish={onPublish}/>
    )
}

export default withRouter(GramWriteContainer);