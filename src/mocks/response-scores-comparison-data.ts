export enum ModelEnum {
  EIGHT_B = "8b-model",
  SEVENTY_B = "70b-model",
}

export const eightBModelData = [
  { x: 10, y: 25, z: 18 },
  { x: 20, y: 24, z: 20 },
  { x: 25, y: 41, z: 22 },
  { x: 30, y: 39, z: 25 },
  { x: 40, y: 50, z: 28 },
  { x: 55, y: 60, z: 30 },
  { x: 60, y: 65, z: 32 },
  { x: 70, y: 75, z: 34 },
  { x: 80, y: 85, z: 36 },
  { x: 90, y: 95, z: 38 },
]

export const seventyBModelData = [
  { x: 40, y: 26, z: 18 },
  { x: 50, y: 24, z: 20 },
  { x: 55, y: 35, z: 22 },
  { x: 60, y: 45, z: 25 },
  { x: 70, y: 46, z: 28 },
  { x: 75, y: 60, z: 30 },
  { x: 80, y: 70, z: 32 },
  { x: 85, y: 80, z: 34 },
  { x: 90, y: 90, z: 36 },
  { x: 95, y: 98, z: 38 },
]

export const responseScoresComparisonData = {
  [ModelEnum.EIGHT_B]: eightBModelData,
  [ModelEnum.SEVENTY_B]: seventyBModelData,
}
