import styled from 'styled-components/native';
import VectIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { hexToRgba } from '~/utils/styleUtils';

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom-color: ${({ theme, color }) => theme.input[color].color};
  border-bottom-width: 1.6px;
  border-radius: 4px;
  padding: 0 4px;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? `${marginBottom}px` : '0')};
`;

export const Input = styled.TextInput`
  color: ${({ theme, color }) => theme.input[color].text};
  font-family: 'JosefinSans-Regular';
  font-size: 24px;
  flex: 1;
  
`;

export const IconButton = styled.TouchableOpacity`
  align-items: flex-end;
  flex: .1;
  padding: 12px 0;
`;

export const StartIcon = styled.View`
  
`;

export const Icon = styled(VectIcons)`
  color: ${({ theme, color }) => hexToRgba(theme.input[color].text, 0.5)};
  font-size: 24px;
`;
