import {useState, useEffect} from "react";

const App = () => {
    const [count, setCount] = useState(0);
    const [animal , setAnimal] = useState('dog');

    const plusOne = () => setCount(count+1);
    const minusOne = () => setCount(count-1);
    const resetCount = () => setCount(0);

    useEffect(() => {
        console.log('Go to server fetch data only when component loads');
    },[])

    // useEffect(() => {
    //     console.log('Listening to count changes: ' + count);
    // },[count])
    //
    // useEffect(() => {
    //     console.log('Listening to animal changes: ' + animal);
    // },[animal])

    return (
        <div>
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

export default App;