import React, { memo } from 'react';

import { Text as StyledText } from './styles';

const Text = ({ children, ...rest }) => (
  <StyledText {...rest}>
    {children}
  </StyledText>
);

export default memo(Text);
