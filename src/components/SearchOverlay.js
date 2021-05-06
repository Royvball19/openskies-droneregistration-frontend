import AircraftTable from "./Tables/AircraftTable";
import OperatorTable from "./Tables/OperatorTable";
import PilotTable from "./Tables/PilotTable";
import ReportTable from "./Tables/ReportTable";

function SearchOverlay() {
  let tableType = 1;
  let table = "";

  switch (tableType) {
    case 0:
      table = <OperatorTable />;
      break;
    case 1:
      table = <AircraftTable />;
      break;
    case 2:
      table = <PilotTable />;
      break;
    case 3:
      table = <ReportTable />;
      break;
    default:
  }

  return <div>{table}</div>;
}

export default SearchOverlay;
