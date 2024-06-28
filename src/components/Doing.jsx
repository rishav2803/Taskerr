import Card from "./Card";
import styles from "./Todo.module.css";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { useState } from "react";
import Modal from "./UI/Modal";

export default function Doing({ subtasks }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  console.log(subtasks);

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
              backgroundColor: "#826FEF",
            }}
          ></div>
          <h1 className={styles.header}>Doing</h1>
        </div>
        <i
          className="fa fa-circle-plus"
          onClick={() => setIsDialogOpen(true)}
        ></i>
      </div>

      {isDialogOpen && (
        <Modal taskStatus={"doing"} onDialogClose={modalCloseHandler} />
      )}

      <Droppable droppableId="doing">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {subtasks.map(({ description, status }, idx) => {
              if (status === "doing") {
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
