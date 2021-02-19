import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import Heading from "../components/styles/Heading";
import InputGroup from "../components/styles/InputGroup";
import ShipList from "../components/ShipList";
import { toggleStep } from "../store/app/action-creators";
import { getStarships } from "../store/starships/action-creators";
import { StoreState } from "../store/types";

const Container = styled.div`
  background-color: #141414;
  min-height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  position: relative;

  .form {
    padding: 10%;
    position: absolute;
    transition: all 1s ease-in-out;
    &.open {
      left: 0;
    }

    &.closed {
      left: 5000px;
    }
  }

  .list {
    width: 100%;
    padding: 10%;

    transition: all 1s ease-in-out;
    position: absolute;
    &.open {
      right: 0;
    }

    &.closed {
      right: 5000px;
    }
  }
`;

const Home = () => {
  const [value, setValue] = useState("");

  const { step, isLoading } = useSelector((state: StoreState) => state.app);
  const pages = useSelector((state: StoreState) => state.starships.pages);
  const dispatch = useDispatch();

  const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  const handleAction = () => {
    if (pages) {
      dispatch(toggleStep());
    } else {
      dispatch(getStarships(1));
    }
  };

  return (
    <Container>
      <div className={step === "list" ? "form closed" : "form open"}>
        <Heading className="headline">Calculate your adventure!</Heading>
        <InputGroup
          type="number"
          value={value}
          onChange={onChangeValue}
          label="How far, far away?"
          actionLabel="Go"
          action={handleAction}
          isLoading={isLoading}
        />
      </div>
      <div className={step === "list" ? "list open" : "list closed"}>
        <ShipList totalDistance={value} />
      </div>
    </Container>
  );
};

export default Home;
