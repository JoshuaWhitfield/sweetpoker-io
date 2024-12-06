import { Col, Row } from "reactstrap";
import Fold from "./Fold";
import Check from "./Check";
import Bet from "./Bet";
function PlayConsole() {

  const determineOptions = (playerDecisions = []) => {
    // if (!playerDecisions.length) return 
  }

  return (
    <>
      <div className="play-console">
        <div className="partition" id="chat-log" >
          {/* Code for the contents of chat-log box */}
        </div>
        <div className="partition" id="console">
          {/* {determineOptions()} */}
        </div>
      </div>
    </>
  );
}

const styles = {
  row: {
    margin: '40px 0px 0px 15px'
  }
}

export default PlayConsole;
