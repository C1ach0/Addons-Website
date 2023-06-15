import { version } from "../package.json";
import Toggle from "./class/Toggle.class";
import Regex from "./class/Regex.class";

export {
   /**
    * Get version of library
    */
   version,
   /**
    * Create new instance for boolean, easy to change between true/false
    */
   Toggle,
   /**
    * Test valig name, password, email or with custom regex
    */
   Regex
}
