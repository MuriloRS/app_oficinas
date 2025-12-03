import { AppleIcon } from "@/components/Icons/Apple";
import { FacebookIcon } from "@/components/Icons/Facebook";
import { GoogleIcon } from "@/components/Icons/Google";
import { Wrench } from "lucide-react";
import styles from "./cadastro-page.module.css";

export default function Cadastro() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.leftPanel}>
        <div className={styles.leftContent}>
          <div className={styles.logo}>
            <Wrench className={styles.logoIcon} />
            <span className={styles.logoText}>MechanicPro</span>
          </div>
          <h2 className={styles.tagline}>
            Se conecte com oficinas confiáveis perto de você
          </h2>
          <p className={styles.description}>
            Se junte a milhares de usuários que já usam e confiam na nossa
            plataforma para serviços automotivos.
          </p>
        </div>
      </div>

      <div className={styles.rightPanel}>
        <div className={styles.rightContent}>
          <h1 className={styles.welcomeTitle}>Bem-vindo</h1>
          <p className={styles.subtitle}>Cadastre sua conta</p>

          <div className={styles.socialButtons}>
            <button className={`${styles.socialButton} ${styles.googleButton}`}>
              {GoogleIcon}
              Continue com Google
            </button>
            <button
              className={`${styles.socialButton} ${styles.facebookButton}`}
            >
              {FacebookIcon} Continue com Facebook
            </button>
            <button className={`${styles.socialButton} ${styles.appleButton}`}>
              {AppleIcon} Continue com Apple
            </button>
          </div>

          <div className={styles.divider}>
            <span className={styles.dividerText}>Ou continue com e-mail</span>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Email</label>
            <input
              type="email"
              className={styles.input}
              placeholder="Digite seu email"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Senha</label>
            <input
              type="password"
              className={styles.input}
              placeholder="Digite sua senha"
            />
          </div>

          <div className={styles.checkboxGroup}>
            <label className={styles.checkbox}>
              <input type="checkbox" />
              Lembrar-me
            </label>
            <a href="#" className={styles.forgotPassword}>
              Esqueceu sua senha?
            </a>
          </div>

          <button className={styles.signInButton}>Entrar</button>

          <div className={styles.mechanicSection}>
            <p className={styles.mechanicText}>
              <strong>Você é mecânico ou tem oficina?</strong>
              <br />
              Se junte a nossa rede de oficinas
            </p>
            <a
              href="https://forms.gle/3Rfor2GridtBVZtx5"
              target="_blank"
              className={styles.joinButton}
            >
              🔧 JUNTE-SE AGORA
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
