import { useState, useEffect } from "react";
import { FilterGenerationButton } from "../buttons/FilterGenerationButton/FilterGenerationButon";

export const MovesTable = (props) => {
  const [moveDetails, setMoveDetails] = useState([]);
  const [selectedGeneration, setSelectedGeneration] = useState('red-blue')

  useEffect(() => {
    const fetchMoveDetails = async (moveUrl) => {
      try {
        const res = await fetch(moveUrl);
        const data = await res.json();
        setMoveDetails((prevDetails) => [...prevDetails, data]);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    props.moves.forEach((move) => {
      move.version_group_details.forEach((method) => {
        if (method.move_learn_method.name === 'level-up' || method.move_learn_method.name === 'machine' || method.move_learn_method.name === 'tutor') {
          fetchMoveDetails(move.move.url);
        }
      });
    });
  }, [props.moves]);

  const renderMoveTable = (learnMethod) => (
    <>
    <section>

      <h2>{learnMethod}</h2>
      <table key={learnMethod}>
        <thead>
          <tr>
            <th>Lv.</th>
            <th>Move</th>
            <th>Type</th>
            <th>Cat.</th>
            <th>Power</th>
            <th>Acc.</th>
          </tr>
        </thead>
        <tbody>
          {props.moves.map((move, index) =>
            move.version_group_details.map((method, methodIndex) => {
              if (method.move_learn_method.name === learnMethod && method.version_group.name === selectedGeneration) {
                const details = moveDetails.find(
                  (detail) => detail.name === move.move.name
                );
                return (
                  <tr key={methodIndex}>
                    <td>{method.level_learned_at}</td>
                    <td>{details?.name || move.move.name}</td>
                    <td>{details?.type?.name}</td>
                    <td>{details?.damage_class?.name}</td>
                    <td>{details?.power}</td>
                    <td>{details?.accuracy}</td>
                  </tr>
                );
              } else {
                return null;
              }
            })
          )}
        </tbody>
      </table>
    </section>
    
    </>
  );

  return (
    <>
      <FilterGenerationButton onButtonClick={setSelectedGeneration} />
      {renderMoveTable("level-up")}
      {renderMoveTable("machine")}
      {renderMoveTable("tutor")}
    </>
  );
};