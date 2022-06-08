interface ICat {
  treats: string[],
  addTreat: (newTreat: string) => boolean
}

const myCat: ICat = {
  treats: [],
  addTreat: (newTreat: string) => {
    return false;
  }
}