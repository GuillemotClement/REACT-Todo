export default function Button({ text, className, ...props }) {
  return (
    <button
      {...props}
      className={`rounded-lg px-3 py-2 shadow-md ${className ? className : ""}`}
    >
      {text}
    </button>
  );
}
