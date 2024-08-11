import { useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import Card from "./Card";
import styles from "./Todo.module.css";
import UpdateForm from "./UpdateForm";
export default function Todo({ subtasks }) {
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
              backgroundColor: "#41C3E5",
            }}
          ></div>
          <h1 className={styles.header}>Todo</h1>
        </div>
        <i
          className="fa fa-circle-plus"
          onClick={() => setIsDialogOpen(true)}
        ></i>
      </div>

      {isDialogOpen && (
        <UpdateForm onClose={modalCloseHandler} taskStatus="todo" />
      )}

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
  );
}
