import IEmote from "../interfaces/IEmote";
import IEmoteProvider from "../interfaces/IEmoteProvider";
import axios from "axios";
import ApiTwitch from "../utils/Helix";

class BTTVProvider implements IEmoteProvider {
    private client_id: string;
    private access_token: string;

    constructor(client_id: string, access_token: string) {
        this.client_id = client_id;
        this.access_token = access_token;
    }

    async getChannelEmotes(target: string): Promise<IEmote.BTTV[] | null> {
        try {
            var emotes: IEmote.BTTV[] = [];

            var user: ApiTwitch.ApiUser | null = {
                id: undefined,
                name: undefined
            }

            if (!isNaN(parseInt(target))) {
                user = await ApiTwitch.getUserById(parseInt(target).toString(), this.client_id, this.access_token);
            } else {
                user = await ApiTwitch.getUserByName(target, this.client_id, this.access_token);
            }

            if (user == null) return Promise.resolve(null);

            await axios.get(
                "https://api.betterttv.net/3/cached/users/twitch/" + user?.id,
                {
                    responseType: "json"
                }
            )
                .catch((reason: any) => {
                    throw new Error(reason);
                })
                .then(async (response) => {
                    var user: { [id: string]: any } = response.data;
                    var channel_emotes: [IEmote.BTTV] = user.channelEmotes;
                    var shared_emotes: [IEmote.BTTV] = user.sharedEmotes;

                    channel_emotes.forEach(async (value: IEmote.BTTV) => {
                        var emote: IEmote.BTTV = value;
                        emote.emoteType = "channel";

                        emotes.push(emote);
                    });

                    shared_emotes.forEach(async (value: IEmote.BTTV) => {
                        var emote: IEmote.BTTV = value;
                        emote.emoteType = "shared";

                        emotes.push(emote);
                    });
                })
                .finally(() => {

                });

            return Promise.resolve(emotes);
        } catch (err: any) {
            throw new Error(err);
        }
    }
    async getGlobalEmotes(): Promise<IEmote.BTTV[] | null> {
        try {
            var emotes: IEmote.BTTV[] = [];

            await axios.get(
                "https://api.betterttv.net/3/cached/emotes/global",
                {
                    responseType: "json"
                }
            )
                .catch((reason: any) => {
                    throw new Error(reason);
                })
                .then(async (response) => {
                    var api_emotes: [IEmote.BTTV] = response.data;

                    api_emotes.forEach(async (value: IEmote.BTTV) => {
                        var emote: IEmote.BTTV = value;
                        emote.emoteType = "global";

                        emotes.push(emote);
                    });
                })
                .finally(() => {

                });

            return Promise.resolve(emotes);
        } catch (err: any) {
            throw new Error(err);
        }
    }
}

export default BTTVProvider;