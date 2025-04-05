'use client';

import { kebabCase } from 'lodash';
import { ChangeEvent, useId } from 'react';

import Images from '@/images';
import styles from '@/styles/components/store/select.module.scss';

type Props = {
  id: string;
  onChange: (index: number) => void;
  options: string[];
  value: number;
};

function Select({ id, label, onChange, options, value }: Props) {
  const uuid = useId();

  const handleOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selection = (event.target as HTMLSelectElement).value;

    onChange(Number(selection));
  };

  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={uuid}>
        {label}
      </label>
      <select
        className={styles.select}
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
      <Images.Icons.Chevron className={styles.chevron} down />
    </div>
  );
}

export default Select;
