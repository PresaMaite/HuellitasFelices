import "./BtnPetSelect.css";

export const BtnPetSelect = ({ text, onClick }) => {
  return (
    <button className="petselect" onClick={onClick}>
      {text}
    </button>
  )
}
