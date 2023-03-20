import Mainmenu from "./component/mainmenu/mainmenu.component";
import { WeatherContextProvider } from "./context/weatherContext";

function App() {
  return (
    <WeatherContextProvider>
      <Mainmenu />
    </WeatherContextProvider>
  );
}

export default App;
