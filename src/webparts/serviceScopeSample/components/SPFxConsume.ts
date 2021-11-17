
import { DefaultHeaders, DefaultInit } from "@pnp/sp";
import { combine, isUrlAbsolute, TimelinePipe } from "@pnp/core";
import { BrowserFetchWithRetry, DefaultParse, Queryable } from "@pnp/queryable";

export function SPFxConsume(abswebUrl: string): TimelinePipe<Queryable> {

    return (instance: Queryable) => {

        instance.using(
            DefaultHeaders(),
            DefaultInit(),
            BrowserFetchWithRetry(),
            DefaultParse());

        // we want to fix up the url first
        instance.on.pre.prepend(async (url, init, result) => {

            if (!isUrlAbsolute(url)) {
                url = combine(abswebUrl, url);
            }

            return [url, init, result];
        });

        return instance;
    };
}