import styled from "@emotion/styled";
import { colors } from "../ui";

const Button = styled.button`
  width: 40px;
  height: 40px;
  background: ${colors.white};
  border: 1px solid ${colors.gray4};
  box-sizing: border-box;
  box-shadow: 2px 2px 0px ${colors.gray4};
  border-radius: 100px;
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.gray4};
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

function CircleButton({ children, onClick }) {
  return <Button onClick={onClick}>{children}</Button>;
}

export default CircleButton;
