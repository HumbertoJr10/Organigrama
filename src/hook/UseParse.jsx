import Papa from 'papaparse';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getTeam, getData } from '../redux/action';

function UseParse() {

    const [team, setTeam] = useState([])
    const dispatch = useDispatch()

    const handlerFile = (e)=> {
        Papa.parse(e.target.files[0], {
            download: true,
            header: true,
            complete: function(results) {
              const dataJSON = JSON.parse(JSON.stringify(results.data));
              dispatch(getData(dataJSON));
            }
          });
    }

    return {
        handlerFile,
        team
    }
}

export default UseParse;