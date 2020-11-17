import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import FindOne from '../../components/enter_find/FindOne'
import { find } from '../../modules/findOne';
import { withRouter } from "react-router-dom";

const FindOneContainer = ({history}) => {
    const dispatch = useDispatch();
    // useSelector로 리덕스 스토어 state에 접근하는것.
    const { findOne } = useSelector(({ findOne }) => ({
        findOne: findOne.one
    }));

    //  폼 등록 이벤트 핸들러
    const onSubmit = (event) => {
        console.log("로그인 시도");
        event.preventDefault();
        dispatch(find({ }));
    };

    useEffect(() => {
        if (findOne) {
        history.push("/findone2");
    }
    }, [findOne, history]);
    return(
        <>
            <FindOne onSubmit={onSubmit} />
        </>
    )
}

export default withRouter(FindOneContainer);