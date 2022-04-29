/// <reference types="react-scripts" />

export type Data = {
  labels: string[],
  datasets: [{
    label: string,
    backgroundColor: string[] | string,
    borderColor: string,
    data: string[],
  }],
};
