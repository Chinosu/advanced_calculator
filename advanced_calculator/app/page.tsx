'use client';

import { add, div, mod, mul, sub } from './lib/api';
import { CalcButton } from './ui/button';
import { useState } from 'react';

export default function Page() {
  const [display, setDisplay] = useState('0');
  const lastNumber = () => display.match(/[0-9\.]*$/)![0];
  const append_digit = (n: number) => {
    if (lastNumber() === '0') {
      setDisplay(
        display.split('').slice(0, -1).concat([n.toString()]).join('')
      );
    } else {
      setDisplay(display.split('').concat([n.toString()]).join(''));
    }
  };

  const append_operator = (op: string) => {
    let res = display;
    if (lastNumber() === '') {
      res = res.split('').slice(0, -1).join('');
    }
    res = res.split('').concat([op]).join('');
    setDisplay(res);
  };

  const append_dot = () => {
    let res = display;
    if (lastNumber().includes('.')) {
      return;
    }
    if (lastNumber() === '') {
      res = res.split('').concat(['0']).join('');
    }
    res = res.split('').concat(['.']).join('');
    setDisplay(res);
  };

  const delete_last = () => {
    let res = display.split('').slice(0, -1).join('');
    if (res === '') {
      res = '0';
    }
    setDisplay(res);
  };

  const evaluate = async () => {
    const tokens = display.match(/([0-9\.]+)|([\%\÷\×\−\+])/g)!;
    if (tokens.length % 2 == 0) {
      tokens.pop();
    }

    let result = parseFloat(tokens[0]);
    for (let i = 1; i < tokens.length; i += 2) {
      const op = tokens[i];
      const right = parseFloat(tokens[i + 1]);
      switch (op) {
        case '+':
          result = await add(result, right);
          break;
        case '−':
          result = await sub(result, right);
          break;
        case '×':
          result = await mul(result, right);
          break;
        case '÷':
          result = await div(result, right);
          break;
        case '%':
          result = await mod(result, right);
          break;
      }
    }

    setDisplay(result.toString());
  };

  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex flex-col justify-center w-auto">
        <div className="flex flex-row justify-center bg-red-400 w-auto">
          {display}
        </div>
        <div className="flex flex-row justify-center">
          <CalcButton onClick={(_) => delete_last()}>⌫</CalcButton>
          <CalcButton>[±]</CalcButton>
          <CalcButton onClick={(_) => append_operator('%')}>%</CalcButton>
          <CalcButton onClick={(_) => append_operator('÷')}>÷</CalcButton>
        </div>
        <div className="flex flex-row justify-center">
          <CalcButton onClick={(_) => append_digit(7)}>7</CalcButton>
          <CalcButton onClick={(_) => append_digit(8)}>8</CalcButton>
          <CalcButton onClick={(_) => append_digit(9)}>9</CalcButton>
          <CalcButton onClick={(_) => append_operator('×')}>×</CalcButton>
        </div>
        <div className="flex flex-row justify-center">
          <CalcButton onClick={(_) => append_digit(4)}>4</CalcButton>
          <CalcButton onClick={(_) => append_digit(5)}>5</CalcButton>
          <CalcButton onClick={(_) => append_digit(6)}>6</CalcButton>
          <CalcButton onClick={(_) => append_operator('−')}>−</CalcButton>
        </div>
        <div className="flex flex-row justify-center">
          <CalcButton onClick={(_) => append_digit(1)}>1</CalcButton>
          <CalcButton onClick={(_) => append_digit(2)}>2</CalcButton>
          <CalcButton onClick={(_) => append_digit(3)}>3</CalcButton>
          <CalcButton onClick={(_) => append_operator('+')}>+</CalcButton>
        </div>
        <div className="flex flex-row justify-center">
          <CalcButton>[?]</CalcButton>
          <CalcButton onClick={(_) => append_digit(0)}>0</CalcButton>
          <CalcButton onClick={(_) => append_dot()}>.</CalcButton>
          <CalcButton onClick={(_) => evaluate()}>=</CalcButton>
        </div>
      </div>
    </main>
  );
}
