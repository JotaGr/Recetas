import "./EmptyState.css";

export const EmptyState = ({ 
  title = "No se encontraron resultados", 
  message = "Intenta con otros ingredientes o criterios de búsqueda.",
  icon = "🔍"
}) => {
  return (
    <div className="empty-state-container">
      <div className="empty-state-icon">{icon}</div>
      <h3 className="empty-state-title">{title}</h3>
      <p className="empty-state-message">{message}</p>
    </div>
  );
};


