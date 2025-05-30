import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css"
import "@fortawesome/fontawesome-free/css/all.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCheck, faCoffee, faX } from "@fortawesome/free-solid-svg-icons";
import { faSmile } from "@fortawesome/free-regular-svg-icons";
library.add(faCoffee, faSmile, faX, faCheck);
const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
// Mount the app
app.mount("#app");