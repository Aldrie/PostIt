import React from 'react';
import { DrawerItemList } from '@react-navigation/drawer';

import {
  SafeAreView, Container, AvatarContainer,
} from './styles';
import Avatar from '~/components/Avatar';

const CustomDrawer = (props) => (
  <SafeAreView>
    <Container>
      <AvatarContainer>
        <Avatar size="124" />
      </AvatarContainer>
      <DrawerItemList {...props} />
    </Container>
  </SafeAreView>
);

export default CustomDrawer;
