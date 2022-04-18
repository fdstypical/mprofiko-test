import Vue from "vue";

// general
import SvgIcon from "@/components/SvgIcon.vue";
import MainHeader from "@/components/MainHeader.vue";
import MainLogo from "@/components/MainLogo.vue";
import MainNav from "@/components/MainNav.vue";

// base
import BaseButton from "./base/BaseButton.vue";
import BaseInput from "./base/BaseInput.vue";

// elements
import BaseLoader from "./elements/BaseLoader.vue";

// wrappers
import PasswordedInput from "./wrappers/PasswordedInput.vue";

Vue.component("svg-icon", SvgIcon);
Vue.component("main-header", MainHeader);
Vue.component("main-logo", MainLogo);
Vue.component("main-nav", MainNav);
Vue.component("base-button", BaseButton);
Vue.component("base-input", BaseInput);
Vue.component("base-loader", BaseLoader);
Vue.component("passworded-input", PasswordedInput);
