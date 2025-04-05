'use client';

import Images from '@/images';
import Styles from '@/styles';

import { useViewModel } from './page.component.form.select.viewModel';

type Props = {
  label: string;
  onChange: (index: number) => void;
  options: string[];
  value: number;
};

const scss = Styles.Pages.Store.Item.PageComponentFormSelect;

function Select({ label = '', onChange, options = [], value = 0 }: Props) {
  const { handleOnChange, name, uuid } = useViewModel(label, onChange);

  return (
    <div className={scss.container}>
      <label className={scss.label} htmlFor={uuid}>
        {label}
      </label>
      <select
        className={scss.select}
        id={uuid}
        name={name}
        onChange={handleOnChange}
        value={value}
      >
        {options.map((option: string, index: number) => (
          <option key={index} value={index}>
            {option}
          </option>
        ))}
      </select>
      <Images.Icons.Chevron className={scss.chevron} down />
    </div>
  );
}

export default Select;
