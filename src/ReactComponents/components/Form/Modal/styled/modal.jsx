import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  position: -webkit-sticky;
  position: sticky;
  bottom: 0;
  left: 0;
  background-color: ${(props) => props.theme.containerBg};
  padding-bottom: 20rem;
`;

export const ModalMessage = styled.div`
  width: 25rem;
  display: flex;
  justify-content: space-between;
  margin: auto;
  position: -webkit-sticky;
  position: sticky;
  top: 40%;
  background-color: ${(props) => props.theme.messageBg};
  border: 1rem ridge ${(props) => props.theme.borderColor};
  border-radius: 2rem;
  color: white;
  font-size: 1.3rem;
  font-weight: bold;
  padding: 1rem 2rem;
  &:hover {
    color: ${(props) => props.theme.messageHoverTxt};
    background-color: ${(props) => props.theme.messageHoverBg};
  }
`;

export const ModalButton = styled.button`
  width: 3rem;
  height: 3rem;
  background-color: ${(props) => props.theme.buttonBg};
  border: 0.5rem ridge ${(props) => props.theme.borderColor};
  border-radius: 2rem;
  margin-top: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  &:hover {
    color: ${(props) => props.theme.buttonHoverTxt};
    background-color: ${(props) => props.theme.buttonHoverBg};
  }
`;

export const defaultTheme = {
  containerBg: "rgba(0, 0, 0, 0.5)",
  messageBg: "#444444",
  messageHoverBg: "#aebf8e",
  messageHoverTxt: "black",
  borderColor: "#d5db99",
  buttonBg: "#d5db99",
  buttonHoverBg: "#444444",
  buttonHoverTxt: "white",
};
