import "./App.css";
import HomePage from "./homepage/homepage";
import Header from "../component/Header/header";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" exact element={<HomePage/>}/>
                <Route path="/blog" element={<HomePage/>}/>
                <Route path="/about" element={<HomePage/>}/>
                <Route path="/contact" element={<HomePage/>}/>
            </Routes>
        </Router>
    );
}

export default App;
