import {BrowserRouter} from "react-router-dom"
import AppRouter from "./components/AppRouter"
import './styles/App.css'
import Navbar from "./components/Navbar";

const App = () => {

    return (
        <div className="App">
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
        </div>
    )
}

export default App
