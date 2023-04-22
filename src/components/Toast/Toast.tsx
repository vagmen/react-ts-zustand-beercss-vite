interface IToast {
  type: "error" | "warning" | "info" | "done";
  message: string | null;
}

export const Toast = ({ type = "info", message }: IToast) => {
  return message ? (
    <div
      className={`toast white-text active ${type === "error" ? "pink" : ""} ${
        type === "warning" ? "orange" : ""
      } ${type === "done" ? "green" : ""} ${type === "info" ? "blue" : ""} `}
    >
      <i>{type}</i>
      <span>{message}</span>
    </div>
  ) : (
    <></>
  );
};
