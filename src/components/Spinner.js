import React from 'react';
import { ActivityIndicator } from 'react-native';

import { FlexCentered } from '../shared/styledComponents';

const Spinner = () => (
  <FlexCentered>
    <ActivityIndicator size="large" />
  </FlexCentered>
);
export default Spinner;
