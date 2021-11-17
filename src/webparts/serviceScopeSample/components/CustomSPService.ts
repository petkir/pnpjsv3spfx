import { ServiceKey, ServiceScope } from "@microsoft/sp-core-library";
import { PageContext } from '@microsoft/sp-page-context';

import { DefaultInit, SPFI, SPFx } from '@pnp/sp';
import "@pnp/sp/webs";
import { SPFxConsume } from "./SPFxConsume";

export interface ICustomSPService{
    getWebTitle():Promise<string>;
}





export class CustomSPService implements ICustomSPService{
    public static readonly serviceKey: ServiceKey<ICustomSPService> =
ServiceKey.create<ICustomSPService>('myuniqueServiceKey', CustomSPService);
private _pageContext: PageContext;

private _pnpjssp: SPFI=null;

constructor(serviceScope: ServiceScope) {
    serviceScope.whenFinished(() => {
        this._pageContext = serviceScope.consume(PageContext.serviceKey);
        this._pnpjssp =   new SPFI().using(SPFxConsume(this._pageContext.web.absoluteUrl));
    
    });
}
    async getWebTitle(): Promise<string> {
        debugger;
        const web = await this._pnpjssp.web();
        debugger;
        return web.Title;
    }
}