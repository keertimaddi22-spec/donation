import "./Popup.css";

function Popup({ message, onClose }: { message: string; onClose: () => void }) {
  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <p>{message}</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
}

export default Popup;