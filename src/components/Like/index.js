import React from 'react';
import LikeBody from './style';
import { Like as Icon } from '../../utils/icons';

const Like = ({ amount, fill, stroke }) => (
  <LikeBody>
    <Icon fill={fill} stroke={stroke} />
    <p className="like__text">{amount}</p>
  </LikeBody>
);

export default Like;
