import { Facebook, Instagram, Twitter, Wrench } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.redStripe}></div>

      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.brandSection}>
            <div className={styles.logo}>
              <Wrench className={styles.logoIcon} />
              <span className={styles.logoText}>MechSearch</span>
            </div>
            <p className={styles.brandDescription}>
              Sua plataforma confiável para encontrar profissionais automotivos
              confiáveis.
            </p>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Serviços</h3>
            <ul className={styles.linksList}>
              <li>
                <a href="#" className={styles.footerLink}>
                  Reparo elétrico
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Troca de oléo
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Conserto de freios
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Empresa</h3>
            <ul className={styles.linksList}>
              <li>
                <a href="#" className={styles.footerLink}>
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Política de privacidade
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Conecte-se</h3>
            <div className={styles.socialIcons}>
              <Facebook className={styles.socialIcon} />
              <Twitter className={styles.socialIcon} />
              <Instagram className={styles.socialIcon} />
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © 2024 MechSearch. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
