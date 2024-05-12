const username = "admin";
const password = "admin";
export const basicAuth = `Basic ${btoa(`${username}:${password}`)}`;
