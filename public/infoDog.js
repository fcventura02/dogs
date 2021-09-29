const listName = document.getElementById("list-name");
const listNameInput = document.getElementById("list-name-input");
const title = document.getElementById("title");
const temperamentDog = document.getElementById("temperament");
const description = document.getElementById("description");
const breadFor = document.getElementById("bread_for");
const imageDog = document.getElementById("image-dog");
let listDog = [];

const createOptionListName = (dogInfo) => {
  const option = document.createElement("option");
  option.setAttribute("value", dogInfo.name);
  return option;
};

const renderDescriptionDog = ({
  name,
  life_span,
  temperament,
  height,
  weight,
  bred_for,
  image,
}) => {
  const life = document.createElement("li");
  const heightDog = document.createElement("li");
  const weightDog = document.createElement("li");
  const img = document.createElement("img");
  //img
  img.setAttribute("src", `${image.url}`);
  img.setAttribute("alt", "");
  img.classList.add("w-screen", "max-w-none");
  //li
  life.innerHTML = `<p>${life_span}</p>`;
  life.classList.add("md:text-3xl", "text-xl", "font-bold");
  heightDog.innerHTML = `<p>${height.metric} cm</p>`;
  heightDog.classList.add("md:text-3xl", "text-xl", "font-bold");
  weightDog.innerHTML = `<p>${weight.metric} kg</p>`;
  weightDog.classList.add("md:text-3xl", "text-xl", "font-bold");
  //h1
  title.innerText = name;
  //p
  temperamentDog.innerText = temperament;
  description.innerHTML = "";
  description.appendChild(life);
  description.appendChild(heightDog);
  description.appendChild(weightDog);
  breadFor.innerText = bred_for;
  imageDog.innerHTML = "";
  imageDog.appendChild(img);
};

const getDog = async () => {
  listDog = await fetch("https://api.thedogapi.com/v1/breeds").then(
    async (res) => {
      return await res.json();
    }
  );
  for (const itens of listDog) {
    listName.appendChild(createOptionListName(itens));
  }
  renderDescriptionDog(listDog[0]);
};

getDog();

listNameInput.addEventListener("change", (e) => {
  renderDescriptionDog(
    listDog.find((dog) => {
      return dog.name === e.target.value;
    })
  );
});
