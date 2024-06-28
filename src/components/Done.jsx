import { useState } from "react";
import Card from "./Card";
import styles from "./Todo.module.css";
import { Draggable, Droppable } from "react-beautiful-dnd";

export default function Done({ subtasks }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  function modalCloseHandler(val) {
    setIsDialogOpen(val);
  }

  return (
    <div className={styles.container}>
      <div className={styles.header_container}>
        <div>
          <div
            className={styles.circle}
            style={{
              backgroundColor: "#63E4AC",
            }}
          ></div>
          <h1 className={styles.header}>done</h1>
        </div>
        <i
          className="fa fa-circle-plus"
          onClick={() => setIsDialogOpen(true)}
        ></i>
      </div>

      {isDialogOpen && (
        <Modal taskStatus={"todo"} onDialogClose={modalCloseHandler} />
      )}

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
  );
}
