const URL = "https://api.jsonbin.io/v3/b/656e2f6b54105e766fd993f0";

class Faculty {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

const fetchFaculties = async () =>
  await fetch(URL)
    .then((res) => res.json())
    .then((data) => data.record);

const main = async () => {
  const data = await fetchFaculties();
  const faculties = data.map((f) => new Faculty(f.name, f.type));
  const generalF = faculties.filter((f) => f.type === "Загальний");
  const technicalF = faculties.filter((f) => f.type === "Технічний");
  const humanF = faculties.filter((f) => f.type === "Гуманітарний");
  renderList("gen", generalF);
  renderList("tech", technicalF);
  renderList("hum", humanF);
};

const renderList = (id, faculties) => {
  const listParent = document.getElementById(id);
  faculties.forEach(
    (f) => (listParent.innerHTML += `<li>${f.name}</li>`)
  );
};

main();
