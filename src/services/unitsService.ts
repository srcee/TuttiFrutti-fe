import Axios from "axios";
import { baseUrl } from "../constants/general";
import { Unit } from "src/ts/models/unit.model";

const http = Axios.create({
  baseURL: baseUrl,
});

const getValidUnits = async (): Promise<Unit[]> => {
  let units: Unit[] = [];
  try {
    const response = await http.get("/api/fruits/units");
    units = response.data;
  } catch (error) {
    // TODO: Handle error
    console.log(error);
  }

  return units;
};

export default {
  getValidUnits,
};
