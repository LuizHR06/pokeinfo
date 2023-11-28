export const MovesTable = (props) => {
    console.log(props.moves)

    return (
        <>  
            <h2>Moves learnt by level up</h2>
            <table>
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
                    {props.moves.map((move, index) => (
                        <tr key={index}>
                            {/* Assuming move has properties like level, type, category, power, accuracy */}
                            <td>{move.lv}</td>
                            <td>{move.move.name}</td>
                            <td>{move.type}</td>
                            <td>{move.category}</td>
                            <td>{move.power}</td>
                            <td>{move.accuracy}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};