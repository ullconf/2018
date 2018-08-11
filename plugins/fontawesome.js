import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCalendar,
  faMapMarkerQuestion
} from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faCalendar, faMapMarkerQuestion);

Vue.component("font-awesome-icon", FontAwesomeIcon);
