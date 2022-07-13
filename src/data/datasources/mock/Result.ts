import ResultDataStore from "../ResultDataStore"

export default class ResultDataStoreMock implements ResultDataStore {
  async listResult() {
    const data = [
      {
        id: 0,
        name: "Pendiente",
      },
      {
        id: 1,
        name: "Preliminar",
      },
      {
        id: 2,
        name: "Terminado",
      },
    ]

    return data
  }
}
