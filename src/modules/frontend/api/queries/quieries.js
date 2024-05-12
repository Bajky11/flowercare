import { basicAuth } from "../constants";

function createRequestOptions(method, body) {
  const options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: basicAuth,
    },
  };
  if (body !== null && body !== undefined) options.body = JSON.stringify(body);
  return options;
}

async function fetchRequest(url, options) {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Error status: ${response.status}`);
  }
  return response.json();
}

export async function fetchUserByUsernameAndPassword(username, password) {
  const options = createRequestOptions("POST", { username, password });
  const url = `http://localhost:9000/flowercare/v1/users/login`;
  return await fetchRequest(url, options);
}

export async function postNewUser(username, password) {
  const options = createRequestOptions("POST", { username, password });
  const url = `http://localhost:9000/flowercare/v1/users/register`;
  return await fetchRequest(url, options);
}

export async function fetchUserPlantsById(id) {
  const options = createRequestOptions("GET");
  const url = `http://localhost:9000/flowercare/v1/userplants/${id}`;
  return await fetchRequest(url, options);
}

export async function fetchAllPlantsPagable(pageNumber, pageSize, sort) {
  const options = createRequestOptions("GET");
  const url = `http://localhost:9000/flowercare/v1/plants/pagable?page=${pageNumber}&size=${pageSize}&sort=name,${sort}`;
  return await fetchRequest(url, options);
}

export async function postNewUserPlant(userId, plantId) {
  const options = createRequestOptions("POST", { userId, plantId });
  const url = `http://localhost:9000/flowercare/v1/userplants/add`;
  return await fetchRequest(url, options);
}

export async function postWaterUserPlantById(userPlantId) {
  const options = createRequestOptions("POST", { userPlantId });
  const url = `http://localhost:9000/flowercare/v1/userplants/water/${userPlantId}`;
  return await fetchRequest(url, options);
}

export async function postFertilizeUserPlantById(userPlantId) {
  const options = createRequestOptions("POST", { userPlantId });
  const url = `http://localhost:9000/flowercare/v1/userplants/fertilize/${userPlantId}`;
  return await fetchRequest(url, options);
}
