import './calc-button.scss';

const CalcButton = ({name ='calcBtn', value = 'Value'}) => {
  return ( 
    <button 
      className={name}
      value={value}
    >{value}</button>
   );
}
 
export default CalcButton;