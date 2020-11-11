import React, { useEffect } from 'react';
import GramWrite from '../../components/enter_gram/GramWrite';
// import qs from 'qs';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { writeGram } from '../../modules/gramWrite';

const GramWriteContainer = ({ history }) => {
    // const dispatch = useDispatch();
    // const { InstaImage, content, gram, gramError } = useSelector(({ gramWrite }) => ({
    //     InstaImage: gramWrite.InstaImage,
    //     content: gramWrite.content,
    //     gram: gramWrite.gram,
    //     gramError: gramWrite.gramError
    // }));

    // const onPublish = () => {
    //     // event.preventDefault();
    //     // const formData = new FormData();
    //     // console.log(event.target.InstaImage.files[0]);
    //     // formData.append('content', event.target.InstaImage.file);
    //     // formData.append('content', event.target.content.value);

    //     // console.log(formData);
    //     dispatch(
    //         writeGram({
    //             // formData
    //         })
    //     )
    // };

    // useEffect(() => {
    //     if(gram){
    //         history.push('/gram_write');
    //     }
    //     if(gramError){
    //         console.log(gramError);
    //     }
    // }, [history, gram, gramError])
    return (
        <GramWrite />
    )
}

export default withRouter(GramWriteContainer);