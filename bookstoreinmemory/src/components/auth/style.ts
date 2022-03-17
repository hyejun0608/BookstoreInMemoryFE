import styled, { css } from 'styled-components';
import { color } from '../../GlobalStyle';
import { backgroundImg } from '../../assets/Auth/index';

export const Auth = styled.div`
  width: 100%;
  min-width: 750px;
  height: 100vh;
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #c9c9c9;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentBox = styled.div`
  width: 750px;
  height: 440px;
  display: flex;
  border-radius: 30px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
`;

export const LeftBox = styled.div`
  width: 375px;
  height: 100%;
  background-color: ${color.main};
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  padding: 70px 40px;
  > p {
    color: #ffffff;
  }
`;

export const BIMTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const Explain = styled.p`
  font-size: 15px;
`;

export const AuthBox = styled.div`
  width: 375px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AuthTitleBox = styled.div`
  position: relative;
`;

export const SigninContent = styled.div`
  width: 200px;
  height: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  > div:first-child {
    margin-bottom: 44px;
  }
  > input {
    margin-bottom: 10px;
  }
  > button {
    margin-top: 16px;
  }
`;

export const AuthTitle = styled.p`
  font-size: 25px;
  font-weight: bold;
  color: ${color.darkgray};
`;

export const TitleLine = styled.div<{
  width: number;
}>`
  ${({ width }) => css`
    width: ${width}px;
  `}
  height: 2px;
  background-color: ${color.main};
  position: absolute;
  bottom: 4px;
  z-index: -1;
`;

export const Input = styled.input`
  width: 200px;
  height: 30px;
  border: none;
  border-radius: 0px;
  border-bottom: 1px solid ${color.gray};
  padding: 0px 5px;
  font-size: 11px;
  ::placeholder {
    color: ${color.gray};
    font-size: 11px;
    font-weight: bold;
  }
`;

export const Button = styled.button`
  width: 200px;
  height: 30px;
  background-color: ${color.main};
  border: none;
  border-radius: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
  color: #ffffff;
  font-size: 12px;
  cursor: pointer;
  > span {
    font-size: 11px;
  }
`;

export const SignupContent = styled.div`
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  > div:first-child {
    margin-bottom: 32px;
  }
  > input {
    margin-bottom: 16px;
  }
  > button {
    margin-top: 16px;
  }
`;
