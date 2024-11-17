import type { NIHScaleEnum } from "./NIHScaleEnum";
// import type { ShuhariStageEnum } from "./ShuhariStageEnum";

export default interface ISkillInfo {
    name: string;
    title: string;
    level?: NIHScaleEnum;
    year?: number;
    urlInfo?: string;
}
