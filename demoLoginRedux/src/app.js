import React from "react";
// import { Provider } from "react-redux";
// import { STORE, PERSISTOR } from "./store/storeConfig";
// import { PersistGate } from "redux-persist/integration/react";
import Decider from "./decider";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // <Provider store={STORE}>
      //   <PersistGate persistor={PERSISTOR}>
          <Decider />
      //   </PersistGate>
      // </Provider>
    );
  }
}
