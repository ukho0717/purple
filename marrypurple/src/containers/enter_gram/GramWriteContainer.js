import React, { useEffect, useState } from 'react';
import GramWrite from '../../components/enter_gram/GramWrite';
// import qs from 'qs';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, writeGram } from '../../modules/gramWrite';

const GramWriteContainer = ({ history }) => {
    const [error, serError] = useState(null);
    const dispatch = useDispatch();
    const { gram, gramError } = useSelector(({ gramWrite }) => ({
        gram: gramWrite.gram,
        gramError: gramWrite.gramError
    }));

    // const onChange = e => {
    //     const { value, name } = e.target;
    //     dispatch(changeField({
    //         form,
    //         key: name,
    //         value
    //     }))
    // }
    
    const onSubmit = e => {
        console.log('onSubmit');
        console.log(e.target.content.value);
        console.log(e.target.file.className);
        let InstaImage = e.target.file.className;
        let content = e.target.content.value;

        e.preventDefault();

        dispatch(writeGram({
            InstaImage,
            content
        }));
    }

    useEffect(() => {
        if(gram){
            alert('성공');
            history.push('/gram_main');
        }
    }, [dispatch, gram]);

    return (
        <GramWrite onSubmit={onSubmit}/>
    )
}

export default withRouter(GramWriteContainer);