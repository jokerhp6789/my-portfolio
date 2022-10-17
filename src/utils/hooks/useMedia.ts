/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useMemo, useState } from "react";

export function useMedia(query: string) {
    if (typeof window === undefined) {
        // if not on client => return false
        return false;
    }

    const media = useMemo(() => window.matchMedia(query), [query]);
    const [state, setState] = useState(media.matches);

    console.log({ media });

    useEffect(() => {
        const onChangeMedia = () => {
            console.log({ media });
            setState(media?.matches);
        };

        if (media.addEventListener) {
            media.addEventListener("change", onChangeMedia);
        } else {
            // noinspection JSDeprecatedSymbols
            media.addListener(onChangeMedia);
        }

        return () => {
            if (media.removeEventListener) {
                media.removeEventListener("change", onChangeMedia);
            } else {
                // noinspection JSDeprecatedSymbols
                media.removeListener(onChangeMedia);
            }
        };
    }, [media]);

    return state;
}

declare type DeviceType = "desktop" | "tablet" | "mobile";

export function useDevice(): DeviceType {
    let device: DeviceType = "desktop";
    if (useMedia("(max-width: 575px")) {
        device = "mobile";
    }
    // if (useMedia("(max-width: 768px")) {
    //     device = "tablet";
    // }
    return device;
}
