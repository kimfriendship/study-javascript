import "normalize.css";
import styles from "./index.module.scss";
import Img from "./assets/DND_Map.png";
import Svg from "./assets/iconfinder_weather-02_1530391.svg";
import "@babel/polyfill";

function component() {
  const element = document.createElement("div");
  const imgElement = document.createElement("img");
  element.innerHTML = "Hello Webpack";
  element.classList = styles.helloWebpack;
  imgElement.src = Svg;

  element.appendChild(imgElement);

  console.log(Svg);
  console.log(styles);
  return element;
}

console.log(`IS_PRODUCTION MODE: ${IS_PRODUCTION}`);

document.body.appendChild(component());
