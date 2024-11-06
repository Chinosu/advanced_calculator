export let display = '0';

export const lastNumber = () => display.match(/[0-9]*$/)![0];
export const digitb = (n: number) => {
  if (lastNumber() === '0') {
    display = display.split('').slice(0, -1).concat([n.toString()]).join('');
  } else {
    display = display.split('').concat([n.toString()]).join('');
  }
};
export const operatorb = (op: string) => {
  display = display.split('').concat([op]).join('');
};
// const equalsq = () => {};
export const delb = () => {
  display = display.split('').slice(0, -1).join('');
};

// console.log(display);
// digitb(9);
// console.log(display);
// digitb(1);
// digitb(2);
// digitb(3);
// console.log(display);
// delb();
// console.log(display);
// delb();
// console.log(display);
