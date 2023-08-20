import styled from "styled-components";
import {borderFull} from "@/styles/variables";

export const Counter = styled.div`
  position: absolute;
  border: 2px solid rgba(242, 243, 245, 1);
  ${borderFull};
  background-color: rgba(242, 48, 81, 1);
  color: white;
  height: 16px;
  min-width: 16px;
  padding: 2px;
  font-size: 10px;
  font-weight: 700;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  right: -3px;
  top: 10px;
`