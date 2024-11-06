export const add = async (left: number, right: number) => {
  return await (
    await fetch(
      `https://api.advancedcalculator.oop.zone/add?left=${left}&right=${right}`
    )
  ).json();
};
export const sub = async (left: number, right: number) => {
  return await (
    await fetch(
      `https://api.advancedcalculator.oop.zone/sub?left=${left}&right=${right}`
    )
  ).json();
};
export const mul = async (left: number, right: number) => {
  return await (
    await fetch(
      `https://api.advancedcalculator.oop.zone/mul?left=${left}&right=${right}`
    )
  ).json();
};
export const div = async (left: number, right: number) => {
  return await (
    await fetch(
      `https://api.advancedcalculator.oop.zone/div?left=${left}&right=${right}`
    )
  ).json();
};
export const mod = async (left: number, right: number) => {
  return await (
    await fetch(
      `https://api.advancedcalculator.oop.zone/mod?left=${left}&right=${right}`
    )
  ).json();
};
