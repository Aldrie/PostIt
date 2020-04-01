import styled from 'styled-components/native';

export const SafeAreView = styled.SafeAreaView`
  flex: 1;
`;

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
  },
})`
`;

export const AvatarContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

export const Bottom = styled.TouchableOpacity`
  padding: 12px;
`;
