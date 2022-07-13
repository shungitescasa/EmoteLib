import IEmote from "../interfaces/IEmote";
import IEmoteProvider from "../interfaces/IEmoteProvider";
import axios from "axios";
import ApiTwitch from "../utils/Helix";

class STVProvider implements IEmoteProvider {
    private client_id: string;
    private access_token: string;

    constructor(client_id: string, access_token: string) {
        this.client_id = client_id;
        this.access_token = access_token;
    }

    async getChannelEmotes(target: string): Promise<IEmote.STV[] | null> {
        try {
            var emotes: IEmote.STV[] = [];

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
                "https://api.7tv.app/v2/users/" + user?.name + "/emotes",
                {
                    responseType: "json"
                }
            )
                .catch((reason: any) => {
                    throw new Error(reason);
                })
                .then(async (response) => {
                    var api_emotes: IEmote.STV[] = response.data;

                    api_emotes.forEach(async (emote) => {
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
    async getGlobalEmotes(): Promise<IEmote.STV[] | null> {
        try {
            var emotes: IEmote.STV[] = [];

            await axios.get(
                "https://api.7tv.app/v2/emotes/global",
                {
                    responseType: "json"
                }
            )
                .catch((reason: any) => {
                    throw new Error(reason);
                })
                .then(async (response) => {
                    var api_emotes: IEmote.STV[] = response.data;

                    api_emotes.forEach(async (emote) => {
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

export default STVProvider;