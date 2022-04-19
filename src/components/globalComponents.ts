import Vue from "vue";

// general
import SvgIcon from "@/components/SvgIcon.vue";
import MainHeader from "@/components/MainHeader.vue";
import MainLogo from "@/components/MainLogo.vue";
import MainNav from "@/components/MainNav.vue";

// base
import BaseButton from "@/components/base/BaseButton.vue";
import BaseInput from "@/components/base/BaseInput.vue";

// elements
import BaseLoader from "@/components/elements/BaseLoader.vue";
import UserMenu from "@/components/elements/UserMenu.vue";
import Dropdown from "@/components/elements/Dropdown.vue";

// wrappers
import PasswordedInput from "@/components/wrappers/PasswordedInput.vue";

Vue.component("svg-icon", SvgIcon);
Vue.component("main-header", MainHeader);
Vue.component("main-logo", MainLogo);
Vue.component("main-nav", MainNav);
Vue.component("base-button", BaseButton);
Vue.component("base-input", BaseInput);
Vue.component("base-loader", BaseLoader);
Vue.component("user-menu", UserMenu);
Vue.component("dropdown", Dropdown);
Vue.component("passworded-input", PasswordedInput);
