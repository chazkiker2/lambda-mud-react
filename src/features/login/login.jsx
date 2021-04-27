import React from "react"
import { Form, FormField, TextInput, Box, Button, Heading } from "grommet"
import axios from "axios"
import utils from "../../utils"

const initState = {
    username: "",
    password: "",
}

function Login() {
    const [userInput, setUserInput] = React.useState(initState)
    return (
        <>
            <Box fill align="center" justify="center">
                <Box width="medium">
                    <Heading>Login</Heading>
                    <Form
                        value={userInput}
                        onChange={nextValue => setUserInput(nextValue)}
                        onReset={() => setUserInput(initState)}
                        onSubmit={({ value }) => {
                            axios
                                .post(`${utils.API_BASE_URL}/api/login`, value)
                                .then(res => console.log(res))
                                .catch(err => console.log(err))
                        }}
                    >
                        <FormField name="username" label="Username">
                            <TextInput name="username" />
                        </FormField>
                        <FormField name="password" label="Password">
                            <TextInput name="password" />
                        </FormField>
                        <Box direction="row" justify="center" gap="medium">
                            <Button type="submit" primary label="Submit" />
                            <Button type="reset" label="Reset" />
                        </Box>
                    </Form>
                </Box>
            </Box>
        </>
    )
}

export default Login
