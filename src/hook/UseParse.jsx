import Papa from 'papaparse';
import { useState } from 'react';

function UseParse() {

    const [team, setTeam] = useState([])

    const handlerFile = (e)=> {
        Papa.parse(e.target.files[0], {
            download: true,
            header: true,
            complete: function(results) {
              const dataJSON = JSON.parse(JSON.stringify(results.data));
              setTeam(dataJSON);
            }
          });
    }

    return {
        handlerFile,
        team
    }
}

export default UseParse;