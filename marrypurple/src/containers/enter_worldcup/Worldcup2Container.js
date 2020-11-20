import React, { useState, useEffect } from 'react';
import Worldcup2 from '../../components/enter_worldcup/Worldcup2';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { worldcupList, unloadWorldcup } from '../../modules/worldcup';

const Worldcup2Container = ({ history, location, match }) => {
    const dispatch = useDispatch();
    const { list, error, loading } = useSelector(({ worldcup, loading }) => ({
        list: worldcup.list,
        error: worldcup.error,
        loading: loading['worldcup/WORLDCUP_LIST']
    }))

    console.log('history',history);

    console.log('history.data',history.location.data);
    console.log('location',location);
    console.log('match',match);

    // const [tests, setTests] = useState(history.location.data);
    // console.log('tests', tests);

    // const [users, setUsers] = useState([]);
    // const [display, setDisplay] = useState([]);
    // const [winner, setWinner] = useState([]);
    // useEffect(() => {
    //     dispatch(worldcupList());
    //     // return () => {
    //     //     dispatch(unloadWorldcup);
    //     // } 

        
    // }, [dispatch]);

    console.log('list', list);
    let usersList = new Array();
    if(list){
        usersList = history.location.data;
        usersList = usersList.slice(0,2);
    }
    
    console.log('usersList', usersList);


    
    // let item = new Array();
    // if(list){
    //     item = list;
    // }
    // console.log(item);

    // useEffect(() => {
    //     setUsers(item);
    //     console.log('설정된user',users);
    //     setDisplay([item[0], item[1]]);
    //     console.log('display',display);
    // }, []);
    // console.log('설정된user2',users);
    // console.log('display2',display);


    // const clickHandler = user => () => {
    //     console.log(user);
    //     console.log('users', users);
    //     console.log('winner', winner);
    //     if(users.length <= 2){
    //         if(winner.length === 0){
    //             setDisplay([user]);
    //             history.push(`/worldcup3/${user._id}`);
    //         }else{
    //             let updateUser = [...winner, user];
    //             setUsers(updateUser);
    //             setDisplay([updateUser[0], updateUser[1]]);
    //             setWinner([]);
    //         }
    //     }else if(users.length > 2){
    //         setWinner([...winner, user]);
    //         setDisplay([users[2], users[3]]);
    //         setUsers(users.slice(2));
    //     }
    // }

    

    return (
        <Worldcup2 history={history} error={error} loading={loading} list={list} usersList={usersList}/>
    )
}

export default withRouter(Worldcup2Container);