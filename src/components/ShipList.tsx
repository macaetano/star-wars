import React from "react";
import styled from "styled-components";
import { Ship } from "../store/types";

interface ShipItemProps {
  item: Ship;
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
  .image {
    width: 75px;
    height: 75px;
  }
  .name {
    flex: 1;
    margin-left: 16px;
  }
  .stops {
    color: #edec51;
  }
`;

const ShipItem: React.FC<ShipItemProps> = ({ item }) => (
  <div>
    <StyledContainer divider>
      <img className="image" src={item.imageURL} alt={item.name} />
      <p className="name">{item.name}</p>
      <p className="stops">{item.stops}</p>
    </StyledContainer>
  </div>
);

interface ShipListProps {
  data: Ship[];
}

const ShipList: React.FC<ShipListProps> = ({ data }) => (
  <div>
    <StyledContainer>
      <div className="image"></div>
      <p className="name">Name</p>
      <p className="stops">Stops</p>
    </StyledContainer>
    {data.map((item, index) => (
      <ShipItem key={index} item={item} />
    ))}
  </div>
);

export default ShipList;
