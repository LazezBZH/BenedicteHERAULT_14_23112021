import React from "react";
import { ThemeProvider } from "styled-components";

import {
  ModalContainer,
  ModalMessage,
  ModalButton,
  defaultTheme,
} from "./styled/modal";

/* set here your own colors and replace defaultTheme by myTheme
const myTheme = {
  containerBg: " ",
  messageBg: " ",
  messageHoverBg: " ",
  messageHoverTxt: " ",
  borderColor: " ",
  buttonBg: " ",
  buttonHoverBg: " ",
  buttonHoverTxt: " ",
};*/
export default function Modal(props) {
  return (
    <ThemeProvider theme={props.theme}>
      <ModalContainer>
        <ModalMessage>
          <p>{props.text}</p>
          <ModalButton onClick={props.close}>X</ModalButton>
        </ModalMessage>
      </ModalContainer>
    </ThemeProvider>
  );
}
