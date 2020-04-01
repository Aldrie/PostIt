import styled, { css } from 'styled-components/native';

// eslint-disable-next-line import/prefer-default-export
export const StyledAvatar = styled.Image`
  ${({ size }) => css`
    width: ${`${size || '64'}px`};
    height: ${`${size || '64'}px`};
    border-radius: ${`${size || '64'}px`};
  `}
`;
