import React from 'react'
import { useEffect, useState } from 'react'
import { fbGet } from '../config/firebasemethods';

const Quiz = () => {

    const [allquiz, setAllQuiz] = useState<any>([]);

    const GetQuiz = () => {
        fbGet("quiz")
            .then((res: any) => {
                console.log(res);
                setAllQuiz([...res]);
            })
            .catch((err) => {
                console.log(err);
            });
    };


    useEffect(() => {
        GetQuiz();
    }, [])
    return (
        <div>
            <h1>Quiz App</h1>
            
        </div>
    )
}

export default Quiz