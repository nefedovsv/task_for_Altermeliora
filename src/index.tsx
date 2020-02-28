import React from "react";
import { render } from "react-dom";
import { LoginForm } from "./components/FormContainer/LogForm";
import { LanguageElement } from "./components/LanguageContainer/LanguageElement";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { store } from "./store/store";
import "antd/dist/antd.css";

render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <LanguageElement />
      <LoginForm />
    </I18nextProvider>
  </Provider>,
  document.getElementById("root")
);
