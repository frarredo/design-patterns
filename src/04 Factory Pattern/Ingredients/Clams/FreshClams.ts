import { ClamTypes } from "../../Types";
import Clams from "./Clams";

export default class FreshClams extends Clams {
  protected type: ClamTypes;

  constructor() {
    super();
    this.type = ClamTypes.Fresh;
  }
}
