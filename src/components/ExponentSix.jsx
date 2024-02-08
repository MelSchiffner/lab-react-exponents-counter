const ExponentSix = (props) => {
  const result = props.count **6;

return (
  <div className="exponent-counter-container">
    <p className="exponent-label">n⁶</p>
    <p className="exponent-result">{props.count} * {props.count} * {props.count} * {props.count} * {props.count} * {props.count} = <span className="total">{result} </span></p>
  </div>
);
}
export default ExponentSix;