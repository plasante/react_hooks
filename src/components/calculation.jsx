import { useState, useMemo } from 'react';

/**
 * Use memo on function you know will take a long time like an API call.
 * Otherwise don't use it.
 *
 * @returns {JSX.Element}
 * @constructor
 */
const Calculation = () => {
    const [calc,setCalc] = useState(0);

    const [blocks, setBlocks] = useState([1,56,34]);

    // const results = multiply(calc);

    // Whenever calc changes than multiply(calc) will happen.
    const results = useMemo(() => multiply(calc), [calc]);

    // This will be very fast always because we use memo on calc
    const addBlockHandler = () => {
        setBlocks(prevState => [
            ...prevState,
            Math.floor(Math.random() * 100) + 1
        ])
    }

    const calculateHandler = () => {
        let random = Math.floor(Math.random() * 100) + 1;
        setCalc(random);
    }

    return (
        <>
            <h3>Blocks</h3>
            { blocks.map((block, index) => (
                <div key={index}>{block}</div>
            )) }
            <button onClick={addBlockHandler}>Add block</button>
            <hr/>
            Calc: {calc}
            <br/>
            <button onClick={calculateHandler}>+</button>
        </>
    )
}

/**
 * This function will not be called if only blocks change
 * @param calc
 * @returns {*}
 */
const multiply = (calc) => {
    for (let i = 1; i <= 1000000000; i++) {
        calc += 1;
    }
    return calc;
}

export default Calculation;