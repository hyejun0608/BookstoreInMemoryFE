import React, { FC } from 'react';
import * as S from './style';

interface Props {
  title: string;
  author: string;
  count: number;
  content: string;
}

const Content: FC<Props> = props => {
  const { title, author, count, content } = props;
  return (
    <S.Content>
      <S.BookInfo>
        <p>
          <span>{title}</span> • {author} • {count}번째
        </p>
      </S.BookInfo>
      <S.RecordContent>
        <p>{content}</p>
      </S.RecordContent>
    </S.Content>
  );
};

export default Content;
