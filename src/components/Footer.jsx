// Internos
import logoJotaDev from "../assets/LogoJotaDev.png";
import logoEscrito from "../assets/LogoEscrito.png";

// Estilos
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="mt-5">
      <footer className="bg-gradient text-center footer">
        <h5 className="text-light">
          Copyright ©️ 2025 - Desarrollado por
        </h5>
        <div className="footer-logos">
          <img
            className="img-footer2"
            src={logoJotaDev}
            alt="Logo JotaDev"
            width="48"
            height="48"
          />
          <img
            className="img-footer"
            src={logoEscrito}
            alt="JotaDeveloper"
            width="160"
            height="48"
          />
        </div>
      </footer>
    </div>
  );
};
