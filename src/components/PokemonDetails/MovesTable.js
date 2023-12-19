import { useState, useEffect } from "react";
import { FilterGenerationButton } from "../buttons/FilterGenerationButton/FilterGenerationButon";
import styled from "styled-components";

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
      <TableContainer>
        <MovesTableTitle>{learnMethod}</MovesTableTitle>
        <MovesTableContent key={learnMethod}>
          <thead>
            <MovesTableRows>
              <MovesTableHeaders>Lv.</MovesTableHeaders>
              <MovesTableHeaders>Move</MovesTableHeaders>
              <MovesTableHeaders>Type</MovesTableHeaders>
              <MovesTableHeaders>Cat.</MovesTableHeaders>
              <MovesTableHeaders>Power</MovesTableHeaders>
              <MovesTableHeaders>Acc.</MovesTableHeaders>
            </MovesTableRows>
          </thead>
          <tbody>
            {props.moves.map((move, index) =>
              move.version_group_details.map((method, methodIndex) => {
                if (method.move_learn_method.name === learnMethod && method.version_group.name === selectedGeneration) {
                  const details = moveDetails.find(
                    (detail) => detail.name === move.move.name
                  );
                  return (
                    <MovesTableRows key={methodIndex}>
                      <MovesTableData>{method.level_learned_at}</MovesTableData>
                      <MovesTableData>{details?.name || move.move.name}</MovesTableData>
                      <MovesTableData>{details?.type?.name}</MovesTableData>
                      <MovesTableData>{details?.damage_class?.name}</MovesTableData>
                      <MovesTableData>{details?.power}</MovesTableData>
                      <MovesTableData>{details?.accuracy}</MovesTableData>
                    </MovesTableRows>
                  );
                } else {
                  return null;
                }
              })
            )}
          </tbody>
        </MovesTableContent>
      </TableContainer>
    </>
  );

  return (
    <>
        <FilterGeneration>
        <FilterGenerationText>Filter by generations</FilterGenerationText>
        <FilterGenerationButton onButtonClick={setSelectedGeneration} />
        </FilterGeneration>
        <Tables>
        {renderMoveTable("level-up")}
        {renderMoveTable("machine")}
        {renderMoveTable("tutor")}
        </Tables>
      
    </>
  );
};

const FilterGeneration = styled.div`
  height: 20vh;
`

const FilterGenerationText = styled.p `
  font-size: 30px;
  font-weight: bold;
`

const Tables = styled.div `
  display: flex;
  gap: 20px;
  height: 80vh;
`

const TableContainer = styled.section`
  width: 100%;
  height: 100%;
`

const MovesTableTitle = styled.h2 `
  background-color: #6399B8;
  color: white;
  padding: 12px 8px;
  margin-top: 20px;
`

const MovesTableContent = styled.table`
  border-collapse: collapse;
  width: 100%;
  font-size: 18px;
  margin-top: 20px;
`

const MovesTableRows = styled.tr`
  background-color: #ddd;
  &:nth-child(even){background-color: #f2f2f2;}
`

const MovesTableHeaders = styled.th`
  border: 1px solid #000;
  padding: 12px 8px 12px 8px;
  text-align: left;
  background-color: #6399B8;
  color: white;
`

const MovesTableData = styled.td`
  border: 1px solid #000;
  padding: 8px;
`