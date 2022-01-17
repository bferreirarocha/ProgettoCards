import quetionsImg from "../src/assets/images/question.png";
import { useState } from "react";
import "./App.scss";
import Main from "./Layout/PageSection/Main";
import Identity from "./Layout/Pages/Identity/index";
import Avatar from "./components/Nav/Avatar";
import MenuLink from "./components/Nav/MenuLink";
import { BaseList } from "./components/base";
import ContextService from "./services/ContextService";
import Widgets from "./components/Header/Widgets";
import Clock from "./components/Header/Clock";
import Informazioni from "./components/Header/Informazioni";
import Searchbar from "./components/Header/Search/Searchbar";
import BaseModal from "./components/base/BaseModal/BaseModal";

function App() {
  const [modal, setModal] = useState([]);
  const value = { modal, setModal };
  const MenuLinkdata = [
    {
      link: "#",
      icon: "documents",
    },
    {
      link: "#",
      icon: "diary",
    },
    {
      link: "#",
      icon: "calendar",
    },
    {
      link: "#",
      icon: "focus",
    },
    {
      link: "#",
      icon: "speedometer",
    },
  ];
  const AvatarOpetore = {
    img: "avatar",
    name: "Operatore",
  };

  const AvatarUtente = {
    img: "avatarHeader",
    name: "Francesco Totti",
    location: "Roma",
  };
  const widgets = ["settings", "sun", "logout"];

  return (
    <div className="App">
      <ContextService.Provider value={value}>
        <nav>
          <div className="navContainer">
            {/* <Avatar data={AvatarHeaderData[]} /> */}
            <Avatar data={AvatarOpetore} isHorizontal={false} />
            <div className="menuLinkContainer">
              <BaseList
                Component={<MenuLink />}
                data={MenuLinkdata}
                columns={1}
              />
            </div>
            <img src={quetionsImg} alt="" />
          </div>
        </nav>
        <main>
          <header>
            <div className="left">
              {" "}
              <Avatar data={AvatarUtente} isHorizontal={true} />
            </div>
            <div className="right">
              <Informazioni data={AvatarUtente} />
              <Searchbar />
              <Clock />
              <Widgets data={widgets} />
            </div>
          </header>
          <section>
            <Main page={Identity} />
          </section>
        </main>
        <BaseModal />
      </ContextService.Provider>
    </div>
  );
}

export default App;
