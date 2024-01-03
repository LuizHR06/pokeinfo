import styled from "styled-components";
import { colors, size } from "../../data/variables";

export const PokeStats = ( {stats} ) => {
    return (
        <>
            <StatsContainer data-testid="pokemon-stats">
                {stats && Array.isArray(stats) && (
                    stats.map((stat) => (
                        <StatItem key={stat.stat.name}>
                            <Stats>{stat.stat.name}: {stat.base_stat}</Stats>
                            <ProgressBar width={(stat.base_stat / 100) * 100} />
                        </StatItem>
                    ))
                )}
            </StatsContainer>
        </>
    )
}

const StatsContainer = styled.ol`
    list-style: none;
    padding: 0;
    position: absolute;
    top: 25%;
    width: 25%;

    @media (min-width: ${size.mobileS}) {
        position: static;
        width: 90%;
        margin: 0 10px;
    }

    @media (min-width: ${size.tablet}) {
        width: 50%;
        margin: auto;
    }

    @media (min-width: ${size.laptopL}) {
        position: absolute;
        top: 25%;
        width: 25%;
    }

`;

const StatItem = styled.li`
    margin: 30px 0;
    width: 95%;
    background-color: ${colors.terciaryPink};
    

    @media (min-width: ${size.mobileS}) {
        width: 100%;
        padding: 3px;
        border-radius: 10px;
    }

    @media (min-width: ${size.laptopL}) {
        border-radius: 0 10px 10px 0;
    }
`;

const Stats = styled.span`
    display: inline-block;
    position: absolute;
    left: 15px; 
    text-align: left; 
    font-size: 30px;
    font-weight: bold;
    width: 100%;

    @media (min-width: ${size.mobileS}) {
        font-size: 25px;
        left: 20px;
    }

    @media (min-width: ${size.tablet}) {
        left: 30%;
    }

    @media (min-width: ${size.laptopL}) {
        font-size: 30px;
        left: 20px;
    }

    @media (min-width: ${size.desktopL}) {
        font-size: 50px;
        left: 30px;
    }
`;

const ProgressBar = styled.div`
    width: ${(props) => props.width}%;
    background-color: ${colors.primaryYellow};
    padding: 17px;
    transition: width 0.3s ease-in-out;

    @media (min-width: ${size.mobileS}) {
        border-radius: 10px;
    }

    @media (min-width: ${size.laptopL}) {
        border-radius: 0 10px 10px 0;
    }

    @media (min-width: ${size.desktopL}) {
        padding: 30px;
    }
`;