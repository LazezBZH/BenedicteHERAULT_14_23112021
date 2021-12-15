export default function search(elements, toSearch) {
  return elements.filter(
    (el) =>
      el.firstName.toLowerCase().indexOf(toSearch.toLowerCase()) > -1 ||
      el.lastName.toLowerCase().indexOf(toSearch.toLowerCase()) > -1 ||
      el.startDate.indexOf(toSearch) > -1 ||
      el.department.toLowerCase().indexOf(toSearch.toLowerCase()) > -1
  );
}
