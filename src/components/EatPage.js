import { useState, useEffect } from 'react'
import styled from 'styled-components'

const EatHeader = styled.h1`
    color: #004C73;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 50px;
    text-shadow: 3px 3px 3px #89D6FF;
    box-shadow: 1px 1px 14px #374955;
    margin-top: -30vh;
`

const FindButton = styled.button`
    background-color: #212e42;
`

const RecipeText = styled.a`
    font-size: 22px;
    text-align: center;
    cursor: pointer;
    /* white-space: nowrap; */
`

const RecipeImage = styled.img`
    max-height: 5vh;
    width: auto;
    align-content: center;
    /* white-space: nowrap; */
`

const RecipeInput = styled.input`
    color: #212e42;
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

    // useEffect(() => {
    //     getRecipes(searchString)
    // }, [])

    function getRecipes(searchString) {
        const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchString}&app_id=${searchOptions.id}&app_key=${searchOptions.key}&calories=300-600&imageSize=REGULAR&random=true&field=label&field=images&field=url&field=dietLabels&field=healthLabels&field=calories&field=mealType&field=dishType&field=tags`
        
        fetch(url)
        .then(res => res.json())
        .then(res => {
            setRecipes(res.hits)
            console.log(res.hits)
        })
    }

    const handleChange = (event) => {
        setSearchString(event.target.value);
      };

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formState)
        setFormState(initialState)
        getRecipes(searchString)
    }

    return (

        <div className='component'>
            <EatHeader>What to eat?</EatHeader>
            <form onSubmit={handleSubmit} >
                <label htmlFor='foodSearch'>Recipe Lookup</label>
                <RecipeInput placeholder='Search' type='text' name='searchString' required onChange={handleChange} value={searchString}/>
                <FindButton type='submit'>Find!</FindButton>
            </form>
            <div className="gallery">
                {recipes.map(recipe => (
                <div key={recipe.recipe.label} className="recipes">
                    <RecipeImage src={recipe.recipe.images.THUMBNAIL.url} alt={recipe.recipe.label} />
                    <span>
                    <RecipeText target='_blank' href={recipe.recipe.url}>{recipe.recipe.label}</RecipeText>
                    </span>
                    
                </div>
                ))}
            </div>
            
        </div>
    )
}

export default EatPage