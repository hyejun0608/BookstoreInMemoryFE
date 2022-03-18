import React from 'react';
import * as S from './style';
import { logo } from '../../assets/Header';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const recordBtnClickHandler = () => {
    navigate('/record');
  };

  return (
    <S.Header>
      <S.HeaderContent>
        <S.LogoContent>
          <img src={logo} alt='logo' />
          <p>기억 속 책방</p>
        </S.LogoContent>
        <S.RecordBtn onClick={recordBtnClickHandler}>기록하기</S.RecordBtn>
      </S.HeaderContent>
    </S.Header>
  );
};

export default Header;
