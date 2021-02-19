import { APIShip } from "../store/starships/types";
import {
  HOURS_IN_YEAR,
  HOURS_IN_MONTH,
  HOURS_IN_WEEK,
  HOURS_IN_DAY,
} from "./constants";

const getMGLTPerStop = ({ MGLT, consumables }: APIShip) => {
  if (MGLT === "unknown" || consumables === "unknown") {
    return "unknown";
  } else {
    if (consumables.includes("year")) {
      const timeInYears = consumables.split(" ")[0];
      const timeInHours = Number(timeInYears) * HOURS_IN_YEAR;
      return Number(MGLT) * timeInHours;
    } else if (consumables.includes("month")) {
      const timeInMonths = consumables.split(" ")[0];
      const timeInHours = Number(timeInMonths) * HOURS_IN_MONTH;
      return Number(MGLT) * timeInHours;
    } else if (consumables.includes("week")) {
      const timeInWeeks = consumables.split(" ")[0];
      const timeInHours = Number(timeInWeeks) * HOURS_IN_WEEK;
      return Number(MGLT) * timeInHours;
    } else if (consumables.includes("day")) {
      const timeInDays = consumables.split(" ")[0];
      const timeInHours = Number(timeInDays) * HOURS_IN_DAY;
      return Number(MGLT) * timeInHours;
    }
  }
};

export default getMGLTPerStop;
