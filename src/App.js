import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home.js';
import Layout from './Layout.js';
import Contact from './Contact.js';
import NoPage from './NoPage.js';
import Pocitadlo from './Pocitadlo.js';
// import Cafe from "./Cafe.js"
import Kalkulacka from './kalkulacka_folder/Kalkulacka.js';
import PocitadloABarva from './pocitadlo_a_barva_folder/PocitadloABarva.js'
import Ukolnicek from './ukolnicek_folder/Ukolnicek.js';
import Pridavadlo from './pridavadlo_folder/Pridavadlo.js';
import Test from './prumer_folder/Test.js'
import './App.css'
import Aplikace_hodnoceni from './aplikace_hodnoceni_folder/Aplikace_hodnoceni.js';

export default function App(){
    return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          {/* <Route path="coffee" element={<Cafe/>}/> */}
          <Route path="contact" element={<Contact/>}/>
          <Route path="kalkulacka" element={<Kalkulacka/>}/>
          <Route path="pocitadlo" element={<Pocitadlo/>}/>
          <Route path="pocitadlo_a_barva" element={<PocitadloABarva/>}/>
          <Route path="ukolnicek" element={<Ukolnicek/>}/>
          <Route path="pridavadlo" element={<Pridavadlo/>}/>
          <Route path="prumer" element={<Test/>}/>
          <Route path="aplikace_hodnoceni" element={<Aplikace_hodnoceni/>}/>
          <Route path="*" element={<NoPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


