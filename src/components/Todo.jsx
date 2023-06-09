import {Draggable, Droppable} from "react-beautiful-dnd";
import Card from "./Card";
import styles from "./Todo.module.css"

export default function Todo({subtasks}){
  return(
    <div className={styles.container}>
      <div className={styles.header_container}>
        <h1 className={styles.header}>Todo ({subtasks.length})</h1>
        <i className="fa fa-circle-plus"></i>
      </div>
      <Droppable droppableId="todo">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {subtasks.map(({ description, status }, idx) => {
              if (status === "todo") {
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
