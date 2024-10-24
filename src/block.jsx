import {useEffect} from "react";



const Block = () => {
    useEffect(()=>{
        // When the component mounts
        console.log('Block created')

        return ()=>{
            // When the component dismounts
            console.log('Block removed')
        }
    })

    return (
        <div style={
            {
                backgroundColor: 'red',
                color: 'white',
                margin: '10px'
            }
        }>
            I am a block
        </div>
    )
}

export default Block;