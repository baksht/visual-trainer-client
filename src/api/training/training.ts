import { AxiosResponse } from 'axios';

import { TrainingStatusType, LevelInfoType } from 'src/api';
import agent from 'src/api/agent';
import { ENDPOINTS } from 'src/shared/constants';
import { StepResultType } from 'src/store/step-store/types';

export function getStatus(): Promise<AxiosResponse<TrainingStatusType>> {
  return agent.get<TrainingStatusType>(ENDPOINTS.training.getStatus);
}

export function getLevel(numberOfLevel: number): Promise<AxiosResponse<LevelInfoType>> {
  return agent.get<LevelInfoType>(`${ENDPOINTS.training.getLevel}/${numberOfLevel}`);
}

export function completeLevel(
  numberOfLevel: number,
  referenceViewingTime: number,
  stepsResults: StepResultType[]
): Promise<AxiosResponse<TrainingStatusType>> {
  return agent.post<TrainingStatusType>(ENDPOINTS.training.levelComplete, {
    numberOfLevel,
    referenceViewingTime,
    stepsResults,
  });
}
