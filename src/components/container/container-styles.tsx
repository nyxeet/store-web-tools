import styled from 'styled-components';

export const Styles = styled.div`
  .container {
    margin-left: auto;
    margin-right: auto;
    padding-left: 8px;
    padding-right: 8px;
    width: 100%;
  }

  @media screen and (min-width: 480px) and (max-width: 767px) {
    .container {
      padding-left: 15px;
      padding-right: 15px;
      width: 100%;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    .container {
      padding-left: 24px;
      padding-right: 24px;
      width: 100%;
    }
  }

  @media screen and (min-width: 1280px) {
    .container {
      padding-left: 120px;
      padding-right: 120px;
      width: 100%;
      max-width: 1520px;
    }
  }
`;
