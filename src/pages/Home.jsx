import {useContext, useEffect, useState} from "react";
import SideBar from "../components/SideBar";
import Task from "../components/Task";
import Container from "../components/UI/Container";
import {AuthContext} from "../contexts/AuthContext";
import {TaskContext} from "../contexts/TaskContext";
import {fetchTask} from "../service/TaskService";

export default function Home(){
  const [hamburger,setHamburger]=useState(false);
  const {storeTask}=useContext(TaskContext);
  const {currentUser}=useContext(AuthContext);


  function hamburgerHandler(val){
    setHamburger(val);
  }

  useEffect(()=>{
    // async function getData(){
    //   const res=await fetchTask(currentUser.uid);
    //   storeTask(res);
    // }
    // getData();

    //Immediate Invoked Function
    (async () => {
      const res = await fetchTask(currentUser.uid);
      storeTask(res);
    })();
  },[]);

  return(
      <Container>
        <SideBar hamburger={hamburger} />
        <Task hamburger={hamburger} onHamburger={hamburgerHandler}/>
      </Container>
  )
}
