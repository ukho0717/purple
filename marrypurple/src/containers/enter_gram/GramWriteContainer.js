import React, { useEffect, useState } from 'react';
import GramWrite from '../../components/enter_gram/GramWrite';
// import qs from 'qs';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, writeGram } from '../../modules/gramWrite';

const GramWriteContainer = ({ history }) => {
    const [error, serError] = useState(null);
    const dispatch = useDispatch();
    const { form, gram, gramError } = useSelector(({ gramWrite }) => ({
        form: gramWrite.form,
        gram: gramWrite.gram,
        gramError: gramWrite.gramError
    }));

    const onChange = e => {
        const { value, name } = e.target;
        dispatch(changeField({
            form,
            key: name,
            value
        }))
    }
    
    const onSubmit = e => {
        e.preventDefault();
        const { file, content } = form;
        console.log('file', file, 'content', content);


    }

    useEffect(() => {
        dispatch(initializeForm());
    }, [dispatch]);

    return (
        <GramWrite onChange={onChange} onSubmit={onSubmit} form={form}/>
    )
}

export default withRouter(GramWriteContainer);