import { createAppContainer } from 'react-navigation';
import Amplify from 'aws-amplify';
import awsmobile from './src/aws-exports';

import { RootStack } from './src/stacks';

Amplify.configure(awsmobile);

export default createAppContainer(RootStack);
