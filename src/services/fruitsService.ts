import Axios from "axios";
import { FruitModel } from "src/ts/models/fruit.model";
import { baseUrl } from "src/constants/general";

const config = {
  baseURL: baseUrl,
};

const http = Axios.create(config);

const getAllFruits = async (): Promise<FruitModel[]> => {
  let fruits: FruitModel[] = [];
  try {
    const response = await http.get(config.baseURL);
    fruits = response.data;
  } catch (error) {
    console.log(error);
    // TODO: Handle error
  }

  return fruits;
};

const addFruit = (fruit: FruitModel) => {
  return http.post("/api/fruits", fruit);
};

export default {
  getAllFruits,
  addFruit,
};
