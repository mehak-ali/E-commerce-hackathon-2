import BEST from "../app/component/BESTAIR";
import Featured from "../app/component/FEATURED";
import Hero from "../app/component/hero"
import { GearUpShop } from '../app/component/GearUpShop'
import Last from "../app/component/last";
import Essential from "../app/component/essential";
import Miss from "../app/component/miss";
import Sidebar from "../app/component/allproducts";
import Prodetail from "../app/component/prodetail";
import LoginForm from "../app/component/loginform";
import Header from "./component/header";



export default function Home() {
  return (
    <div>
      
      <Hero/>
      <BEST/>
      <Featured/>
      <GearUpShop />
      <Miss/>
      <Essential/>
      <Last/>

      <Sidebar/>

      <Prodetail/>

    
    </div>
  );
}