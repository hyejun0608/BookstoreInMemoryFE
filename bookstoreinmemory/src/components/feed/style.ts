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
  font-weight: bold;
  font-size: 25px;
  margin: 40px auto;
`;

export const Content = styled.div`
  width: 800px;
  min-height: 100px;
  border-radius: 20px;
  margin: 0 auto;
  margin-bottom: 20px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
`;

export const BookInfo = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${color.main};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  > p {
    font-size: 20px;
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
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 20px 0px;
  > p {
    width: 740px;
    margin: 0 auto;
    font-size: 15px;
  }
`;
