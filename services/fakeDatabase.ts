// You can ignore this!! It's just for the class example!

import { cars } from "../mocks/cars";

const database = {
  all: () => cars,
  find: (id: number) => cars.filter((car) => car.id === id)[0] || null,
};

export default database;
