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

export const convertToKind = (c: Color): ColorKind => {
  switch (c.name) {
    case "Red":
      return ColorKind.Red;
    case "Orange":
      return ColorKind.Orange;
    case "Purple":
      return ColorKind.Purple;
    case "Pink":
      return ColorKind.Pink;
    case "Peach":
      return ColorKind.Peach;
    case "White":
      return ColorKind.White;
    case "Yellow":
      return ColorKind.Yellow;
    case "Lime":
      return ColorKind.Lime;
    case "Brown":
      return ColorKind.Brown;
    case "Black":
      return ColorKind.Black;
    case "Green":
      return ColorKind.Green;
  }
  return ColorKind.Red;
};

export const colorName = (kind: ColorKind): string => {
  switch (kind) {
    case ColorKind.Red:
      return "Red";
    case ColorKind.Orange:
      return "Orange";
    case ColorKind.Purple:
      return "Purple";
    case ColorKind.Pink:
      return "Pink";
    case ColorKind.Peach:
      return "Peach";
    case ColorKind.White:
      return "White";
    case ColorKind.Yellow:
      return "Yellow";
    case ColorKind.Lime:
      return "Lime";
    case ColorKind.Brown:
      return "Brown";
    case ColorKind.Black:
      return "Black";
    case ColorKind.Green:
      return "Green";
  }
};

export const toColor = (arr: string[]): Color => {
  return { name: arr[0], rgb: arr[1] };
};

export const colors = (): Color[] => {
  return Object.entries(ColorKind).map(toColor);
};
