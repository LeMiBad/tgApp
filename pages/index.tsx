import { useStore } from 'effector-react'
import Head from 'next/head'
import { useEffect } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { $repos, fetchUserReposFx } from '../store'
import BasketIcon from '../icons/BasketIcon'
import Header from '../components/Header/Header'
import { $category } from '../store/pickedCategory'
import ProductList from '../components/ProductList/ProductList'
import OrderButtons from '../components/OrderButtons/OrderButtons'
import Script from 'next/script'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto';
  }
`

const StyledCategoryName = styled.h1`
  padding-left: 5%;
  font-size: 22px;
`

export default function Home() {

  const store = useStore($repos)
  
  const currentCategory = useStore($category)

  useEffect(() => {
    fetchUserReposFx('LeMiBad')
  }, [])

  return (
    
      <>
        <GlobalStyle/>
        <Head>
          <title>Create Next GApp</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <Header/>
        <StyledCategoryName>{currentCategory}</StyledCategoryName>
        <ProductList/>
      </>
  )
}
