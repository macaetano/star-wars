import { APIShip } from "../store/starships/types";
import {
  HOURS_IN_YEAR,
  HOURS_IN_MONTH,
  HOURS_IN_WEEK,
  HOURS_IN_DAY,
} from "./constants";

type PeriodType = "YEARS" | "MONTHS" | "WEEKS" | "DAYS";
const getConsumableTimeInHours = (
  time: PeriodType,
  consumables: string
): number => {
  const consumablesTimeInHours = Number(consumables.split(" ")[0]);
  switch (time) {
    case "DAYS":
      return HOURS_IN_DAY * consumablesTimeInHours;
    case "WEEKS":
      return HOURS_IN_WEEK * consumablesTimeInHours;
    case "MONTHS":
      return HOURS_IN_MONTH * consumablesTimeInHours;
    case "YEARS":
      return HOURS_IN_YEAR * consumablesTimeInHours;
    default:
      return 0;
  }
};

const getMGLTPerStop = ({ MGLT, consumables }: APIShip) => {
  if (MGLT === "unknown" || consumables === "unknown") {
    return "unknown";
  } else {
    const parsedMGLT = Number(MGLT);
    if (consumables.includes("year")) {
      return parsedMGLT * getConsumableTimeInHours("YEARS", consumables);
    } else if (consumables.includes("month")) {
      return parsedMGLT * getConsumableTimeInHours("MONTHS", consumables);
    } else if (consumables.includes("week")) {
      return parsedMGLT * getConsumableTimeInHours("WEEKS", consumables);
    } else if (consumables.includes("day")) {
      return parsedMGLT * getConsumableTimeInHours("DAYS", consumables);
    }
  }
};

export default getMGLTPerStop;
