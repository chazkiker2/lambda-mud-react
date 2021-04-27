import React from "react"
import { Box, Grommet, Nav, Anchor } from "grommet"
import { Switch, BrowserRouter as Router, Route } from "react-router-dom"
import Login from "./features/login/login"
import Register from "./features/signup/signup"
import Game from "./features/game/game"

const theme = {
    global: {
        colors: {
            brand: "#228BE6",
        },
        font: {
            family: "Roboto",
            size: "18px",
            height: "20px",
        },
    },
}

const AppBar = props => (
    <Box
        tag="header"
        direction="row"
        align="center"
        justify="between"
        background="brand"
        pad={{ left: "medium", right: "small", vertical: "small" }}
        elevation="medium"
        style={{ zIndex: "1" }}
        {...props}
    >
        {props.children}
        <Nav direction="row">
            <Anchor href="/login">Login</Anchor>
            <Anchor href="/register">Register</Anchor>
            <Anchor href="/game">Game</Anchor>
        </Nav>
    </Box>
)

function App() {
    return (
        <Grommet theme={theme}>
            <Router>
                <Switch>
                    <Route path="/login">
                        <AppBar>MUD.</AppBar>
                        <Login />
                    </Route>
                    <Route path="/register">
                        <AppBar>MUD.</AppBar>
                        <Register />
                    </Route>
                    <Route path="/game">
                        <AppBar>MUD.</AppBar>
                        <Game />
                    </Route>
                    <Route exact path="/">
                        <AppBar>Hello Grommet!</AppBar>
                    </Route>
                </Switch>
            </Router>
        </Grommet>
    )
}

export default App
