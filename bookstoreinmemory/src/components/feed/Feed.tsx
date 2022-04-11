import React, { FC } from 'react';
import * as S from './style';
import Header from '../header/Header';
import Content from './Content';

interface Props {
  userName: string;
}

const Feed: FC<Props> = props => {
  const { userName } = props;
  return (
    <S.Feed>
      <Header />
      <S.FeedTitle>
        <span>{userName}</span>님의 기억 속 책들
      </S.FeedTitle>
      <Content
        title={'처음부터 배우는 딥러닝 챗봇처음부터 배우는 딥러닝 챗봇'}
        author={'저자'}
        count={1}
      />
    </S.Feed>
  );
};

export default Feed;
