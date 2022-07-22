import { useState, useEffect } from 'react'
import styled from 'styled-components'
import LogoPic from './Home'

const EatHeader = styled.h1`
    color: #004C73;
   font-family: 'Lobster', cursive;
    font-size: 50px;
    text-shadow: 3px 3px 3px #89D6FF;
    box-shadow: 1px 1px 14px #374955;
    /* margin-top: -10vh; */
`

export const SmallLogo = styled(LogoPic)`
    height: 100px;
`

const FindButton = styled.button`
    background-color: #212e42;
`

const RecipeText = styled.a`
    flex-wrap: wrap;
    width: 30vw;
    font-size: 22px;
    text-align: center;
    margin-right: 10vw;
    cursor: pointer;
    overflow-x: auto;
    overflow-y: auto;
    @media only screen and (min-width: 768px) {
    font-size: 40px;
    text-shadow: 1px 1px 1px #212e42;
    
    &:hover {
        color: #212e42;
        text-shadow: 1px 1px 1px #89D6FF;
        transition-duration: 500ms;
        transition-delay: 100ms;
    }
    }
`

const RecipeImage = styled.img`
    max-height: 5vh;
    width: auto;
    align-content: center;
    margin-bottom: 1vh;
    @media only screen and (min-width: 768px) {
    max-height: 10vh;
    
    }
    /* white-space: nowrap; */
`

const RecipeInput = styled.input`
    color: #212e42;
`
const RecipeInfo = styled.div`
text-shadow: 1px 1px 1px #89D6FF;
    font-size: 22px;
    text-align-last: left;
    margin-right: 20vw;
    color: #004C73;
    overflow-x: auto;
    overflow-y: auto;
    @media only screen and (max-width: 600px) {
    display: none;
    }
    @media only screen and (min-width: 768px) {
    font-size: 30px;
}
`
function EatPage () {
    const initialState = {
        search: ''
    }
    const searchOptions = {
        id: process.env.REACT_APP_app_id,
        key: process.env.REACT_APP_app_key
      }
      
    const [formState, setFormState] = useState(initialState)
    const [searchString, setSearchString] = useState('')
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        getRecipes(searchString)
    }, [])

    function getRecipes(searchString) {
        const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchString}&app_id=${searchOptions.id}&app_key=${searchOptions.key}&calories=300-600&imageSize=REGULAR&random=true&field=label&field=images&field=url&field=dietLabels&field=healthLabels&field=calories&field=mealType&field=dishType&field=tags`
        
        fetch(url)
        .then(res => res.json())
        .then(res => {
            setRecipes(res.hits)
        })
    }

    const handleChange = (event) => {
        setSearchString(event.target.value);
      };

    const handleSubmit = (event) => {
        event.preventDefault()
        setFormState(initialState)
        getRecipes(searchString)
    }
    if (recipes.length < 1) {
        return(
            <div className='component'>
            <EatHeader>Recipe Finder</EatHeader>
            <form onSubmit={handleSubmit} >
                <label htmlFor='foodSearch'>Recipe Lookup</label>
                <RecipeInput placeholder='Search' type='text' name='searchString' required onChange={handleChange} value={searchString}/>
                <FindButton type='submit'>Find!</FindButton>
            </form>
            <div className="gallery">
                No recipes found! Try again! 
            </div>
            
        </div>
        )
    }
    return (

        <div className='component'>
            <EatHeader>Recipe Finder</EatHeader>
            <form onSubmit={handleSubmit} >
                <label htmlFor='foodSearch'>Food Type: </label>
                <RecipeInput placeholder='Search' type='text' name='searchString' required onChange={handleChange} value={searchString}/>
                <FindButton type='submit'>Find!</FindButton>
            </form>
            <div className="gallery">
                {recipes.map(recipe => (
                <div key={recipe.recipe.label} className="recipes">
                    <RecipeImage className='recipe-picture' src={recipe.recipe.images.THUMBNAIL.url} alt={recipe.recipe.label} />
                    <RecipeInfo>Meal Type: {recipe.recipe.mealType} - | - Total Calories: {Math.floor(recipe.recipe.calories)}</RecipeInfo>
                    <RecipeText target='_blank' href={recipe.recipe.url}>{recipe.recipe.label}</RecipeText>
                </div>
                ))}
            </div>
            
        </div>
    )
}

export default EatPage