import { SearchInterface } from "../interface/interface";

export default function Search({ countryFilter, onChange }: SearchInterface) {
  return (
    <section className="d-flex flex-column my-2">
      <label>SEARCH:</label>
      <input
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          onChange(event.target.value)
        }
        type="text"
        name="countryFilter"
        value={countryFilter}
        placeholder="Start typing to filter name"
      />
    </section>
  );
}
