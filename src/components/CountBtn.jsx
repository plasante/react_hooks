import {memo} from "react";

const CountBtn = ({handleCount}) => {

    console.log('3-CountBtn');

    return (
        <>
            <button onClick={handleCount}>
                Increment Count
            </button>
        </>
    )
}

export default memo(CountBtn);