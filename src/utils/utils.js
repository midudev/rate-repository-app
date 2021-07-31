export const stringToJson = (string) => {
  let response = string;
  try {
    response = JSON.parse(string);
  } catch (e) {
    console.error(`::: Error parsing string to JSON`, e);
  } finally {
    return response;
  }
};

export const jsonToString = (json) =>
  typeof json === "object" ? JSON.stringify(json) : json;

export const isArray = (array) => Array.isArray(array);

export const isObject = (object) =>
  typeof object === "object" && !Array.isArray(object);

export const isNumber = (value) => typeof value === "number";
