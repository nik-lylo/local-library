export interface ISnackbar {
  open: boolean;
  status: "success" | "error" | "info" | "warning";
  text: string;
}
