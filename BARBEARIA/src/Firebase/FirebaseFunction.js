import { db } from "./FirebaseConfig";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, setDoc, updateDoc, where } from "firebase/firestore"

async function readData(table){
    const colection = collection(db, table)
    const snapShot = await getDocs(colection).catch(e => {
        console.log("Erro aqui: ", e)
    })
    const data = snapShot.docs.map(doc => {
        return {
            id: doc.id,
            ...doc.data()
        }
    })
    return data
}

async function readOneData(table, id){
    return await getDoc(doc(db, table, id)).then(doc => {
        return {
            id: doc.id,
            ...doc.data()
        }
    })
    .catch(err => console.log('Erro ao ler do firebase: ', err))
}

async function readOneDataFiltered(table, field){
return await getDocs(query(collection(db, table), where("email", '==', field)))
    .then(query => query.docs.map(doc => {
        return {
            id:doc.id,
            ...doc.data()
        }
    }))
    .catch(e => {
        console.log("Erro ao ler dado filtrado: ", e)
    })
}


async function addDataWithId(table, data, id){
    await setDoc(doc(db, table, id), data)
    .catch(err => {
        console.log('Erro ao adicionar no firebase: ', err)
    })
}

async function addData(table, data){
    return await addDoc(collection(db, table), data)
    .then(doc => {
        return doc.id
    })
    .catch(err => {
        console.log('Erro ao adicionar no firebase: ', err)
    })
}

async function deleteData(table, id){
    await deleteDoc(doc(db, table, id))
    .then( _ => {
        console.log('Dados deletados!')
    })
    .catch(err => {
        console.log('Erro ao deletar: ', err)
    })
}

async function updateData(table, id, data) {
    try {
      await updateDoc(doc(db, table, id), data);
      console.log('Dados da tabela ' + table + ' atualizados!');
    } catch (err) {
      console.log('Erro ao atualizar dados: ', err);
    }
}

export {
    readData,
    readOneData,
    // addDataWithId,
    addData,
    deleteData,
    updateData,
    readOneDataFiltered,
}