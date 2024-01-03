// bootstrap_link 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Navbar_comonent } from './assets/Navbar_all_Components/Navbar_Components';
import { Header_component } from './assets/Header_all component/Header_component';
import { Section_1 } from './assets/section_all_components/section-1_component';
import { Section_3 } from './assets/section_all_components/section-3_card_component';
import { Section_2 } from './assets/section_all_components/section-2_component';
import { Section_4 } from './assets/section_all_components/section-4_img_component';
const App = () => {
    return (
        <div>
            <Navbar_comonent />
            <Header_component />
            <Section_1 />
            <Section_2/>
            <Section_3/>
            <Section_4/>

        </div>

    )
}

export default App