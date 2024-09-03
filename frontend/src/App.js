import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Home from "./Components/Home";
import Register from "./Components/Register";
import User from "./Components/User";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Register" element={<Register />} />
                    <Route path="/User" element={<User/>}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;
