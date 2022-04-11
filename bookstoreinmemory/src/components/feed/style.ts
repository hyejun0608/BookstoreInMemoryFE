import styled from 'styled-components';
import { color } from '../../GlobalStyle';

export const Feed = styled.div`
  width: 100%;
  min-width: 800px;
  min-height: 100vh;
  background-color: ${color.background};
`;

export const FeedTitle = styled.p`
  width: 800px;
  font-size: 23px;
  margin: 40px auto;
  > span {
    font-weight: bold;
  }
`;

export const Content = styled.div`
  width: 800px;
  min-height: 100px;
  border-radius: 20px;
  margin: 0 auto;
  margin-bottom: 20px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid ${color.gray};
`;

export const BookInfo = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${color.main};
  border-top-left-radius: 19px;
  border-top-right-radius: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
  > p {
    font-size: 18px;
    color: #000000;
    > span {
      font-weight: bold;
    }
  }
`;

export const RecordContent = styled.div`
  width: 100%;
  min-height: 40px;
  background-color: #ffffff;
  border-bottom-left-radius: 19px;
  border-bottom-right-radius: 19px;
  padding: 20px 0px;
  > p {
    width: 740px;
    margin: 0 auto;
    font-size: 15px;
  }
`;
