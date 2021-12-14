export default function Table({ items }) {
  return (
    <>
      {items &&
        items.map((item, index) => (
          <tbody key={index}>
            <tr>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.startDate}</td>
              <td>{item.department}</td>
              <td>{item.birthDate}</td>
              <td>{item.street}</td>
              <td>{item.city}</td>
              <td>{item.State}</td>
              <td>{item.zipCode}</td>
            </tr>
          </tbody>
        ))}
    </>
  );
}
