export enum CriterionTypes {
  Agencies = 'agencies',
  MissionTypes = 'missionTypes',
  StatusTypes = 'statusTypes'
}

export class Criterion {
  type: CriterionType;
  id: number;
}

export type CriterionType =
  CriterionTypes.Agencies |
  CriterionTypes.MissionTypes |
  CriterionTypes.StatusTypes;
