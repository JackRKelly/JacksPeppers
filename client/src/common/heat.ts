export const heatSwitch = (heat: number): string => {
  switch (heat) {
    case 1:
      return "Sweet";
    case 2:
      return "Mild";
    case 3:
      return "Hot";
    case 4:
      return "Very Hot";
    case 5:
      return "Extremely Hot";
    default:
      return "";
  }
};

export const heatSwitchColor = (heat: number): string => {
  switch (heat) {
    case 1:
      return "#00a851";
    case 2:
      return "#7dc242";
    case 3:
      return "#ecc304";
    case 4:
      return "#f37732";
    case 5:
      return "#ed2126";
    default:
      return "";
  }
};
