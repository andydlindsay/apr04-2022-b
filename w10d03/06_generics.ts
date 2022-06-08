interface IContainer<T, B> {
  name: string,
  contents: T,
  myArr?: B[]
}

const stringContainer: IContainer<string, number> = {
  name: 'string container',
  contents: 'hello world'
};

const numberContainer: IContainer<number, boolean> = {
  name: 'number container',
  contents: 42
};
