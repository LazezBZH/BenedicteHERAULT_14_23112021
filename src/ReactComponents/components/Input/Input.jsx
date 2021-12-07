export default function Input({ name, labelTitle, value, setInput }) {
  return (
    <label className="label" htmlFor={name}>
      <p>{labelTitle}</p>
      <input
        type="text"
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
