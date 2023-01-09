export type TrainingStatusType = {
  isTrainingStarted: boolean;
  isTrainingFinished: boolean;
  numberOfNextLevel?: number;
};

export type LevelInfoType = {
  numberOfLevel: number;
  images: ImageInfoType[];
};

export type ImageInfoType = {
  id: string;
  order: number;
  image: string;
};
