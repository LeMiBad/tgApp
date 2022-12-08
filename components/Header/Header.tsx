import { useEffect } from "react"
import styled from "styled-components"
import BasketIcon from "../../icons/BasketIcon"
import CategoryList from "../CategoryList/CategoryList"


const StyledHeader = styled.div`
    width: 90%;
    margin: 0 auto;
    gap: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
`

const StyledHeaderSection = styled.div`
    display: flex;
    gap: 10px;
`


const Header = () => {
    
    useEffect(() => {
        console.log(window)
    })

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