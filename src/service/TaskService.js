import { firestore } from "../firebase";

export async function fetchTask(uid) {
  try {
    const querysnapshot = await firestore
      .collection("tasks")
      .where("user_id", "==", uid)
      .get();
    const tasks = [];
    querysnapshot.forEach((doc) => {
      const taskData = doc.data();
      delete taskData.user_id;
      tasks.push({ id: doc.id, ...taskData });
    });
    return tasks;
  } catch (error) {
    console.log(error);
  }
}

export async function insertTask(task) {
  try {
    const taskRef = firestore.collection("tasks").doc(); // Create a new document reference with an auto-generated ID
    await taskRef.set(task); // Set the data of the document to the task object
    const insertedTask = { id: taskRef.id, ...task };
    return insertedTask;
  } catch (error) {
    console.log(error);
  }
}

export async function updateSubTask(newSubtask, uid, tid) {
  try {
    const querySnapshot = await firestore
      .collection("tasks")
      .where("user_id", "==", uid)
      .get();

    const taskDoc = querySnapshot.docs.find((doc) => doc.id === tid);

    if (taskDoc) {
      //Get the refrence of the specifc document to preform crud operations
      const taskRef = firestore.collection("tasks").doc(taskDoc.id);
      const taskData = taskDoc.data();
      const existingSubtasks = taskData.subtasks || [];
      const updatedSubtasks = [...existingSubtasks, ...newSubtask];

      //Update the document
      await taskRef.update({ subtasks: updatedSubtasks });

      //Fetch and return the updated task;
      const updatedTaskSnapshot = await taskRef.get();
      const updatedTaskData = updatedTaskSnapshot.data();
      return { id: taskDoc.id, ...updatedTaskData };
    } else {
      throw new Error("Task not found");
    }
  } catch (error) {
    console.log(error);
    return { error: error.message };
  }
}
