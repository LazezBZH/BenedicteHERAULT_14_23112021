export default function Dropdown({
  name,
  value,
  setDrop,
  datas,
  labelTitle,
  labelTitle2,
}) {
  return (
    <label className="label" htmlFor={name}>
      <p>{labelTitle}</p>
      <select
        name={name}
        required
        value={value}
        onChange={(e) => setDrop(e.target.value)}
      >
        {datas.map((elt) => (
          <option key={elt.id} value={elt.label}>
            {elt.name}
          </option>
        ))}
      </select>
      <p>{labelTitle2}</p>
    </label>
  );
}
