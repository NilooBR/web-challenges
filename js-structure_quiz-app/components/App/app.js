
import {Header} from "../../components/Header/header.js";
import {Form} from "../../components/Form/form.js";
import {CardList} from "../../components/CardList/cardList.js";

export function App() {
  const app = document.createElement("main");
  app.classList.add("app");
  app.append(Header(), Form(), CardList());

  return app;
}