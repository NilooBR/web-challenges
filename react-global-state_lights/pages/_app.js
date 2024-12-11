import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialLights = [
  { id: 0, name: "Wohnzimmer", isOn: false },
  { id: 1, name: "Küche", isOn: false },
  { id: 2, name: "Schlaffzimmer", isOn: true },
  { id: 3, name: "Badezimmer", isOn: false },
];
export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);

  function HandleToggle(id) {
    setLights((lights) =>
      lights.map((light) => {
        if (light.id === id) {
          return { ...light, isOn: !light.isOn };
        }
        return light;
      })
    );
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} lights={lights} onToggle={HandleToggle} />
    </Layout>
  );
}
