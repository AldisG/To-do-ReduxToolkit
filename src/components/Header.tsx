import styled from 'styled-components';

const HeaderStyle = styled.div`
  font-size:  20px;
  text-align: center;
`;

const Header = () => (
  <HeaderStyle>
    <h1 className="header">Your To do List</h1>
  </HeaderStyle>
);

export default Header;
