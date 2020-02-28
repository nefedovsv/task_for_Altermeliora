import * as React from "react";
import { useSelector } from "react-redux";
import { Form, Input, Button } from "antd";
import { FormComponentProps } from "antd/es/form";
import { logIn } from "../../actions/logIn";
import { signUp } from "../../actions/signUp";
import { useTranslation } from "react-i18next";
import styles from "./Form.module.css";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

interface ILogForm extends FormComponentProps {}

const LogForm: React.FC<ILogForm> = ({ form }) => {
  const [login, setLogStatus] = React.useState<boolean>(true);
  const dispatch: Dispatch = useDispatch();
  const { isLoaded } = useSelector((store: any) => store.formReducer);
  const { getFieldDecorator } = form;
  const { t } = useTranslation();

  const checkPassword = (rule: any, value: any, callback: () => void) => {
    if (value && value !== form.getFieldValue("password")) {
      //@ts-ignore
      callback("Two passwords does not equal!");
    } else {
      callback();
    }
  };

  const handleSubmit = (e: any) => {
    const button = document.getElementById("submit");

    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err && button) {
        const text = button.innerText;
        text === "Log in" || text === "Авторизация"
          ? dispatch(logIn(values))
          : dispatch(signUp(values));
      }
    });
  };

  return (
    <div className={styles.body}>
      <h4>{login ? t("logIn") : t("signUp")}</h4>
      <Form className={styles.form} onSubmit={handleSubmit}>
        <Form.Item hasFeedback>
          {getFieldDecorator("email", {
            rules: [
              {
                required: true,
                type: "email",
                message: "Please use correct e-mail!"
              }
            ]
          })(
            <Input
              placeholder="Please enter your e-mail"
              disabled={!isLoaded}
            />
          )}
        </Form.Item>
        <Form.Item hasFeedback>
          {getFieldDecorator("password", {
            rules: [
              { required: true, message: "Please input your password!" },
              { min: 6 }
            ]
          })(
            <Input.Password
              placeholder="Please enter your password"
              disabled={!isLoaded}
            />
          )}
        </Form.Item>
        {!login && (
          <Form.Item hasFeedback>
            {getFieldDecorator("confirm", {
              rules: [
                { required: true, message: "Please confirm your password!" },
                { validator: checkPassword }
              ]
            })(
              <Input.Password
                placeholder="Please confirm your password"
                disabled={!isLoaded}
              />
            )}
          </Form.Item>
        )}
        {!login && (
          <Form.Item>
            {getFieldDecorator("name", {
              rules: [
                {
                  required: true,
                  message: "Please input your name!",
                  whitespace: true
                }
              ]
            })(
              <Input
                placeholder="Please enter your name"
                disabled={!isLoaded}
              />
            )}
          </Form.Item>
        )}
        <Button
          htmlType="submit"
          type="primary"
          id="submit"
          disabled={!isLoaded}
        >
          {login ? t("logIn") : t("signUp")}
        </Button>
        <h4>{login ? t("unRegistered") : t("registered")}</h4>
        <Button disabled={!isLoaded} onClick={() => setLogStatus(!login)}>
          {login ? t("signUp") : t("logIn")}
        </Button>
      </Form>
    </div>
  );
};

export const LoginForm = Form.create<ILogForm>({ name: "log" })(LogForm);
