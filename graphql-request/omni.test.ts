import {GetFlattenedSiteArray} from "./outputDrivers/signalWatchDaemon/GetFlattenedSiteArray";
import {
    instantiateFlattenedSiteArray
} from "./initScripts/instantiateModuleMap/instantiateFlattenedSiteArray/instantiateFlattenedSiteArray";

describe('omni', function () {
    it('getsTheSiteArray', function () {
        GetFlattenedSiteArray()
    });
    it('makesTheSiteArray', function () {
        instantiateFlattenedSiteArray()
    });
});
