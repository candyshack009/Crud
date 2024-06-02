var UidV, fnameV, mnameV, snameV, EaddV, adressV;

function readFom() {
  UidV = document.getElementById("Uid").value;
  fnameV = document.getElementById("nfame").value;
  mnameV = document.getElementById("mfame").value
  snameV = document.getElementById("sname").value;
  EaddV = document.getElementById("Eadd").value;
  addressV = document.getElementById("address").value;
  console.log(UidV, fnameV, mnameV, snameV, addressV, EaddV);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + UidV)
    .set({
      Uid: UidV,
      fname: fnameV,
      mname: mnameV,
      Surname: snameV,
      Eadd: EaddV,
      address: addressV,
    });
  alert("Data Inserted");
  document.getElementById("Uid").value = "";
  document.getElementById("fname").value = "";
  document.getElementById("mname").value = "";
  document.getElementById("sname").value = "";
  document.getElementById("Eadd").value = "";
  document.getElementById("address").value = "";
};

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + UidV)
    .on("value", function (snap) {
      document.getElementById("Uid").value = snap.val().rollNo;
      document.getElementById("fname").value = snap.val().name;
      document.getElementById("mname").value = snap.val().name;
      document.getElementById("sname").value = snap.val().Surname;
      document.getElementById("Eadd").value = snap.val().gender;
      document.getElementById("address").value = snap.val().address;
    });
};

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + UidV)
    .update({
      //   rollNo: rollV,
      fname: fnameV,
      mname: mnameV,
      sname: snameV,
      Eadd: EaddV,
      address: addressV,
    });
  alert("Data Update");
  document.getElementById("Uid").value = "";
  document.getElementById("fname").value = "";
  document.getElementById("mname").value = "";
  document.getElementById("sname").value = "";
  document.getElementById("Eadd").value = "";
  document.getElementById("address").value = "";
};
document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + UidV)
    .remove();
  alert("Data Deleted");
  document.getElementById("Uid").value = "";
  document.getElementById("fname").value = "";
  document.getElementById("mname").value = "";
  document.getElementById("sname").value = "";
  document.getElementById("Eadd").value = "";
  document.getElementById("address").value = "";
};