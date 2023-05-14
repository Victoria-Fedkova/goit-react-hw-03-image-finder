import styled from '@emotion/styled';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 100;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  background-image: linear-gradient(#0dccea, #1e96c8);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 250ms cubic-bezier(0.165, 0.84, 0.44, 1);

  margin-bottom: 12px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchInput = styled.input`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;

  outline: none;
  transition: 0.35s ease;
  & :focus,
  &:hover,
  &:not(:placeholder-shown) {
    color: #1e96c8;
  }
  &:hover::placeholder {
    color: #1e96c8;
  }
`;

export const SearchBtn = styled.button`
  float: right;
  width: 48px;
  height: 48px;
  top: 0px;
  right: 0px;
  border: none;
  background-color: transparent;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    transform: scale(1.2);
    outline: none;
  }
`;
