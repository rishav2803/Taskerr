import {useState} from "react";
import SideBar from "../components/SideBar";
import Task from "../components/Task";
import Container from "../components/UI/Container";

export default function Home(){
  const [hamburger,setHamburger]=useState(false);

  function hamburgerHandler(val){
    setHamburger(val);
  }

  return(
    <Container>
      <SideBar hamburger={hamburger} />
      <Task hamburger={hamburger} onHamburger={hamburgerHandler}/>
    </Container>
  )
}
