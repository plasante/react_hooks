import { useState, useCallback } from "react";
import Title from "./components/Title.jsx";
import Count from "./components/Count.jsx";
import CountBtn from "./components/CountBtn.jsx";
import Age from "./components/Age.jsx";
import AgeBtn from "./components/AgeBtn.jsx";

const App = () => {
    const [count, setCount] = useState(0);
    const [age, setAge] = useState(10);

    const handleCount = useCallback(() => {
        setCount(count+1);
    },[count])

    const handleAge = useCallback( () => {
        setAge(age+1);
    }, [age])

    return (
        <div>
            <Title/>
            <Count count={count} />
            <CountBtn handleCount={handleCount} />
            <Age age={age} />
            <AgeBtn handleAge={handleAge} />
        </div>
    )
}

export default App;