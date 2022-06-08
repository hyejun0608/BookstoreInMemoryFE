import React, { useState } from 'react';
import * as S from './style';
import Header from '../header/Header';

const Record = () => {
  const [title, setTitle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [count, setCount] = useState<number>(0);
  const [content, setContent] = useState<string>('');

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  };
  const authorChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(event.currentTarget.value);
  };
  const countChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCount(Number(event.currentTarget.value));
  };
  const contentChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.currentTarget.value);
  };

  return (
    <S.Record>
      <Header />
      <S.Content>
        <S.RecordTitle>
          <p>기억 속 책방 기록하기</p>
        </S.RecordTitle>
        <S.RecordContent>
          <div>
            <S.Input
              width={100}
              placeholder={'책 제목을 입력하세요...'}
              onChange={titleChangeHandler}
            />
            <div>
              <S.Input
                width={470}
                placeholder={'책 저자를 입력하세요...'}
                onChange={authorChangeHandler}
              />
              <S.Input
                width={155}
                type='number'
                placeholder={'독서 횟수를 입력하세요...'}
                min={0}
                onChange={countChangeHandler}
              />
            </div>
            <S.TextArea placeholder={'책 내용을 입력하세요...'} onChange={contentChangeHandler} />
            <S.RecordBtn>등록하기</S.RecordBtn>
          </div>
        </S.RecordContent>
      </S.Content>
    </S.Record>
  );
};

export default Record;
