import IEmote from "./IEmote";

type IEmote = IEmote.BTTV | IEmote.FFZ | IEmote.STV | IEmote.TTV;

interface IEmoteProvider {

    getChannelEmotes(target: string): Promise<IEmote[] | null>;
    getGlobalEmotes(): Promise<IEmote[] | null>;
}

export default IEmoteProvider;