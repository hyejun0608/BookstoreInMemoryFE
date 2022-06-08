import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

const Signin = () => {
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<String>('');
  const navigate = useNavigate();
  const signupBtnClickHandler = () => {
    navigate('/signup');
  };

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.name === 'id') setId(event.currentTarget.value);
    else if (event.currentTarget.name === 'password') setPassword(event.currentTarget.value);
  };

  return (
    <S.AuthBox>
      <S.SigninContent>
        <S.AuthTitleBox>
          <S.AuthTitle>Signin</S.AuthTitle>
          <S.TitleLine width={77} />
        </S.AuthTitleBox>
        <S.Input placeholder={'아이디를 입력하세요...'} name={'id'} onChange={inputChangeHandler} />
        <S.Input
          type={'password'}
          placeholder={'비밀번호를 입력하세요...'}
          name={'password'}
          onChange={inputChangeHandler}
        />
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
