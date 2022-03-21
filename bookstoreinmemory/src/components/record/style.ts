import styled, { css } from 'styled-components';
import { color } from '../../GlobalStyle';

export const Record = styled.div`
  width: 100%;
  min-width: 800px;
  min-height: 100vh;
  background-color: ${color.background};
`;

export const Content = styled.div`
  width: 800px;
  height: 690px;
  border: 1px solid ${color.gray};
  border-radius: 20px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  margin-top: 40px;
`;

export const RecordTitle = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${color.main};
  border-top-left-radius: 19px;
  border-top-right-radius: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
  > p {
    font-weight: bold;
    font-size: 23px;
  }
`;

export const RecordContent = styled.div`
  width: 100%;
  height: calc(100% - 60px);
  background-color: #ffffff;
  border-bottom-left-radius: 19px;
  border-bottom-right-radius: 19px;
  padding: 39px 79px;
  > div {
    width: 640px;
    height: 550px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    > div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      > input:last-child {
        padding: 0px 12px;
      }
    }
  }
`;

export const Input = styled.input<{
  width: number;
}>`
  ${({ width }) => css`
    width: ${width}${width === 100 ? '%' : 'px'};
  `}
  height: 40px;
  border: 1px solid ${color.gray};
  border-radius: 10px;
  font-size: 12px;
  padding: 0px 20px;
  :focus {
    border: 1px solid ${color.main};
  }
  ::placeholder {
    color: ${color.gray};
    font-size: 12px;
    font-weight: bold;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 390px;
  resize: none;
  border: 1px solid ${color.gray};
  border-radius: 10px;
  padding: 20px;
  :focus {
    border: 1px solid ${color.main};
  }
  ::placeholder {
    color: ${color.gray};
    font-size: 12px;
    font-weight: bold;
  }
  ::-webkit-scrollbar {
    width: 6px;
    height: 10px;
  }
  ::-webkit-scrollbar-track-piece {
    background-color: transparent !important;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: ${color.main};
  }
`;

export const RecordBtn = styled.button`
  width: 100%;
  height: 30px;
  background-color: #ffffff;
  border: 1px solid ${color.main};
  border-radius: 15px;
  cursor: pointer;
  color: ${color.main};
  font-size: 15px;
  :hover {
    background-color: ${color.main};
    color: #ffffff;
  }
`;
