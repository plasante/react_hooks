import {useState, useEffect} from "react";
import Block from "./block.jsx";

const App2 = () => {
    const [count, setCount] = useState(0);
    const [animal , setAnimal] = useState('dog');
    const [block, setBlock] = useState(false);

    const plusOne = () => setCount(count+1);
    const minusOne = () => setCount(count-1);
    const resetCount = () => setCount(0);

    useEffect(() => {
        return () => {
            console.log('use effect count');
        }
    },[count])

    // useEffect(() => {
    //     console.log('Listening to count changes: ' + count);
    // },[count])
    //
    // useEffect(() => {
    //     console.log('Listening to animal changes: ' + animal);
    // },[animal])

    return (
        <div>
            {
                block ?
                    <Block />
                    :
                    null
            }
            <button onClick={()=>setBlock(!block)}>Show Block</button>
            <hr/>
            <h3>Counter {count}</h3>
            <button onClick={plusOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={resetCount}>Reset</button>
            <h2>{animal}</h2>
            <button onClick={() => setAnimal('cat')}>Change animal</button>
        </div>
    )
        ;
}

export default App2;