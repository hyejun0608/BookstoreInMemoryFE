import React from 'react';
import * as S from './style';
import Header from '../header/Header';

const Record = () => {
  return (
    <S.Record>
      <Header />
      <S.Content>
        <S.RecordTitle>
          <p>기억 속 책방 기록하기</p>
        </S.RecordTitle>
        <S.RecordContent>
          <div>
            <S.Input width={100} placeholder={'책 제목을 입력하세요...'} />
            <div>
              <S.Input width={470} placeholder={'책 저자를 입력하세요...'} />
              <S.Input
                width={155}
                type='number'
                placeholder={'독서 횟수를 입력하세요...'}
                min={0}
              />
            </div>
            <S.TextArea placeholder={'책 내용을 입력하세요...'} />
            <S.RecordBtn>등록하기</S.RecordBtn>
          </div>
        </S.RecordContent>
      </S.Content>
    </S.Record>
  );
};

export default Record;
