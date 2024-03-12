import { ReactElement } from 'react';
import { BoxItem } from '../../../model/clients/combobox.api';
import classes from './Combobox.module.scss';

export function ComboboxItem(props: BoxItem): ReactElement {
  return (
    <div className={classes['option-item']}>
      <div className={classes['option-text']}>{props.text}</div>
    </div>
  );
}
