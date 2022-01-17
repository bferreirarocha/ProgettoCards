import "./style.scss";
import { iconsList } from "../../../../services/iconsList";

function MenuCard(props) {
  // const [selectedOption, setSelectedOption] = useState("Carta di credito");
  const onChagngeHandle = (e) => {
    props.onChange(e.target.value);
  };

  const isSelected = props.Selected === props.data.template ? true : false;

  return (
    <div className={`MenuCard ${isSelected ? "active" : ""}`}>
      <div className="wrapper">
        {iconsList[0][props.data.icon]}

        <label htmlFor={props.data.template}>
          <input
            type="radio"
            onChange={onChagngeHandle}
            id={props.data.template}
            value={props.data.template}
            checked={isSelected ? true : false}
          />
          {props.data.template}
        </label>
      </div>
    </div>
  );
}

export default MenuCard;
