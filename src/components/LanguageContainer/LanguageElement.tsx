import React from "react";
import { Radio } from "antd";
import { RadioChangeEvent } from "antd/lib/radio";
import { useTranslation } from "react-i18next";
import { Language } from "../../interfaces/interface";
import styles from "./Language.module.css";

export const LanguageElement: React.FC<{}> = () => {
  const { Group, Button } = Radio;

  const { i18n } = useTranslation();

  const onChange = (e: RadioChangeEvent): void => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className={styles.body}>
      <Group onChange={onChange} defaultValue={Language.ENG} size="small">
        <Button value={Language.ENG}>{Language.ENG}</Button>
        <Button value={Language.RUS}>{Language.RUS}</Button>
      </Group>
    </div>
  );
};
