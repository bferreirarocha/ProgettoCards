import { createContext } from "react";

// set the defaults
const ContextService = createContext({
  modal: [],
  setModal: () => {},
});

export default ContextService;
