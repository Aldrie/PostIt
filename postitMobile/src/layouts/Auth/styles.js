import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
  },
})`
`;

export const Header = styled.View`
  background: ${({ color }) => color || '#fff'};
  padding: 12px;
  align-items: center;
`;

export const Presentation = styled.View`
  justify-content: center;
  align-items: center;
  flex: .7;
`;

export const Form = styled.View`
  flex: 1;
  justify-content: flex-start;
  padding: 0 32px;
`;

export const BottomText = styled.TouchableOpacity`
  margin: 16px 0;
  align-items: center;
`;
