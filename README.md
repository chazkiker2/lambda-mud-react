# Multi-user Dungeon Frontend Client

## Links & Resources

- Trello Board
- MUD Django Project

## Features

### Client

- [ ] Create a standalone frontend app that communicates with the server via API calls
- [ ] Be able to create a new account on the server (implemented on server)
- [ ] Be able to log in to the server (implemented on server)
- [ ] Create an interface that displays the current room name, its description and the other players in the room
- [ ] Be able to move between rooms and update the display accordingly (implemented on server)
- [ ] Be able to use a `say` command to say things that other people in the room will see (server implementation incomplete)
- [ ] Upon login, subscribe to a Pusher channel based on the player's universally unique id: `p-channel-<uuid>`
- [ ] Bind the player channel to `broadcast` events and display the messages to the player
- [ ] Alert the player when someone enters and leaves the current room (implemented on server)
- [ ] Alert the player when someone in the current room says something (server implementation incomplete)

### General

- [ ] Header comments in all source files that describe overall what the file does
- [ ] Header comments on all functions that describe what the function does, function arguments, and return values

### Extra Features

- [ ] Add a `shout` command that broadcasts a message to every player
- [ ] Add a `whisper` command that sends a private message to a single player
- [ ] Disconnect inactive players
- [ ] Replace text-based movement with graphical navigation
- [ ] Expand the world map
- [ ] Add a search function to find the shortest path to another player (hint: BFS)
- [ ] Generate and display a map of the world
- [ ] Add the ability to pick up and drop objects
- [ ] Add NPCs that wander around the world (hint: look into [Celery](http://docs.celeryproject.org/en/latest/index.html))
- [ ] Add weapons
- [ ] Add combat with NPCs
- [ ] Add PvP combat

## Available Scripts

- `npm start`
- `npm run build`
- `npm run eject`
