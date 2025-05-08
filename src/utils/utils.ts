export const ROLES_ENUM = ["Developer", "Designer", "Manager"];

export const assignRole = (data: Array<any>) => {
  return data.map((element) => ({
    ...element,
    role: ROLES_ENUM[Math.floor(Math.random() * ROLES_ENUM.length)],
  }));
};
