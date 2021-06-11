import React, {useState} from "react";
import Toast from "react-bootstrap/Toast";
import "../style/AlertToast.css";
import { useTranslation } from "react-i18next";

export default function AlertToast({ message, showToast, toggleShowToast }) {

  const { t } = useTranslation();
  const [ show, setShow ] = useState(true)

  return (
    <div aria-live="polite" aria-atomic="true" className="AlertToast">
      <Toast
        show={showToast}
        onClose={toggleShowToast}
        class="toast"
      >
        <Toast.Header className="toast-header">
          <strong className="mr-auto">{t("toastHead")}</strong>
          <small>{t("toastTime")}</small>
        </Toast.Header>
        <Toast.Body>
          <p>
          {t("toastText")}
          <br/>
          <small>{message}</small> 
          </p>
        </Toast.Body>
      </Toast>
    </div>
  );
}
