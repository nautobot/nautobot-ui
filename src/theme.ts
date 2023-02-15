import { extendBaseTheme } from '@chakra-ui/react';

import Button from './components/Button/theme';
import Divider from './components/Divider/theme';
import Heading from './components/Heading/theme';
import Icon from './components/Icon/theme';
import Popover from './components/Popover/theme';
import Text from './components/Text/theme';
import * as foundations from './foundations';

export default extendBaseTheme({
  ...foundations,
  components: {
    Button,
    Divider,
    Heading,
    Icon,
    Popover,
    Text,
  },
});
