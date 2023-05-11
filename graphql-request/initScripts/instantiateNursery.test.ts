import {ExpandGerminationBool, instantiateNurseryEffect} from "./instantiateNursery";
import {GerminationTray, GerminationTrayRef} from "../../operations";

describe('instantiateNursery runs', function () {
    it('runs', function () {
        instantiateNurseryEffect()
    });

    it ('expands the Germination tray bool', function () {
        const germTray: GerminationTrayRef = ExpandGerminationBool(true)
        console.log(germTray)
    });
});