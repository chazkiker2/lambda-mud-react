import React from "react"
import { Form, FormField, TextInput, Box, Button, Heading } from "grommet"
import axios from "axios"
import utils from "../../utils"

const initState = {
    username: "",
    password1: "",
    password2: "",
}

function Signup() {
    const [userInput, setUserInput] = React.useState(initState)
    return (
        <>
            <Box fill align="center" justify="center">
                <Box width="medium">
                    <Heading>Register</Heading>
                    <Form
                        value={userInput}
                        onChange={nextValue => setUserInput(nextValue)}
                        onReset={() => setUserInput(initState)}
                        onSubmit={({ value }) =>
                            axios
                                .post(
                                    `${utils.API_BASE_URL}/api/register`,
                                    value
                                )
                                .then(res => console.log(res))
                                .catch(err => console.log(err))
                        }
                    >
                        <FormField name="username" label="Username">
                            <TextInput name="username" />
                        </FormField>
                        <FormField name="password1" label="Password">
                            <TextInput name="password1" />
                        </FormField>
                        <FormField name="password2" label="Confirm Password">
                            <TextInput name="password2" />
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

export default Signup
