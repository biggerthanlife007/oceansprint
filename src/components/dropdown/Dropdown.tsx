import { BiChevronDown } from "react-icons/bi";
import styles from "./Dropdown.module.scss";
import type { DropdownProps } from "./Dropdown.props";

const Dropdown: React.FC<DropdownProps> = ({
  label,
  name,
  options,
  dropdownValue,
  onChange,
  className,
  required,
}) => {
  return (
    <div className={`${styles.select__wrapper} ${className}`}>
      {label && (
        <label htmlFor={name} className={` ${styles.label}`}>
          <div>{label}</div>
        </label>
      )}

      <select
        className={`${styles.select} ${styles.customSelect} ${className}`}
        value={dropdownValue}
        onChange={onChange}
        required={required}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
