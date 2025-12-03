"use client";
import { ROUTES } from "@/constants/routes";
import Login from "@/features/Login/Login";
import { Menu, Wrench, X } from "lucide-react";
import { useState } from "react";
import styles from "./Navbar.module.css";

type NavbarProps = {
  hideSearchbar?: boolean;
};

export default function Navbar({ hideSearchbar }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div
          className={styles.navbarLogo}
          onClick={() => (window.location.href = ROUTES.HOME)}
        >
          <Wrench className={styles.navbarIcon} />
          <span className={styles.navbarTitle}>MechSearch</span>
        </div>

        <nav
          className={`${styles.navbarLinks} ${
            isMobileMenuOpen ? styles.navbarLinksMobileOpen : ""
          }`}
        >
          <a
            href={ROUTES.SERVICES}
            className="active"
            onClick={handleCloseMobileMenu}
          >
            Serviços
          </a>
          <a href={ROUTES.ABOUT} onClick={handleCloseMobileMenu}>
            Como funciona?
          </a>
          <a href={ROUTES.CONTACT} onClick={handleCloseMobileMenu}>
            Contato
          </a>
        </nav>

        <div className={styles.navbarAuth}>
          <Login />
        </div>

        <button
          className={styles.mobileMenuButton}
          onClick={handleToggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
