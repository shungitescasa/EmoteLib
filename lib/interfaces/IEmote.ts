namespace IEmote {
    type BTTVEmoteTypes = "shared" | "channel" | "global";

    export interface BTTV {
        id: string | null,
        code: string | null,
        imageType: string | null,
        user?: {
            id?: string | null,
            name?: string | null,
            displayName?: string | null,
            providerId?: string | null
        },
        emoteType?: BTTVEmoteTypes | null
    }

    export interface FFZ {
        id: number | null,
        name: string | null,
        height: number | null,
        width: number | null,
        public: boolean | null,
        hidden: boolean | null,
        modifier: boolean | null,
        offset: string | null,
        margins: string | null,
        css: string | null,
        owner: {
            _id: number | null,
            name: string | null,
            display_name: string | null
        },
        urls: { [id: number]: string },
        status: number | null,
        usage_count: number | null,
        created_at: string | null,
        last_updated: string | null
    }

    export interface STV {
        id: string | null,
        name: string | null,
        owner: {
            id: string | null,
            twitch_id: string | null,
            login: string | null,
            display_name: string | null,
            role?: {
                id?: string | null,
                name?: string | null,
                position?: number | null,
                color?: number | null,
                allowed?: number | null,
                denied?: number | null
            },
            visibility: number | null,
            mime: string | null,
            status: number | null,
            tags: string[] | null,
            width: number[] | undefined,
            height: number[] | undefined,
            urls: [string, string][]
        }
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