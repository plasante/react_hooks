import User from './components/user.jsx';
import {MyProvider} from './context/index.jsx';
import Calculation from "./components/calculation.jsx";

const App = () => {

    return (
        <MyProvider>
            {/*<User />*/}
            <Calculation />
        </MyProvider>
    )
}

export default App;