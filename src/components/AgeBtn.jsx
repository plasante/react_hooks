import {memo} from "react";

const AgeBtn = ({handleAge}) => {

    console.log('5-AgeBtn');

    return (
        <>
            <button onClick={handleAge}>
                Increment Age
            </button>
        </>
    )
}

export default memo(AgeBtn);