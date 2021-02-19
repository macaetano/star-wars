import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { toggleStep } from "../store/app/action-creators";
import { getStarships } from "../store/starships/action-creators";
import { StoreState } from "../store/types";
import Paginator from "./styles/Paginator";

interface ShipItemProps {
  name: string;
  stops: number | string;
}

const StyledContainer = styled.div<{ divider?: boolean }>`
  display: flex;
  color: #ddd;
  align-items: center;
  padding: 16px;
  border-bottom: ${(p) => (p.divider ? "1px" : "0")} solid #ddd;

  p {
    font-size: 18px;
  }
  .name {
    flex: 1;
  }
  .stops {
    color: #edec51;
  }
`;

const ShipItem: React.FC<ShipItemProps> = ({ name, stops }) => (
  <div>
    <StyledContainer divider>
      <p className="name">{name}</p>
      <p className="stops">{stops}</p>
    </StyledContainer>
  </div>
);

interface ShipListProps {
  totalDistance: string;
}

const ShipList: React.FC<ShipListProps> = ({ totalDistance }) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(1);
  const dispatch = useDispatch();
  const { pages, nextPage } = useSelector(
    (state: StoreState) => state.starships
  );

  const onClickPage = (page: string) => setCurrentPageIndex(Number(page));
  const onClickNext = (page: number) => {
    dispatch(getStarships(page, false));
    setCurrentPageIndex(page);
  };
  const onClickBack = () => {
    dispatch(toggleStep());
    setCurrentPageIndex(1);
  };

  const renderPage = () => {
    if (pages && pages[currentPageIndex]) {
      return (
        <>
          {pages[currentPageIndex].map((item, index) => (
            <ShipItem
              key={index}
              name={item.name}
              stops={
                item.MGLTPerStop !== "unknown"
                  ? Math.floor(Number(totalDistance) / item.MGLTPerStop)
                  : "Unknown"
              }
            />
          ))}
        </>
      );
    } else return <h3>Loading</h3>;
  };
  return (
    <div>
      <img src="./icons/back.png" alt="Back Button" onClick={onClickBack} />
      <StyledContainer>
        <p className="name">Name</p>
        <p className="stops">Stops</p>
      </StyledContainer>
      {pages && (
        <React.Fragment>
          {renderPage()}
          <Paginator
            nextPage={nextPage}
            pages={Object.keys(pages)}
            currentPage={currentPageIndex}
            onClickNext={onClickNext}
            onClickPage={onClickPage}
          />
        </React.Fragment>
      )}
    </div>
  );
};

export default ShipList;
