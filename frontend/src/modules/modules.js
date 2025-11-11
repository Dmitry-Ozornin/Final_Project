export const addID = (id) => {
//   console.log(id);
  let dubl = false;
  const masId = localStorage.getItem("basketFasion").split(",");
console.log(masId.length);
  console.log(dubl);
  if (masId) {
    if (masId.length > 0) {
      for (let i = 0; i < masId.length; i++) {
        if (masId[i] === id) {
          dubl = true;
          console.log("дубль");
          continue;
        }
      }
      if (dubl === false) {
        localStorage.setItem("basketFasion", [localStorage.getItem("basketFasion"), id]);
      }
    }
  } else {
    localStorage.setItem("basketFasion", id);
  }
};
