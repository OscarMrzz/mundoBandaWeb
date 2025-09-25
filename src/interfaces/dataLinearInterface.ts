export interface DataLinearInterface {
  labels: string[];
  datasets: Array<{
    label: string;
    data: (number | null)[];
    tension: number;
    fill: boolean;
    borderColor: string;
    backgroundColor: string;
    pointBackgroundColor: string;
    pointBorderColor: string;
  }>;
}
