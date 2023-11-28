// import { useEffect, useState } from "react";
// import { pokemonGenerations } from "../../../services/pokeApi";

// export const FilterGenerationButton = () => {
//     const [gen, setGen] = useState([]);

//     const fetchGeneration = async () => {
//         try {
//             const res = await pokemonGenerations();
//             console.log(res)
//             return res.results;
//         } catch (error) {
//             console.error("Error fetching generation data", error);
//             return [];
//         }
//     };

//     useEffect(() => {
//         const fetchData = async () => {
//             const generations = await fetchGeneration();
//             setGen(generations);
//         };

//         fetchData();
//     }, []);

//     console.log(gen);

//     return (
//         <>
//             {gen.map((genName, index) => (
//                 <button key={index}>{genName.name}</button>
//             ))}
//         </>
//     );
// };