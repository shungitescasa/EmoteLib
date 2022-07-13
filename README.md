<div align=center>
    <h1>
        <img src="https://cdn.7tv.app/emote/61bf1cd52a281efd57b6f6b4/1x">
        EmotesLib
    </h1>
</div>

Node.js library for getting global emotes as well as channel emotes.<br>
It supports 4 providers:
- [Twitch](https://twitch.tv/)
- [BetterTTV](https://betterttv.com/)
- [FrankerFaceZ](https://frankerfacez.com/)
- [7TV](https://7tv.app/)

## Installation guide:
1. Install the library from Node Package Manager:
```bash
$ npm install emoteslib
```

## Usage:
### Initialization:
```typescript
import EmotesLib from "emoteslib";

// "client_id" and "access_token" are needed to convert the username into a user ID.
const emotes = new EmotesLib({
    client_id: "123456789abcdef",
    access_token: "123456789abcdef"
});
```
### Get the channel emotes:
```typescript
// Getting the channel emotes by name:
console.log(await emotes.twitch.getChannelEmotes("ilotterytea"));

console.log(await emotes.betterttv.getChannelEmotes("ilotterytea"));

console.log(await emotes.frankerfacez.getChannelEmotes("ilotterytea"));

console.log(await emotes.seventv.getChannelEmotes("ilotterytea"));

// Also, you can get the channel emotes by user ID:
// NOTE: Entering the user ID as a number will cause an error. Make it a string.
console.log(await emotes.twitch.getChannelEmotes("191400264"));

console.log(await emotes.betterttv.getChannelEmotes("191400264"));

console.log(await emotes.frankerfacez.getChannelEmotes("191400264"));

console.log(await emotes.seventv.getChannelEmotes("191400264"));
```
### Get the global emotes:
```typescript
console.log(await emotes.twitch.getGlobalEmotes());

console.log(await emotes.betterttv.getGlobalEmotes());

console.log(await emotes.frankerfacez.getGlobalEmotes());

console.log(await emotes.seventv.getGlobalEmotes());
```

## Dependencies:
- [Axios]() (used to send requests to the API. In the future it will be replaced by the built-in XMLHttpRequest).