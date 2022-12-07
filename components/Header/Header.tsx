import styled from "styled-components"
import BasketIcon from "../../icons/BasketIcon"
import CategoryList from "../CategoryList/CategoryList"


const StyledHeader = styled.div`
    width: 100%;
    padding: 0 5%;
    display: flex;
    gap: 10px;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
`

const StyledHeaderSection = styled.div`
    display: flex;
    gap: 10px;
`


const Header = () => {
    return <>
        <StyledHeader>
            <CategoryList/>
            <StyledHeaderSection>
                <BasketIcon value={3}/>
            </StyledHeaderSection>
        </StyledHeader>
    </>
}

export default Header