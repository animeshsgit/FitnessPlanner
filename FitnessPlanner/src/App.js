import { useContext } from "react";
import { ThemeProvider, ThemeContext } from "./Context/ThemeContext";
import Form from "./Component/Form/Form";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Component/Home/Home";

function App() {
  const { theme } = useContext(ThemeContext)

  return <div>
    <ThemeProvider>
      {console.log(theme)}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/form" element={<Form />} />
        </Routes>
        
      </BrowserRouter>
    </ThemeProvider>
  </div>;
}

export default App;
