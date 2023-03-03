import { extendBaseTheme } from '@chakra-ui/react';

import Accordion from './components/Accordion/theme';
import Button from './components/Button/theme';
import Checkbox from './components/Checkbox/theme';
import Divider from './components/Divider/theme';
import Frame from './components/Frame/theme';
import Heading from './components/Heading/theme';
import Icon from './components/Icon/theme';
import Input from './components/Input/theme';
import Link from './components/Link/theme';
import Modal from './components/Modal/theme';
import Popover from './components/Popover/theme';
import Sidebar from './components/Sidebar/theme';
import StatusIndicator from './components/StatusIndicator/theme';
import Switch from './components/Switch/theme';
import Table from './components/Table/theme';
import Tabs from './components/Tabs/theme';
import Tag from './components/Tag/theme';
import Text from './components/Text/theme';
import TreeEdge from './components/TreeEdge/theme';
import * as foundations from './foundations';

export default extendBaseTheme({
  ...foundations,
  components: {
    Accordion,
    Button,
    Checkbox,
    Divider,
    Frame,
    Heading,
    Icon,
    Input,
    Link,
    Modal,
    Popover,
    Sidebar,
    StatusIndicator,
    Switch,
    Table,
    Tabs,
    Tag,
    Text,
    TreeEdge,
  },
});
