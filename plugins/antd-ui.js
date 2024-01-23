import Vue from "vue";
import {
  Upload,
  Modal,
  Progress,
  Radio,
  Icon,
  Input,
  Spin,
  Pagination,
  Skeleton,
  Empty,
  FormModel,
  message,
  notification,
  Select,
  DatePicker
} from "ant-design-vue";
Vue.prototype.$notification = notification;
const { info, success, error, warning, confirm } = Modal;
Vue.prototype.$notification = notification;
Vue.prototype.$message = message;
Vue.prototype.$confirm = confirm;
Vue.use(DatePicker);
Vue.use(Select);
Vue.use(Skeleton);
Vue.use(Progress);
Vue.use(FormModel);
Vue.use(Empty);
Vue.use(Upload);
Vue.use(Modal);
Vue.use(Radio);
Vue.use(Icon);
Vue.use(Input);
Vue.use(Spin);
Vue.use(Pagination);
