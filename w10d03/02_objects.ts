interface IWriter {
  id?: number,
  firstName: string,
  numBooksWritten: number,
  friends?: IWriter[]
}

const writer: IWriter = {
  firstName: 'Alice',
  numBooksWritten: 42
};
