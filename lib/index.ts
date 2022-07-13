import BTTVProvider from "./providers/BTTVProvider";
import FFZProvider from "./providers/FFZProvider";
import STVProvider from "./providers/STVProvider";
import TTVProvider from "./providers/TTVProvider";

interface EmotesLibConfiguration {
    /** Client ID from your dev.twitch.tv application. */
    client_id: string | undefined,

    /** Access token. */
    access_token: string | undefined
}

export default class EmotesLib {
    twitch: TTVProvider;
    betterttv: BTTVProvider;
    frankerfacez: FFZProvider;
    seventv: STVProvider;

    /**
     * Emote library.
     */
    constructor(config: EmotesLibConfiguration) {
        this.twitch = new TTVProvider(config.client_id as string, config.access_token as string);
        this.betterttv = new BTTVProvider(config.client_id as string, config.access_token as string);
        this.frankerfacez = new FFZProvider(config.client_id as string, config.access_token as string);
        this.seventv = new STVProvider(config.client_id as string, config.access_token as string);
    }
}