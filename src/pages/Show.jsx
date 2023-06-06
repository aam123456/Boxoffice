import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getShowById } from "../api/tvmaze";

const Show = () => {
  const { showId } = useParams();

  const { data: showData, error: showError } = useQuery({
    queryKey: ["show", showId],
    queryFn: () => getShowById(showId),
  });

  // const {showData,showError}= useShowById(showId)
  if (showError) {
    return <div> We have an error:{showError.message}</div>;
  }
  if (showData) {
    return <div>Got Show data:{showData.name}</div>;
  }

  return <div>Show page for {showId}</div>;
};
export default Show;





















// const useShowById=(showId)=>{

//   const [showData,setShowData]=useState(null)
//   const [showError,setShowError]=useState(null)

//   useEffect(() => {
//     async function fetchData() {
//         try {
//             const data = await getShowById(showId);
//             setShowData(data)
//         } catch (err) {
//             setShowError(err)
//         }
//     }
//     fetchData()
//   }, [showId]);
//   return {showData,showError}
// }