import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import Home from './components/pages/Home';
import Contacts from "./components/pages/Contacts";
import Header from "./components/Header";

function App() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
            </Routes>
        </Router>
    );
}

export default App;
