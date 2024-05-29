import React, { useState } from 'react';
import './index.css'


const Porfolio = () => {

    const [result, setResult] = useState(0)
    const [totalScore, setTotalScore] = useState(0)

    const onClickAdd = () => {

        return 'First Option';

    }

    const handleClick = () => {
        // const result = onClickAdd
        // setResult(result)
        let totalScore = Math.random()
        let total = result + totalScore

        setResult(total)

    }

    const handleDelete = () => {
        // const result = '2nd option'
        // setResult(result)
    }
    return (
        <div>
            <p>
                This is the index.js file
            </p>
            Hello World!

            <button onClick={handleClick}> Click to add </button>
            <button onClick={handleDelete}> Click to Delete </button>

            <p> {result} </p>

        </div>
    )
}

export default Porfolio;