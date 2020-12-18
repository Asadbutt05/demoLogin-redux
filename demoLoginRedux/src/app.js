import React from "react";
import { Provider } from "react-redux";
import { STORE, PERSISTOR } from "./store/storeConfig";
import { PersistGate } from "redux-persist/integration/react";
import axios from 'axios'
import Decider from "./decider";
import * as utilities from './utilities/index'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    axios.defaults.baseURL = utilities.BASE_URL;
    axios.interceptors.request.use(
      (config) => {
        if (!config.headers.Authorization) {
          if (utilities.Interceptor.getToken()) {
            config.headers.Authorization = `Bearer ${utilities.Interceptor.getToken()}`;
          }
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
  }

  render() {
    return (
      <Provider store={STORE}>
        <PersistGate persistor={PERSISTOR}>
          <Decider />
        </PersistGate>
      </Provider>
    );
  }
}
