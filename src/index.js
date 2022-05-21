import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./Store/store";
import HomeContainer from "./container/HomeContainer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <HomeContainer />
  </Provider>
);
