import React from 'react';

import { StyledAvatar } from './styles';

import emptyAvatar from '~/assets/empty-avatar.png';

const Avatar = ({ src, size }) => (
  <StyledAvatar
    size={size}
    resizeMode="cover"
    {...{ source: src ? { uri: src } : emptyAvatar }}
  />
);

export default Avatar;
