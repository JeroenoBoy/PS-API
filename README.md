# PSWrapper
An api wrapper for https://playerservers.com




## Contents
* [General info](#general-info)
* [API Refferences](#api-refferences)




## General Info
This project is made to simplify the cubedAPI for nodejs.




## API Refferences

### Requests

#### getPlayerCount
Function: `PSWrapper.getPlayerCount();`
Description: Get the total player count on cubedcraft.
Example:
```
const players = await PSWrapper.getPlayerCount();

console.log('Online players: ' + players);
```



## Players

### get
Function: `PSWrapper.players.get(uuid);`
params:
-	uuid: uuid of the player

method: `GET https://api.playerservers.com/players/{uuid}`
Description: Get the data of a player.
Example:
```
const player = await PSWrapper.players.get('41043b4c-37f7-483e-b8e5-8131655289ca');

console.log('Username: ' + player.username);
```


### getWarzoneStats
Function: `PSWrapper.players.getWarzoneStats(uuid);`
params:
-	uuid: uuid of the player

method: `GET https://api.playerservers.com/players/{uuid}/warzone`
Description: Get the Warzone stats of a player.
Example:
```
const player = await PSWrapper.players.getWarzoneStat.('41043b4c-37f7-483e-b8e5-8131655289ca');

console.log('Wool destroyed: ' + player.wool);
```


### getTntwarsStats
Function: `PSWrapper.players.getTntwarsStats(uuid);`
params:
-	uuid: uuid of the player

method: `GET https://api.playerservers.com/players/{uuid}/tntwars`
Description: Get the TNTWars stats of a player.
Example:
```
const player = await PSWrapper.players.getTntwarsStats.('41043b4c-37f7-483e-b8e5-8131655289ca');

console.log('Kills: ' + player.kills);
```


### getBedwarsStats
Function: `PSWrapper.players.getBedwarsStats(uuid);`
params:
-	uuid: uuid of the player

method: `GET https://api.playerservers.com/players/{uuid}/bedwars`
Description: Get the Bedwars stats of a player.
Example:
```
const player = await PSWrapper.players.getBedwarsStats.('41043b4c-37f7-483e-b8e5-8131655289ca');

console.log('Beds destroyed: ' + player.beds);
```



## Servers

### count
Function: `PSWrapper.servers.count();`
method: `GET https://api.playerservers.com/servers`

Description: Get the amount of online servers.
Example:
```
const amount = await PSWrapper.servers.count();

console.log('Online servers: ' + amount);
```


### getOnline
Function: `PSWrapper.servers.getOnline();`
method: `GET https://api.playerservers.com/servers`

Description: Get a list of all servers by their name.
Example:
```
const servers = await PSWrapper.servers.getOnline();

console.log('Online servers: \n- ' + servers.join('\n- '));
```


### getOnlineById
Function: `PSWrapper.servers.getOnlineById();`
method: `GET https://api.playerservers.com/servers`

Description: Get a list of all servers by their id.
Example:
```
const servers = await PSWrapper.servers.getOnlineById();

console.log('Online servers: \n- ' + servers.join('\n- '));
```


### getTopPlayers
Function: `PSWrapper.servers.getTopPlayers();`
method: `GET https://api.playerservers.com/servers`

Description: Get top server by players.
Example:
```
const server = await PSWrapper.servers.getTopPlayers();

console.log('Server with the most people: ' + server.name);
```


### getTopVoted
Function: `PSWrapper.servers.getTopVoted();`
method: `GET https://api.playerservers.com/servers`

Description: Get top server by votes.
Example:
```
const server = await PSWrapper.servers.getTopVoted();

console.log('Server with the most votes: ' + server.name);
```


### getTopBoosted
Function: `PSWrapper.servers.getTopBoosted();`
method: `GET https://api.playerservers.com/servers`

Description: Get top server by boosters.
Example:
```
const server = await PSWrapper.servers.getTopBoosted();

console.log('Server with the most boosters: ' + server.name);
```


### get
Function: `PSWrapper.servers.get(NameOrId);`
method: `GET https://api.playerservers.com/server/{name or id}`
params:
-	NameOrId: name or uuid of this server

Description: Get the data of a server by its name or id.
Example:
```
const server = await PSWrapper.servers.get('Grow');

console.log('Display item of Grow: ' + server.displayitem);
```


### all
Function: `PSWrapper.servers.all();`
method: `GET https://api.playerservers.com/servers`

Description: Get the data of all online servers.
Example:
```
const servers = await PSWrapper.servers.all();

console.log('Name of the first server: ' + servers[0].name);
```