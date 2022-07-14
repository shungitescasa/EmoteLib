namespace IEmote {
    type BTTVEmoteTypes = "shared" | "channel" | "global";

    export interface BTTV {
        id: string | undefined,
        code: string | undefined,
        imageType: string | undefined,
        user?: {
            id?: string | undefined,
            name?: string | undefined,
            displayName?: string | undefined,
            providerId?: string | undefined
        },
        emoteType?: BTTVEmoteTypes | undefined
    }

    export interface FFZ {
        id: number | undefined,
        name: string | undefined,
        height: number | undefined,
        width: number | undefined,
        public: boolean | undefined,
        hidden: boolean | undefined,
        modifier: boolean | undefined,
        offset: string | undefined,
        margins: string | undefined,
        css: string | undefined,
        owner: {
            _id: number | undefined,
            name: string | undefined,
            display_name: string | undefined
        },
        urls: { [id: number]: string },
        status: number | undefined,
        usage_count: number | undefined,
        created_at: string | undefined,
        last_updated: string | undefined
    }

    export interface STV {
        id: string | undefined,
        name: string | undefined,
        owner: {
            id: string | undefined,
            twitch_id: string | undefined,
            login: string | undefined,
            display_name: string | undefined,
            role?: {
                id?: string | undefined,
                name?: string | undefined,
                position?: number | undefined,
                color?: number | undefined,
                allowed?: number | undefined,
                denied?: number | undefined
            }
        },
        visibility: number | undefined,
        mime: string | undefined,
        status: number | undefined,
        tags: string[] | undefined,
        width: number[] | undefined,
        height: number[] | undefined,
        urls: [string, string][]
    }

    export interface TTV {
        id: string | undefined,
        name: string | undefined,
        images: { [id: string]: string },
        tier: string | undefined,
        emote_type: string | undefined,
        emote_set_id: string | undefined,
        format: string[] | undefined,
        scale: string[] | undefined,
        theme_mode: string[] | undefined
    }
}

export default IEmote;