export default function ({ message, error }) {
  if (message === null) {
    return null;
  }
  return <div className={error ? "error" : "success"}>{message}</div>;
}
