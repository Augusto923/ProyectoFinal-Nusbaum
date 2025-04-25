import { getFirestore, collection, getDocs, doc, getDoc } from "firebase/firestore";
import { app } from './config'

export const db = getFirestore(app);

export const getItems = async () => {
  const itemsRef = collection(db, "items");
  const querySnapshot = await getDocs(itemsRef);

  const items = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

  return items;
};

export const getItemById = async (id) => {
  const itemRef = doc(db, "items", id); 
  const snapshot = await getDoc(itemRef);

  if (!snapshot.exists()) {
    throw new Error("Producto no encontrado");
  }

  return { id: snapshot.id, ...snapshot.data() };
};
