import React, {useState} from 'react';
import TelepathyMakeQuiz from '../../components/telepathy/TelepathyMakeQuiz'

const TelepathyMakeQuizContainer = () => {
    const[div, setDiv] = useState({
        unfold:''
    })

    const UnfoldToggle = (num) => {
        if (div.unfold !== num){
            setDiv({unfold: num})
        }else {
            setDiv({unfold: ''})
        }
    }
    return(
        <>
            <TelepathyMakeQuiz OnToggle={UnfoldToggle} unfoldDiv={div}/>
        </>
    )
}

export default TelepathyMakeQuizContainer;