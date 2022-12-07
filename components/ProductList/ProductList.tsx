import { useStore } from "effector-react"
import styled from "styled-components"
import { $category } from "../../store/pickedCategory"


const StyledProductList = styled.div`
    padding: 0 5%;
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 10px;
`

const StyledProductRow = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
`

const StyledProductItem = styled.div`
    display: flex;
    flex-direction: column;
`
const StyledProductImg = styled.div`
    width: 40vw;
    height: 40vw;
    background-size: contain;
    background: url('https://papik.pro/uploads/posts/2021-09/1631839563_11-papik-pro-p-krasivie-kvadratnie-risunki-12.jpg');
`

const ProductList = () => {
    const curItem = useStore($category)

    return (
        <StyledProductList>
            <StyledProductRow>
                <StyledProductItem>
                    <StyledProductImg/>
                    <h3>{curItem}</h3>
                </StyledProductItem>
                <StyledProductItem>
                    <StyledProductImg/>
                    <h3>{curItem}</h3>
                </StyledProductItem>
            </StyledProductRow>
            <StyledProductRow>
                <StyledProductItem>
                    <StyledProductImg/>
                    <h3>{curItem}</h3>
                </StyledProductItem>
                <StyledProductItem>
                    <StyledProductImg/>
                    <h3>{curItem}</h3>
                </StyledProductItem>
            </StyledProductRow>
            <StyledProductRow>
                <StyledProductItem>
                    <StyledProductImg/>
                    <h3>{curItem}</h3>
                </StyledProductItem>
                <StyledProductItem>
                    <StyledProductImg/>
                    <h3>{curItem}</h3>
                </StyledProductItem>

            </StyledProductRow>
        </StyledProductList>
    )
}

export default ProductList