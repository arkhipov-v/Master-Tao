import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import Home from './components/pages/Home';
import Contacts from "./components/pages/Contacts";
import Header from "./components/Header";
import UI from "./components/pages/UI";

function App() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/UI" element={<UI/>}/>
            </Routes>
        </Router>
    );
}

export default App;
