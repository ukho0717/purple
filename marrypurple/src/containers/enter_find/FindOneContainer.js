import React, {useEffect, useState} from 'react';
import { useSelector } from "react-redux";
import FindOne from '../../components/enter_find/FindOne'
import { withRouter } from "react-router-dom";

const FindOneContainer = ({history}) => {
    const [check, setCheck] = useState('none')
    // useSelector로 리덕스 스토어 state에 접근하는것.
    const { findOne } = useSelector(({ findOne }) => ({
        findOne: findOne.one,
        check: findOne.check
    }));
    const onClick = () => {
        setCheck('yes')
    }
    useEffect(() => {
        if (findOne) {
            history.push({
                pathname: '/find_match',
                data: findOne
            });
        }else if(findOne===null &&check != 'none'){
            console.log(findOne)
            console.log(check)
            history.push({
                pathname: '/find_match',
                data: 'none'
            });
        }
    }, [findOne, history, check]);
    return(
        <>
            <FindOne onClick={onClick}/>
        </>
    )
}

export default withRouter(FindOneContainer);