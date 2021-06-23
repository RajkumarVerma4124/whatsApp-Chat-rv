import { Button } from "@material-ui/core";
import Head from "next/head";
import styled from "styled-components";
import { auth, provider } from "../firebase";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  };

  return (
    <Container>
      <Head>
        <title>WhatsApp 2.0 | Login</title>
        <link
          rel="icon"
          href="https://pngimg.com/uploads/whatsapp/whatsapp_PNG95158.png"
          x
        />
      </Head>

      <LoginContainer>
        <Logo src="https://i.pinimg.com/originals/fd/d8/97/fdd89706e35f9bc4493559caef4f1122.png" />
        <Button onClick={signIn} variant="outline">
          Sign in with google
        </Button>
      </LoginContainer>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: whitesmoke;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 100px;
  border-radius: 20px;
  --tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
`;

const Logo = styled.img`
  width: 200px;
  margin-bottom: 30px;
`;

const LoginButton = styled(Button)`
  --tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
`;
