import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

const Signin = () => {
  const navigate = useNavigate();
  const signupBtnClickHandler = () => {
    navigate('/signup');
  };

  return (
    <S.AuthBox>
      <S.SigninContent>
        <S.AuthTitleBox>
          <S.AuthTitle>Signin</S.AuthTitle>
          <S.TitleLine width={77} />
        </S.AuthTitleBox>
        <S.Input placeholder={'아이디를 입력하세요...'} />
        <S.Input type={'password'} placeholder={'비밀번호를 입력하세요...'} />
        <S.Button>
          <b>Signin</b>
        </S.Button>
        <S.Button onClick={signupBtnClickHandler}>
          <span>계정이 없다면? </span>
          <b>Signup</b>
        </S.Button>
      </S.SigninContent>
    </S.AuthBox>
  );
};

export default Signin;
