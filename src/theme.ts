import { extendBaseTheme } from '@chakra-ui/react';

import Accordion from './components/Accordion/theme';
import Breadcrumbs from './components/Breadcrumbs/theme';
import Button from './components/Button/theme';
import Checkbox from './components/Checkbox/theme';
import Divider from './components/Divider/theme';
import Form, {
  FormContainer,
  FormError,
  FormLabel,
} from './components/Form/theme';
import Frame from './components/Frame/theme';
import Heading from './components/Heading/theme';
import Icon from './components/Icon/theme';
import Input from './components/Input/theme';
import Link from './components/Link/theme';
import Menu from './components/Menu/theme';
import Modal from './components/Modal/theme';
import NautobotGrid from './components/NautobotGrid/theme';
import Navbar from './components/Navbar/theme';
import Popover from './components/Popover/theme';
import Progress from './components/Progress/theme';
import Select from './components/Select/theme';
import Sidebar from './components/Sidebar/theme';
import StatusIndicator from './components/StatusIndicator/theme';
import Switch from './components/Switch/theme';
import Table from './components/Table/theme';
import Tabs from './components/Tabs/theme';
import Tag from './components/Tag/theme';
import Text from './components/Text/theme';
import Tooltip from './components/Tooltip/theme';
import TreeEdge from './components/TreeEdge/theme';
import * as foundations from './foundations';

export default extendBaseTheme({
  ...foundations,
  components: {
    Accordion,
    Breadcrumbs,
    Button,
    Checkbox,
    Divider,
    Form,
    FormContainer,
    FormError,
    FormLabel,
    Frame,
    Heading,
    Icon,
    Input,
    Link,
    Menu,
    Modal,
    NautobotGrid,
    Navbar,
    Popover,
    Progress,
    Select,
    Sidebar,
    StatusIndicator,
    Switch,
    Table,
    Tabs,
    Tag,
    Text,
    Tooltip,
    TreeEdge,
  },
});
