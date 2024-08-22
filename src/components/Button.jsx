export default function Button({ text, ...props }) {
  return (
    <button
      {...props}
      className="rounded-lg bg-blue-400 px-3 py-2 text-white shadow-md hover:bg-blue-700"
    >
      {text}
    </button>
  );
}
