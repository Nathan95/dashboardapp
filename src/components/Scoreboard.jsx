import React, {useState, useEffect} from 'react';
import '../css/Scoreboard.css';
import Table from './Table';
import '../css/Table.css';
import axios from 'axios';

const Scoreboard = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://coding-test.cube19.io/frontend/v1/starting-state");
      setUsers(res?.data);
      } catch (error) {
      console.log(error);
    }
  }

  console.log(users);

  useEffect(() => {
    fetchData();
  }, [users])

  const renderItems = () => {
    return (
      <React.Fragment>
         {users.map((item) => (
          <div className="rowContainer" key={item.name}> 
            <div className="tableItem">
                <span className="tableItemText">sdasd</span>
              </div>
              <div className="tableItem">
                <span className="tableItemText">asda</span>
              </div>
              <div className="tableItem">
                <span className="score">{item.score || "N/A"}</span>
              </div> 
              <div className="tableItem">
                <span className="name">{item.name}</span>
              </div>
              <div className="tableItem">
                <span className="tableItemText"></span>
              </div> 
              <div className="tableItem">
                <span className="tableItemText">&#9650; 2 places</span>
              </div> 
              <div className="tableItem">
                <span className="tableItemText"><button className="pen">✎</button></span>
              </div> 
            </div>
          ))}
      </React.Fragment>
    )
  }
  
  return (
    <div className="scoreBoardWrapper">
      <div className="scoreBoardHeader">
        <div className="scoreBoardTitle">
          <span>Leaders table for this period</span>
        </div>
        <div className="scoreBoardButton">
          <button> + Add new score </button>
        </div>
      </div>
      <Table>
        {renderItems()}
      </Table>
    </div>
  );
}

export default Scoreboard;