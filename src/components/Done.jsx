import Card from "./Card";
import styles from "./Todo.module.css"
import {Draggable, Droppable} from "react-beautiful-dnd";

export default function Done({subtasks}){
  return(
    <div className={styles.container}>
      <div className={styles.header_container}>
        <h1 className={styles.header}>Done</h1>
        <i className="fa fa-circle-plus"></i>
      </div>
      <Droppable droppableId="done">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {subtasks.map(({ description, status }, idx) => {
              if (status === "done") {
                return (
                  <Draggable key={idx} draggableId={`task-${idx}`} index={idx}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Card desc={description} />
                      </div>
                    )}
                  </Draggable>
                );
              }
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}
