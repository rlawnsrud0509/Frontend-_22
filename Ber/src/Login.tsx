import "./App.css";
import * as S from "./loginSource/style";
import Email from "./resource/email.svg";
import Key from "./resource/key.svg";
import Check from "./resource/Check.svg";
import BerLogo from "./resource/berlogo.svg";

function Login() {
  return (
    <S.container>
      <S.loginForm width={700} height={548}>
        <S.berLogo Name={BerLogo} width={30} height={22}></S.berLogo>
        <S.Letter>Login</S.Letter>
        <S.inputDiv>
          <S.IconDivLeft>
            <S.Icons Name={Email} width={33} height={33}></S.Icons>
          </S.IconDivLeft>
          <S.formInput placeholder="학교 이메일"></S.formInput>
          <S.IconDivRight></S.IconDivRight>
        </S.inputDiv>

        <S.inputDiv>
          <S.IconDivLeft>
            <S.Icons Name={Key} width={33} height={33}></S.Icons>
          </S.IconDivLeft>
          <S.formInput placeholder="비밀번호" type={"password"}></S.formInput>
          <S.IconDivRight></S.IconDivRight>
        </S.inputDiv>
        <S.submitButton type={"submit"}>로그인</S.submitButton>
      </S.loginForm>
    </S.container>
  );
}

export default Login;
