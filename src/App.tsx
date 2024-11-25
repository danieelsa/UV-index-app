import { ReactNode } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";


interface Props
{
  children: ReactNode
}

function App({children}: Props) {
  return <div className="layout">
    <Header/>
    {children}
    <Footer/>
  </div>
}

export default App;