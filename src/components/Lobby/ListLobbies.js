import React, { useState, useEffect } from 'react';
import { getAllTables } from "../../utils/api";
import formatPlayerNames from "../../utils/formatPlayerNames";
import Lobby from "./Lobby";
import TableKey from "./TableKey";
import { Col } from "reactstrap";
import Paginator from '../Paginator/Paginator';
import { 
    mode, 
    limit,
    stakes,
    setIndex,
} from '../../pages/lobby/LobbyPage';
import { signal } from '@preact/signals-react';


const PaginatorConfig = {
    entries: 16, //entries per page
}

export let firstIdx = signal(0);
export let lastIdx = signal(firstIdx + PaginatorConfig.entries)

export const setFirstIdx = (value = 0) => firstIdx.value = value;
export const setLastIdx = (value = (firstIdx + PaginatorConfig.entries)) => lastIdx.value = value;

const ListLobbies = () => {
  const sections = ['table', 'mode', 'limit', 'stakes'];
  const [ tables, setTables ] = useState([]);

  const matchTablesWithConfig = (response) => {
    const result = response.filter((item) => {
      const sects = item.sections;
      if (mode.value.length > 0 && sects[1] !== mode.value) return false;
      if (limit.value.length > 0 && sects[2] !== limit.value) return false;
      if (stakes.value.length > 0 && sects[3].split(' ')[0] !== stakes.value) return false;
      return true;
    });

    return result;
  }

  useEffect(() => {
    async function fetchTables() {
        try {
          const response = await getAllTables();
          if (!Array.isArray(response) || (Array.isArray(response) && !response.length)) {
            console.log('fetchTables response was empty...');
            setTables([]);
          } else {
            const filteredTables = matchTablesWithConfig(response);
            setTables(filteredTables);
            setFirstIdx();
            setLastIdx();
            //setOpen(false);
            setIndex()
          }
        } catch (error) {
          console.error('Error:', error);
        }
    }

    fetchTables();
  }, [mode.value, limit.value, stakes.value])

  const handleClick = (e) => {
    /* add information to the store state
    this information will be used in the play page */
  }

  const window = (f, l) => {
    let testTable = tables.slice(f, l);
    if (!testTable.length && l > f) return window(f, l-1);
    return testTable;
  }

  if (!Array.isArray(tables) || tables.length === 0) {
    return (
      <>
        <Col className='mt-2 flex jcc' style={{ width: '100%', height: '40px' }}>
          <TableKey sections={sections} />
        </Col>
        <Col className='mt-3 flex jcc'>
          <p>no tables are currently being played...</p>
        </Col>
      </>
    );
  } else {
    return (
      <>
        <Col className='mt-2 flex jcc' style={{ width: '100%', height: '40px' }}>
          <TableKey sections={sections} />
        </Col>
        {   
            
            window(firstIdx, lastIdx).map((lobby, idx) => (
            <Col className='mt-3 flex jcc' key={idx}>
                <div className='styled-link flex jcc' onClick={handleClick} style={{ width: '100%' }}>
                  <Lobby sections={lobby.sections} playerNames={formatPlayerNames(lobby.playerNames)} avgPot={lobby.avgPot} />
                </div>
            </Col>
            ))
        
        }
        <Col className='mt-4 flex jcc'>
            <Paginator config={PaginatorConfig} length={tables.length} />
        </Col>
      </>
    );
  }
}

export default ListLobbies;
