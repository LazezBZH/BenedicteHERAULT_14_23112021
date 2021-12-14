export default function Input({ type, name, labelTitle, value, setInput }) {
  return (
    <label className="label" htmlFor={name}>
      <p>{labelTitle}</p>
      <input
        type={type}
        name={name}
        value={value}
        required
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
    </label>
  );
}
