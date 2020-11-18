import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import FindOne from '../../components/enter_find/FindOne'
import { find } from '../../modules/findOne';
import { withRouter } from "react-router-dom";

const FindOneContainer = ({history}) => {
    const dispatch = useDispatch();
    // useSelector로 리덕스 스토어 state에 접근하는것.
    const { findOne, check } = useSelector(({ findOne }) => ({
        findOne: findOne.one,
        check: findOne.check
    }));

    useEffect(() => {
        if (findOne) {
            history.push({
                pathname: '/find_match',
                data: findOne
            });
        }
    }, [findOne, history]);
    return(
        <>
            <FindOne/>
        </>
    )
}

export default withRouter(FindOneContainer);