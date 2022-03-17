import React, { FC } from 'react';
import * as S from './style';
import Signin from './Signin';
import Signup from './Signup';
import LeftBox from './LeftBox';

interface Props {
  isSignup?: boolean;
}

const Auth: FC<Props> = props => {
  const { isSignup } = props;

  return (
    <S.Auth>
      <S.ContentBox>
        <LeftBox />
        {isSignup ? <Signup /> : <Signin />}
      </S.ContentBox>
    </S.Auth>
  );
};

export default Auth;
