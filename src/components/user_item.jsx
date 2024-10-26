import {useContext} from 'react';
import {MyContext} from '../context/index.jsx';

const UserItem = () => {
    const context = useContext(MyContext);
    const {users, activeState, setActiveState, addUser, setUsers} = context;

    return (
        <>
            {activeState
                ?
                users.map((user, index) => (
                        <div key={index}>Id: {user.id} Name: {user.name}</div>
                    )
                )
                :
                null
            }
            <button onClick={() => {
                setActiveState()
            }}>{activeState ? 'Hide Users' : 'Show Users'}</button>
            <hr/>
            <button onClick={() => addUser('Mickey')}>Add user</button>
            <hr/>
            <button onClick={() => setUsers(
                prevState => (
                    [
                        ...prevState,
                        {id: crypto.randomUUID(), name: 'Suki'}
                    ]
                )
            )}>Add user</button>
        </>
    )
}

export default UserItem;