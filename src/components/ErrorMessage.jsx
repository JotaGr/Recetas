import "./ErrorMessage.css";

export const ErrorMessage = ({ error, onRetry = null }) => {
  return (
    <div className="error-container">
      <div className="error-icon">⚠️</div>
      <h3 className="error-title">Oops! Algo salió mal</h3>
      <p className="error-message">{error || "Ha ocurrido un error inesperado"}</p>
      {onRetry && (
        <button className="btn btn-primary mt-3" onClick={onRetry}>
          Intentar de nuevo
        </button>
      )}
    </div>
  );
};





