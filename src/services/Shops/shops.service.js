import { mocklocations } from "./examples";
import camelize from "camelize";

const shops = (location = "28.7041, 77.1025") => {
  return new Promise((resolve, reject) => {
    const mockl = mocklocations[location];
    if (!mockl) {
      reject("not found");
    }
    resolve(mockl);
  });
};

const transformm = ({ results=[] }) => {
  const mappedResults = results.map((restaurant)=>{
    return 1;
  });
  console.log(mappedResults);
  return results;
};
shops()
  .then(transformm)
  .then((transformedd) => {
    console.log(transformedd);
  })
  .catch((err) => {
    console.log('error');
  });
