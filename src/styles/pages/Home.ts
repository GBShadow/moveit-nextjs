import styled from 'styled-components';

export const Container = styled.div`
  max-width: 992px;
  height: 100vh;
  margin: 0 auto;
  padding: 2rem 2rem;

  display: flex;
  flex-direction: column;

  section {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6.25rem;
    align-content: center;
    margin-top: 2.5rem;
  }
`;
