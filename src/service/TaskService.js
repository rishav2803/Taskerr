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
