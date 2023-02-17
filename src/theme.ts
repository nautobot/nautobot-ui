import { extendBaseTheme } from '@chakra-ui/react';

import Button from './components/Button/theme';
import Divider from './components/Divider/theme';
import Frame from './components/Frame/theme';
import Heading from './components/Heading/theme';
import Icon from './components/Icon/theme';
import Modal from './components/Modal/theme';
import Popover from './components/Popover/theme';
import Tabs from './components/Tabs/theme';
import Text from './components/Text/theme';
import * as foundations from './foundations';

export default extendBaseTheme({
  ...foundations,
  components: {
    Button,
    Divider,
    Frame,
    Heading,
    Icon,
    Modal,
    Popover,
    Tabs,
    Text,
  },
});
