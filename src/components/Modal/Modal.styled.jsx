import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000a3;

  z-index: 1000;
`;

export const ModalContent = styled.div`
  max-width: 80%;
`;
