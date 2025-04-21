'use client';

import { kebabCase } from 'lodash';
import { ChangeEvent, useId } from 'react';

import Images from '@/images';
import Styles from '@/styles';

type Props = {
  label: string;
  onChange: (index: number) => void;
  options: string[];
  value: number;
};

const scss = Styles.Components.Store.Item.FormSelect;

function Select({ label = '', onChange, options = [], value = 0 }: Props) {
  const uuid = useId();

  const handleOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selection = (event.target as HTMLSelectElement).value;

    onChange(Number(selection));
  };

  return (
    <div className={scss.container}>
      <label className={scss.label} htmlFor={uuid}>
        {label}
      </label>
      <select
        className={scss.select}
        id={uuid}
        name={kebabCase(label.toLowerCase())}
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
