import User from './components/user.jsx';
import {MyProvider} from './context/index.jsx';

const App = () => {

    return (
        <MyProvider>
            <User />
        </MyProvider>
    )
}

export default App;