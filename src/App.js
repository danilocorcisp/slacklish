import React from "react";
import Header from "./Header.js";
import Sidebar from "./Sidebar.js";
import Chat from "./Chat";
import Login from "./Login";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider.js";

function App() {
    const [{ user }, dispatch] = useStateValue();

    return (
        // BEM name convention
        <div className="App">
            <Router>
                {!user ? (
                    <Login />
                ) : (
                    <>
                        <Header />
                        <div className="app__body">
                            <Sidebar />
                            <Switch>
                                <Route path="/room/:roomID">
                                    <Chat />
                                </Route>
                                <Route path="/">
                                    <h1>Welcome</h1>
                                </Route>
                            </Switch>
                        </div>
                    </>
                )}
            </Router>
        </div>
    );
}

export default App;
