import styled from 'styled-components/native';

// eslint-disable-next-line import/prefer-default-export
export const Text = styled.Text`
  color: ${({ theme, color }) => theme[color || 'text']?.text || color};
  font-family: ${({ bold }) => (bold ? 'JosefinSans-Bold' : 'JosefinSans-Regular')};
  font-size: ${({ size }) => (size ? `${size}px` : '24px')};
`;
