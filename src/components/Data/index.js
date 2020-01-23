import React from 'react';
import DataBody from './style';
import { Dot } from '../../utils/icons';

const Data = ({ data, className }) => (
  <DataBody className={className}>
    <Dot alt="dot" className="data__icon" />
    <p className="data__text">{data}</p>
  </DataBody>
);

export default Data;
