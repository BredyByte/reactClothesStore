import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 900px;
  margin: 30px auto;
`;
export const InsideContainer = styled.div`
  width: 390px;
`;

export const InfoContainer = styled(InsideContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  h2 {
    margin: 10px 0;
  }
  
  span {
    font-size: 16px;
  }
`;

export const InfoInner = styled.div`
  padding: 10px;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  
  span {
    margin-right: 10px;
  }
`;