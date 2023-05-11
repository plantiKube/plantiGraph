import {GetIntentionListQuery, ModuleType} from "../../operations";

export const fnBuildGermMap = (data: GetIntentionListQuery) => {
    console.log("here we are");
    data.queryCropIntentionsList?.map((cropIntention) => {
        cropIntention?.cropIntentions.map((cropIntention) => {
           console.log(cropIntention);
        });
    });
};