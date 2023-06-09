import './calc-button.scss';

const CalcButton = ({name, value, onClick}) => {
  return ( 
    <button 
      className={name}
      value={value}
      onClick={onClick}
    >{value}</button>
   );
}
 
export default CalcButton;