import {createContext, useState, useReducer} from 'react';

export const MyContext = createContext(undefined);

export const MyProvider = (props) => {

    const [active, setActive] = useState(true);

    const [users,setUsers] = useState([
        {id: crypto.randomUUID(), name:"Pierre"},
        {id: crypto.randomUUID(), name:"Karo"},
        {id: crypto.randomUUID(), name:"Juby"}
    ]);

    const addUser = (name) => {
        setUsers(prevState => (
            [
                ...prevState,
                {id: crypto.randomUUID(), name: name}
            ]
        ))
    }

    return (
        <MyContext.Provider value={{
            users: users,
            addUser: addUser,
            setUsers: setUsers,
            activeState: active,
            setActiveState: () => setActive(!active)
        }}>
            {props.children}
        </MyContext.Provider>
    )
}
