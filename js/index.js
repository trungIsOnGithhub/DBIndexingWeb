function twoImagesLayout(data) {
  return `<div class="two-img-layout">
            <div>
              <h6>${data.title1}</h6>
              <img src="${data.img1}" alt="${data.alt1}">
              <p>${data.caption1}</p>
            <div>
            <div>
              <h6>${data.title2}</h6>
              <img src="${data.img2}" alt="${data.alt2}">
              <p>${data.caption2}</p>
            <div>
          </div>`;
}
const mainContent = document.getElementById('main-content');
const buttonDense = document.getElementById("ob-dense"),
      buttonSparse = document.getElementById("ob-sparse"),
      buttonStatic = document.getElementById("hb-static"),
      buttonDynamic = document.getElementById("hb-dynamic"),
      buttonNonSerializableRecoverable = document.getElementById("inter-nseri-reco"),
      buttonNonSerializableNonRecoverable = document.getElementById("inter-nseri-nreco");
buttonDense.onclick = function() {
  const data = {
    title1: "Structure 1 - Dense Index",
    img1: "dense1.png",
    alt1: "Dense Index for Key Field Image",
    caption1: "Dense Index for Key Field.",
    title2: "Structure 2 - Dense Index",
    img2: "dense2.png",
    alt2: "Dense Index for Non-Key Field Image",
    caption2: "Dense Index for Non-Key Field.",
  }

  mainContent.innerHTML = twoImagesLayout(data);
};
buttonSparse.onclick = function() {
  const data = {
    title1: "Structure 1 - Sparse Index",
    img1: "sparse1.png",
    alt1: "Sparse Index for Key Field Image",
    caption1: "Sparse Index for Key Field.",
    title2: "Structure 2 - Secondary Index",
    img2: "secondary.png",
    alt2: "Secondary Index for Any Field Image",
    caption2: "Secondary Index for Any Field.",
  }

  mainContent.innerHTML = twoImagesLayout(data);
};
// buttonSerializable.onclick = function() {
//   const schedule = [
//     { transaction: 1, operation: "r", resource: 1 },
//     { transaction: 2, operation: "r", resource: 1 },
//     { transaction: 1, operation: "r", resource: 2 },
//     { transaction: 2, operation: "r", resource: 2 },
//     { transaction: 1, operation: "w", resource: 2 },
//     { transaction: 2, operation: "w", resource: 1 },
//     { transaction: 1, operation: "c", resource: 0 },
//     { transaction: 2, operation: "c", resource: 0 }
//   ];

//   description.innerHTML = "An equivalence to the serial schedules(the serial one).";

//   mapArrayToTable(schedule); 
// };
// buttonNonSerializable.onclick = function() {
//   const schedule = [
//     { transaction: 1, operation: "r", resource: 1 },
//     { transaction: 2, operation: "r", resource: 1 },
//     { transaction: 1, operation: "r", resource: 2 },
//     { transaction: 1, operation: "w", resource: 2 },
//     { transaction: 2, operation: "r", resource: 2 },
//     { transaction: 2, operation: "w", resource: 1 },
//     { transaction: 2, operation: "c", resource: 0 },
//     { transaction: 1, operation: "c", resource: 0 }
//   ];

//   description.innerHTML = "The order of READ and WRITE for ResourceB has been changed compare to the serializable one.";

//   mapArrayToTable(schedule); 
// };
// buttonNonSerializableRecoverable.onclick = function() {
//   const schedule = [
//     { transaction: 1, operation: "r", resource: 1 },
//     { transaction: 1, operation: "w", resource: 1 },
//     { transaction: 2, operation: "r", resource: 2 },
//     { transaction: 2, operation: "r", resource: 1 },
//     { transaction: 1, operation: "c", resource: 0 },
//     { transaction: 2, operation: "w", resource: 1 },
//     { transaction: 1, operation: "c", resource: 0 },
//   ];

//   description.innerHTML = " To be recoverable, transactions must commit only after all transactions whose changes they read commit.";

//   mapArrayToTable(schedule); 
// };
// buttonNonSerializableNonRecoverable.onclick = function() {
//   const schedule = [
//     { transaction: 1, operation: "r", resource: 2 },
//     { transaction: 1, operation: "w", resource: 1 },
//     { transaction: 2, operation: "r", resource: 1 },
//     { transaction: 1, operation: "a", resource: 0 },
//     { transaction: 2, operation: "r", resource: 1 },
//     { transaction: 2, operation: "w", resource: 1 },
//     { transaction: 1, operation: "c", resource: 0 },
//   ];

//   description.innerHTML = "ABORT before after other transaction read changes and before other transaction to commit, bring to an Inconsistency.";

//   mapArrayToTable(schedule); 
// };
