class Apartment {
  constructor(address, rooms, price, repair) {
      this.address = address;
      this.rooms = rooms;
      this.price = price;
      this.repair = repair;
  }
}

const apartments = [
  new Apartment("вул. Лінкольна, 123", 2, 100000, "звичайний"),
  new Apartment("вул. Вашингтона, 456", 3, 150000, "євроремонт"),
  new Apartment("вул. Франкліна, 789", 1, 80000, "стандартний")
];

const displayApartments = () => {
  const previousTable = document.getElementById('apartmentTable');
  if (previousTable) {
      previousTable.remove();
  }
  const table = document.createElement('table');
  table.id = 'apartmentTable';

  const headerRow = table.insertRow(0);
  for (let key in apartments[0]) {
      const headerCell = headerRow.insertCell(-1);
      headerCell.textContent = key.charAt(0).toUpperCase() + key.slice(1);
  }

  for (let i = 0; i < apartments.length; i++) {
      const row = table.insertRow(-1);
      for (let key in apartments[i]) {
          const cell = row.insertCell(-1);
          cell.textContent = apartments[i][key];
      }
  }

  document.body.appendChild(table);
}

const addApartment = () => {
  const address = document.getElementById('address').value;
  const rooms = parseInt(document.getElementById('rooms').value);
  const price = parseInt(document.getElementById('price').value);
  const repair = document.getElementById('repair').value;

  const newApartment = new Apartment(address, rooms, price, repair);
  apartments.push(newApartment);


  document.getElementById('address').value = '';
  document.getElementById('rooms').value = '';
  document.getElementById('price').value = '';
  document.getElementById('repair').value = '';
}