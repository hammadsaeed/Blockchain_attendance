import { db } from './firebase';

// User API

export const doCreateUser = (id, username, email) =>
  db.ref(`users/Student/${username}`).set({
    username,
    email,
  });

 export const doCreateUser_2 = (username, email) =>
    db.ref(`Student/${email.substring(0,email.indexOf('@'))}`).set({
      username,
      email,
    });

  export const doCreateUser_Teacher = (id, username, email) =>
    db.ref(`users/Teacher/${username}`).set({
      username,
      email,
    });

export const createAClassEntry = (studentName,entry) =>
      db.ref(`users/Student/${studentName}/Modules/${entry}`).set({
        entry,
      });


export const countNumberOfStudents = () =>{
    //  return db.ref('users/Student').set(event.data.numChildren());
      return db.ref('users/Student').once('value');
}

export const addATeacher = (email) =>
    db.ref(`users/Teacher/Names/${email}`).set({
     email,
    });

export const doTheyAttend = (studentName) =>{
    //  return db.ref('users/Student').set(event.data.numChildren());
      return db.ref(`users/Student/${studentName}/username`).once('value');
}

export const check_Teacher =(email) =>{
return db.ref(`users/Teacher/Names/${email.substring(0,email.indexOf('@'))}`).once('value')
}

export const check_Teacher_Home = (currentEmail) =>{
return db.ref(`users/Teacher/Names/${currentEmail.substring(0,currentEmail.indexOf('@'))}`).once('value')
}

export const check_Teacher_Home_2 = (currentEmail) =>{
return db.ref(`users/Teacher/Names/${currentEmail}`).once('value')
}

export const savingStudentID = (studentid,moduleName) =>
    db.ref(`users/modules/${moduleName}/${studentid}`).set({  //add /students after module name
    studentid,
    });

export const savingTeacherID = (teacherid,moduleName) =>
        db.ref(`users/modules/${moduleName}/Teacher/${teacherid}`).set({
        teacherid,
        });
export const savingTeacherIDInTeacher = (teacherid,moduleName) =>
        db.ref(`users/Teacher/${teacherid}/modules/${moduleName}`).set({
        teacherid,
        });

export const onceGetUsers = () =>
  db.ref('users').once('value');

export const getModules = (studentid) =>{
 return db.ref(`users/Student/${studentid}/Modules`).once('value')
  }

  export const getStudentId = (email) =>{
    return db.ref(`Student/${email.substring(0,email.indexOf('@'))}`).once('value')
    }

export const updatingQrcode = (date, modulename)=>
        db.ref(`attendance/${modulename}/${date}`).set({
        date,
        });


// Other db APIs ...
