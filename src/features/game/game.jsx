import React from "react"
import {
    Box,
    Heading,
    Text,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
} from "grommet"
import api from "../../utils"

const initDirections = {
    n: true,
    e: true,
    s: true,
    w: true,
}

function Game() {
    const [room, setRoom] = React.useState(null)
    const [error, setError] = React.useState(null)
    const [valid, setValid] = React.useState(initDirections)

    React.useEffect(() => {
        api.initialize()
            .then(res => {
                setRoom({ ...res.data })
            })
            .catch(err => setError(err.message))
    }, [])

    function handleMove(direction) {
        api.move(direction)
            .then(res => {
                if (res.data.error_msg) {
                    setError(res.data.error_msg)
                    setValid(prev => ({ ...prev, [direction]: false }))
                } else {
                    setRoom(res.data)
                    setValid(initDirections)
                    setError(null)
                }
            })
            .catch(err => setError(err.message))
    }

    return (
        <Box fill align="center" direction="column" justify="center">
            <Box width="large">
                <Heading>Game</Heading>
                {room && (
                    <Card
                        height="medium"
                        width="large"
                        background="dark-2"
                        justify="center"
                        align="left"
                        pad="large"
                    >
                        <CardHeader>
                            <Heading>{room.title}</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text size="large" weight="bold">
                                {room.description}
                            </Text>
                            <Text>
                                Other Players:
                                <br />
                                {room.players.length > 0
                                    ? room.players.map(player => (
                                          <p key={player.name}>{player.name}</p>
                                      ))
                                    : "None"}
                            </Text>
                        </CardBody>
                        <CardFooter>
                            <Box width="large" direction="row" justify="evenly">
                                {Object.entries(valid).map(([dir, isValid]) => {
                                    return (
                                        <Button
                                            key={dir}
                                            fill="horizontal"
                                            primary
                                            onClick={() => handleMove(dir)}
                                            disabled={!isValid}
                                        >
                                            {dir}
                                        </Button>
                                    )
                                })}
                            </Box>
                        </CardFooter>
                    </Card>
                )}
                {error && (
                    <Text color="status-critical" textAlign="center">
                        <strong>There's been an error!</strong>
                        <br />
                        {error}
                    </Text>
                )}
            </Box>
        </Box>
    )
}

export default Game
