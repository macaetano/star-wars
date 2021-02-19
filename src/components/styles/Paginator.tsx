import React from "react";
import styled from "styled-components";
import { NextPage } from "../../store/starships/types";

interface Props {
  pages: string[];
  currentPage: number;
  nextPage: NextPage;
  onClickNext: (page: number) => void;
  onClickPage: (page: string) => void;
}

const StylePaginator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  .page {
    font-size: 18px;
    padding: 0 8px;
    color: #ddd;
  }
  .active {
    color: #edec51;
  }
`;

const Paginator: React.FC<Props> = ({
  pages,
  nextPage,
  currentPage,
  onClickPage,
  onClickNext,
}) => (
  <StylePaginator>
    {pages.map((index) => (
      <div
        className={`page ${currentPage === Number(index) ? "active" : ""}`}
        key={index}
        onClick={() => onClickPage(index)}
      >
        <p>{index}</p>
      </div>
    ))}
    {nextPage && (
      <div className="page" onClick={() => onClickNext(nextPage)}>
        <p>Next</p>
      </div>
    )}
  </StylePaginator>
);

export default Paginator;
