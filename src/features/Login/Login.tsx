import { FacebookIcon } from "@/components/Icons/Facebook";
import { GoogleIcon } from "@/components/Icons/Google";

import { AppleIcon } from "@/components/Icons/Apple";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";
import { Mail } from "lucide-react";
import { useState } from "react";
import styles from "./Login.module.css";

export default function Login() {
  const [openLoginDialog, setOpenLoginDialog] = useState(false);

  return (
    <>
      <Button
        className={styles.signupBtn}
        onClick={() => setOpenLoginDialog(!openLoginDialog)}
      >
        Login
      </Button>
      {openLoginDialog && (
        <div className={styles.container}>
          <h2 className={styles.title}>
            Acesse ou
            <br />
            crie sua conta
          </h2>
          <p className={styles.subtitle}>
            Entre em sua conta através das suas redes sociais ou por email.
          </p>

          <div className={styles.buttons}>
            <Button variant="outline" className={styles.socialButton}>
              {GoogleIcon}
              Entrar com Google
            </Button>
            <Button variant="outline" className={styles.socialButton}>
              {FacebookIcon}
              Entrar com Facebook
            </Button>
            <Button variant="outline" className={styles.socialButton}>
              {AppleIcon}
              Entrar com Apple
            </Button>
          </div>

          <div className={styles.divider}>ou</div>

          <Button className={styles.emailButton}>
            <Mail className={styles.icon} /> Entrar com email
          </Button>

          <p className={styles.register}>
            Não possui conta? <a href={ROUTES.SIGNUP}>Cadastre-se aqui</a>
          </p>

          <p className={styles.terms}>
            Ao logar, você afirma que leu e concorda com os nossos{" "}
            <a href="#">Termos de Uso</a> e a{" "}
            <a href="#">Política de Privacidade</a> do MechSearch.
          </p>
        </div>
      )}
    </>
  );
}
