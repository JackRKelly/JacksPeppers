export enum ColorKind {
  Red = "rgb(255, 0, 0)",
  Orange = "rgb(255, 128, 0)",
  Purple = "rgb(153, 51, 255)",
  Pink = "rgb(255, 0, 255)",
  Peach = "rgb(255, 204, 153)",
  White = "rgb(255, 255, 255)",
  Yellow = "rgb(255, 255, 0)",
  Lime = "rgb(64, 255, 64)",
  Brown = "rgb(102, 51, 0)",
  Black = "rgb(0, 0, 0)",
  Green = "rgb(0, 89, 0)",
}

interface Color {
  name: string;
  rgb: string;
}

const toColor = (arr: string[]): Color => {
  return { name: arr[0], rgb: arr[1] };
};

export const colors = (): Color[] => {
  return Object.entries(ColorKind).map(toColor);
};
