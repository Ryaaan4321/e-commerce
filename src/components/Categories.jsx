import React from 'react'
import { categories } from '../data'
import CategoryItem from './CategoryItem'
import styled from 'styled-components'

const Container=styled.div`
display:flex;
padding:20;
justify-content: space-between;
`


const Categories = () => {
  return (
    <Container>
    {categories.map(item=>(
         <CategoryItem item={item}/>
    ))}

   </Container>
  )
 
}

export default Categories;
