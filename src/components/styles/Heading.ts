import styled from "styled-components";

const Heading = styled.h1`
  color: #ddd;

  /* Portrait tablet to landscape and desktop */
  @media (min-width: 768px) {
    font-size: 48px;
  }

  /* Landscape phone to portrait tablet */
  @media (max-width: 767px) {
    font-size: 36px;
  }

  /* Landscape phones and down */
  @media (max-width: 480px) {
    font-size: 28px;
    text-align: center;
  }
`;

export default Heading;
