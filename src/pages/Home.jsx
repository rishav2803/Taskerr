import SideBar from "../components/SideBar";
import Task from "../components/Task";
import Container from "../components/UI/Container";

export default function Home(){

  const data=[
    {
    name:"MajorProject",
    status:"Todo",
    todo:["build","deploy"]
   }
  ];

  return(
    <Container>
      <SideBar />
      <Task />
    </Container>
  )
}
