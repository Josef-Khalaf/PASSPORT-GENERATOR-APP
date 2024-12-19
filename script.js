document.getElementById("form").onsubmit = function (event) {
  event.preventDefault();
  console.log("josef");
  let nameV = document.querySelector(".fullName").value.trim();
  let idV = document.querySelector(".cardId").value.trim();
  let birthV = document.querySelector(".date").value.trim();
  let pnV = document.querySelector(".pn").value;
  //make the phone number regex
  let phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(pnV)) {
    alert("enter a true phone number");
    return;
  }
  let passNumber = pasGen(nameV, pnV);
  let releseDate = randomtime();
  let PASSPORT = {
    nameV,
    idV,
    birthV,
    pnV,
    passNumber,
    releseDate,
  };
  addPass(PASSPORT);
};

// create the pasport number
function pasGen(nameV, pnV) {
  let f2l = nameV.slice(0, 2).toUpperCase();
  let f2n = pnV.slice(0, 2);
  let randomNum = parseInt(Math.random() * parseInt("7".repeat(8)));
  return `${f2l}${f2n}-${randomNum}`;
}
// create random relese-date
function randomtime() {
  let start = new Date(2012, 0, 1).getTime();
  let end = new Date().getTime();
  let randomMil = start + Math.random() * (end - start);
  let randomt = new Date(randomMil).toISOString().slice(0, 10);
  return randomt;
}
function addPass(PASSPORT) {
  let recent = document.querySelector(".recent");
  let passCard = document.createElement("div");
  passCard.classList.add("passport");
  passCard.innerHTML = `
  <p>Name:${PASSPORT.nameV}</p>
  <p>Phone Number:${PASSPORT.pnV}</p>
  <p>Birthday:${PASSPORT.birthV}</p>
  <p>ID:${PASSPORT.idV}</p>
  <p>Pasport Number:${PASSPORT.passNumber}</p>
  <p>Relase Date:${PASSPORT.releseDate}</p>
  </div>
  `;
  recent.prepend(passCard);
}
