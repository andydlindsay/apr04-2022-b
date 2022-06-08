// name, arguments, return value

const sayHello = (firstName: string, age?: number): boolean | string | number => {
  return 42;
};

const returnVal = sayHello('Alice');

const returningPromise = (num: number): Promise<string> => {
  if (true) {
    return new Promise((resolve) => {
      resolve('hello');
    });
  }
};

const higherOrderFn = (callback: (err: string, data: string) => void) => {
  callback('nothing', 'hello');
};

higherOrderFn((err, data) => {});