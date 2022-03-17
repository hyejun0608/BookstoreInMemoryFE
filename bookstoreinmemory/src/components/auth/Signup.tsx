import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

const Signup = () => {
  const navigate = useNavigate();
  const signinBtnClickHandler = () => {
    navigate('/signin');
  };

  return (
    <S.AuthBox>
      <S.SignupContent>
        <S.AuthTitleBox>
          <S.AuthTitle>Signup</S.AuthTitle>
          <S.TitleLine width={86} />
        </S.AuthTitleBox>
        <S.Input placeholder={'이름을 입력하세요...'} />
        <S.Input placeholder={'아이디를 입력하세요...'} />
        <S.Input type={'password'} placeholder={'비밀번호를 입력하세요...'} />
        <S.Button>
          <b>Signup</b>
        </S.Button>
        <S.Button onClick={signinBtnClickHandler}>
          <span>계정이 있다면? </span>
          <b>Signin</b>
        </S.Button>
      </S.SignupContent>
    </S.AuthBox>
  );
};

export default Signup;
