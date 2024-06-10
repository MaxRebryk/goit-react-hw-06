export default function SearchBox({ value, onSearch }) {
  return (
    <div>
      <label htmlFor="search">Find Contacts by name</label>
      <input
        onChange={() => onSearch(event.target.value)}
        value={value}
        type="text"
        name="search"
      />
    </div>
  );
}
