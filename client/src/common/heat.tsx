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
