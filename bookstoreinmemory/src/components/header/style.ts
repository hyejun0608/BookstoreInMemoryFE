import styled, { css } from 'styled-components';
import { color } from '../../GlobalStyle';

export const Header = styled.div`
  width: 100%;
  min-width: 800px;
  height: 60px;
  background-color: ${color.main};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderContent = styled.div`
  width: 800px;
  display: flex;
  justify-content: space-between;
`;

export const LogoContent = styled.div`
  width: 170px;
  display: flex;
  > img {
    width: 45px;
    height: 30px;
    margin-right: 10px;
  }
  > p {
    font-size: 22px;
    font-weight: bold;
    color: white;
  }
`;

export const RecordBtn = styled.button`
  width: 100px;
  height: 30px;
  background-color: #ffffff;
  border: none;
  border-radius: 15px;
  color: ${color.main};
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
`;
