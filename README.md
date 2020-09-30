# PSWrapper
An api wrapper for https://playerservers.com




## Contents
* [General info](#general-info)
* [API References](#api-references)




## General Info
This project is made to simplify the CubedCraft API for NodeJS.




## API References

## Requests

#### getPlayerCount
Function: `PSWrapper.getPlayerCount();` \newline <br/>
Description: Get the total player count on cubedcraft.  <br/>
Example:
```
const players = await PSWrapper.getPlayerCount();

console.log('Online players: ' + players);
```



## Players

#### get
Function: `PSWrapper.players.get(uuid);` <br/>
params:
-	uuid: uuid of the player

method: `GET https://api.playerservers.com/players/{uuid}` <br/>
Description: Get the data of a player. <br/>
Example:
```
const player = await PSWrapper.players.get('41043b4c-37f7-483e-b8e5-8131655289ca');

console.log('Username: ' + player.username);
```


#### getWarzoneStats
Function: `PSWrapper.players.getWarzoneStats(uuid);` <br/>
params:
-	uuid: uuid of the player

method: `GET https://api.playerservers.com/players/{uuid}/warzone` <br/>
Description: Get the Warzone stats of a player. <br/>
Example:
```
const player = await PSWrapper.players.getWarzoneStat('41043b4c-37f7-483e-b8e5-8131655289ca');

console.log('Wool destroyed: ' + player.wool);
```


#### getTntwarsStats
Function: `PSWrapper.players.getTntwarsStats(uuid);` <br/>
params:
-	uuid: uuid of the player

method: `GET https://api.playerservers.com/players/{uuid}/tntwars` <br/>
Description: Get the TNTWars stats of a player. <br/>
Example:
```
const player = await PSWrapper.players.getTntwarsStats('41043b4c-37f7-483e-b8e5-8131655289ca');

console.log('Kills: ' + player.kills);
```


#### getBedwarsStats
Function: `PSWrapper.players.getBedwarsStats(uuid);` <br/>
params:
-	uuid: uuid of the player

method: `GET https://api.playerservers.com/players/{uuid}/bedwars` <br/>
Description: Get the Bedwars stats of a player. <br/>
Example:
```
const player = await PSWrapper.players.getBedwarsStats('41043b4c-37f7-483e-b8e5-8131655289ca');

console.log('Beds destroyed: ' + player.beds);
```



## Servers

#### count
Function: `PSWrapper.servers.count();` <br/>
method: `GET https://api.playerservers.com/servers` <br/>

Description: Get the amount of online servers. <br/>
Example:
```
const amount = await PSWrapper.servers.count();

console.log('Online servers: ' + amount);
```


#### getOnline
Function: `PSWrapper.servers.getOnline();` <br/>
method: `GET https://api.playerservers.com/servers` <br/>

Description: Get a list of all servers by their name. <br/>
Example:
```
const servers = await PSWrapper.servers.getOnline();

console.log('Online servers: \n- ' + servers.join('\n- '));
```


#### getOnlineById
Function: `PSWrapper.servers.getOnlineById();` <br/>
method: `GET https://api.playerservers.com/servers` <br/>

Description: Get a list of all servers by their id. <br/>
Example:
```
const servers = await PSWrapper.servers.getOnlineById();

console.log('Online servers: \n- ' + servers.join('\n- '));
```


#### getTopPlayers
Function: `PSWrapper.servers.getTopPlayers();` <br/>
method: `GET https://api.playerservers.com/servers` <br/>

Description: Get top server by players. <br/>
Example:
```
const server = await PSWrapper.servers.getTopPlayers();

console.log('Server with the most people: ' + server.name);
```


#### getTopVoted
Function: `PSWrapper.servers.getTopVoted();` <br/>
method: `GET https://api.playerservers.com/servers` <br/>

Description: Get top server by votes. <br/>
Example:
```
const server = await PSWrapper.servers.getTopVoted();

console.log('Server with the most votes: ' + server.name);
```


#### getTopBoosted
Function: `PSWrapper.servers.getTopBoosted();` <br/>
method: `GET https://api.playerservers.com/servers` <br/>

Description: Get top server by boosters. <br/>
Example:
```
const server = await PSWrapper.servers.getTopBoosted();

console.log('Server with the most boosters: ' + server.name);
```


#### get
Function: `PSWrapper.servers.get(NameOrId);` <br/>
params:
-	NameOrId: name or uuid of this server

method: `GET https://api.playerservers.com/server/{name or id}` <br/>
Description: Get the data of a server by its name or id. <br/>
Example:
```
const server = await PSWrapper.servers.get('Grow');

console.log('Display item of Grow: ' + server.displayitem);
```


#### all
Function: `PSWrapper.servers.all();` <br/>
method: `GET https://api.playerservers.com/servers` <br/>

Description: Get the data of all online servers. <br/>
Example:
```
const servers = await PSWrapper.servers.all();

console.log('Name of the first server: ' + servers[0].name);
```
