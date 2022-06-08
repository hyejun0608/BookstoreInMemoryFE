import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

const Signup = () => {
  const [name, setName] = useState<string>('');
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigate = useNavigate();
  const signinBtnClickHandler = () => {
    navigate('/signin');
  };

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.name === 'name') setName(event.currentTarget.value);
    else if (event.currentTarget.name === 'id') setId(event.currentTarget.value);
    else if (event.currentTarget.name === 'password') setPassword(event.currentTarget.value);
  };

  return (
    <S.AuthBox>
      <S.SignupContent>
        <S.AuthTitleBox>
          <S.AuthTitle>Signup</S.AuthTitle>
          <S.TitleLine width={86} />
        </S.AuthTitleBox>
        <S.Input placeholder={'이름을 입력하세요...'} name={'name'} onChange={inputChangeHandler} />
        <S.Input placeholder={'아이디를 입력하세요...'} name={'id'} onChange={inputChangeHandler} />
        <S.Input
          type={'password'}
          placeholder={'비밀번호를 입력하세요...'}
          name={'password'}
          onChange={inputChangeHandler}
        />
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
