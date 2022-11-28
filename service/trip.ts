import { promises as fs } from 'fs';
import path from 'path';


const getAlltrips = async () => {
    const filePath = path.join(process.cwd(), 'data', 'db.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(fileContents);
  
    return data.tours;
  };


  const getActiveTrips = async () => {
    const tours = await getAlltrips();
    
    return tours;
  }


const getTrip = async (id: number) => {
    const allTrips = await getAlltrips();
    const filtered = allTrips.filter((tour) => {
      return tour.id === id;
    });
  
    if (filtered.length === 1) {
      return filtered[0];
    }
  
    throw Error(`ユーザが見つかりません, ${allTrips}`);
  };

  export{getActiveTrips,getTrip}
