import { useState, useEffect } from "react";
import {
  BaseList,
  BaseDropdown,
  CustomSkeleton,
} from "../../../components/base/";
import "./style.scss";
import {
  IdCard,
  TemplateCard,
  MessagesCard,
} from "../../../components/Main/Section/index";

import { more } from "../../../services/icons";
import IdentityData from "../../../services/Identity.json";
import MenuFilter from "../../../components/Main/Section/MenuFilter";

const MenuCardsData = IdentityData.data["menu-cards"];
// const IdCardsData = IdentityData.data["info-cards"];
const TemplateCardsData = IdentityData.data["template-cards"];
const MessageCardsData = IdentityData.data["messages-cards"];
const Menu = [
  {
    link: "#",
    label: "Edit",
  },
  {
    link: "#",
    label: "Delete",
  },
];
function Identity() {
  const [loading, setLoading] = useState(true);
  const [IdCardData] = useState(IdentityData.data["info-cards"]);
  const [Selected, setSelected] = useState("Tutte");

  const filteredOptions = () => {
    return Selected !== "Tutte"
      ? IdCardData.filter((item) => item.template === Selected)
      : IdCardData;
  };
  const setFilterHandler = (selectedItem) => {
    setSelected(selectedItem);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  const [SwitchCards, setSwitchCards] = useState(false);
  return (
    <div className="Identity">
      <div className="leftContainer">
        <div className="container">
          <div className="menu">
            {/* {loading ? (
              <BaseList
                Component={<CustomSkeleton />}
                data={MenuCardsData}
                columns={1}
              />
            ) : (
              <BaseList
                Component={<MenuCard Selected={Selected} />}
                data={MenuCardsData}
                columns={1}
              />
            )} */}
            <MenuFilter
              Selected={Selected}
              data={MenuCardsData}
              onChangeFilter={setFilterHandler}
            />
          </div>
          <div className="cards">
            <div className="title">
              <span className="title">Tutte</span>
              <BaseDropdown data={Menu} icon={more} />
            </div>
            {loading ? (
              <BaseList
                Component={<CustomSkeleton />}
                data={filteredOptions()}
                columns={2}
              />
            ) : (
              <BaseList
                Component={<IdCard />}
                data={filteredOptions()}
                columns={2}
              />
            )}
          </div>
        </div>
      </div>
      <div className="rightContainer">
        <div className="rgContainer">
          <h1>Template</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim unde
            expedita magni recusandae! .
          </p>
          <input
            className="searchBar"
            type="text"
            placeholder="Ricerca Templat
            e"
          />
          <button
            className="SwitchCards"
            onClick={() => {
              setSwitchCards(!SwitchCards);
            }}
          >
            Switch to {SwitchCards ? "Template Card" : "Messages Card"}
          </button>
          <div className="template">
            {loading ? (
              <BaseList
                Component={<CustomSkeleton />}
                data={SwitchCards ? MessageCardsData : TemplateCardsData}
                columns={3}
              />
            ) : (
              <BaseList
                Component={SwitchCards ? <MessagesCard /> : <TemplateCard />}
                data={SwitchCards ? MessageCardsData : TemplateCardsData}
                columns={!SwitchCards ? 3 : 1}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Identity;
