import React from 'react'
import { categories } from '../data'
import CategoryItem from './CategoryItem'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container=styled.div`
display:flex;
padding:20;
justify-content: space-between;
${mobile({padding:"0px " , flex:"column"})}
 
`
  

const Categories = () => {
  return (
    <Container>
    {categories.map(item=>(
         <CategoryItem item={item}  key={item.id}/>
    ))}

   </Container>
  )
 
}

export default Categories;
