import Vue from "vue";

// general
import SvgIcon from "./SvgIcon.vue";

// base
import BaseButton from "./base/BaseButton.vue";
import BaseInput from "./base/BaseInput.vue";

// wrappers
import PasswordedInput from "./wrappers/PasswordedInput.vue";

Vue.component("svg-icon", SvgIcon);
Vue.component("base-button", BaseButton);
Vue.component("base-input", BaseInput);
Vue.component("passworded-input", PasswordedInput);
