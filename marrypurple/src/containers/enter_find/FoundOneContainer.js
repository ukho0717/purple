import React from 'react';
import FoundOne from '../../components/enter_find/FoundOne'

const FoundOneContainer = ({data}) => {
    let styles = ''
    if(data){
        styles = data
    }
    return(
        <>
            <FoundOne who={styles}/>
        </>
    )
}

export default FoundOneContainer;