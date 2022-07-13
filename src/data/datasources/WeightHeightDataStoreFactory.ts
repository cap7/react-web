import WeightHeightDataStore from "./WeightHeightDataStore"
import WeightHeightDataStoreApi from "./api/WeightHeight"

export default class WeightHeightDataStoreFactory {
  static create(): WeightHeightDataStore {
    return new WeightHeightDataStoreApi()
  }
}
