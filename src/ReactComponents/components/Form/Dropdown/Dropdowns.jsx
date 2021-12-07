export default function Dropdown({
  name,
  id,
  value,
  setDrop,
  datas,
  labelTitle,
}) {
  return (
    <label className="label" htmlFor={name}>
      <p>{labelTitle}</p>
      <select
        name={name}
        required
        id={id}
        value={value}
        onChange={(e) => setDrop(e.target.value)}
      >
        {datas.map((elt) => (
          <option key={elt.id} value={elt.label}>
            {elt.name}
          </option>
        ))}
      </select>
    </label>
  );
}
