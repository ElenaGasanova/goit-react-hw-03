import s from "./SearchBox.module.css";

export const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={s.fornWrapper}>
      <form>
        <label className={s.label}>
          <span>Find contacts by name</span>
          <input
            className={s.input}
            value={value}
            onChange={(e) => onFilter(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
};
