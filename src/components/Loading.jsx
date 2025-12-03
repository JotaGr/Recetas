import "./Loading.css";

export const Loading = ({ message = "Cargando..." }) => {
  return (
    <div className="loading-container">
      <div className="spinner-border text-success" role="status">
        <span className="visually-hidden">Cargando...</span>
      </div>
      <p className="loading-message">{message}</p>
    </div>
  );
};


