import React from 'react';
import * as S from './style';
import Header from '../header/Header';
import Content from './Content';

const Feed = () => {
  const userName = '혜준';
  return (
    <S.Feed>
      <Header />
      <S.FeedTitle>{userName}님의 기억 속 책들</S.FeedTitle>
      <Content />
    </S.Feed>
  );
};

export default Feed;
