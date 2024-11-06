export const add = async (left: number, right: number) => {
  return await (
    await fetch(`http://localhost:3000/add?left=${left}&right=${right}`)
  ).json();
};
export const sub = async (left: number, right: number) => {
  return await (
    await fetch(`http://localhost:3000/sub?left=${left}&right=${right}`)
  ).json();
};
export const mul = async (left: number, right: number) => {
  return await (
    await fetch(`http://localhost:3000/mul?left=${left}&right=${right}`)
  ).json();
};
export const div = async (left: number, right: number) => {
  return await (
    await fetch(`http://localhost:3000/div?left=${left}&right=${right}`)
  ).json();
};
export const mod = async (left: number, right: number) => {
  return await (
    await fetch(`http://localhost:3000/mod?left=${left}&right=${right}`)
  ).json();
};
