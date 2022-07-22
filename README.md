# React Wellness App Documentation
### [Deployed Website](https://react-wellness-app.netlify.app/)

## Initial Wireframes
![image](https://user-images.githubusercontent.com/106038655/180060933-f5029748-a701-4e37-89e6-a65949bac1a3.png)
![image](https://user-images.githubusercontent.com/106038655/180060982-b0beba3c-2042-42db-bc1c-16bb88705f64.png)
![image](https://user-images.githubusercontent.com/106038655/180061001-4e33f5af-f5ae-4d80-80a0-081e8f84b802.png)


## Live App Pictures
![Screen Shot 2022-07-21 at 5 34 23 PM](https://user-images.githubusercontent.com/106038655/180338913-594b2031-f9e3-445f-b010-38e0e640858c.png)
![Screen Shot 2022-07-21 at 5 34 47 PM](https://user-images.githubusercontent.com/106038655/180338932-adbee575-e83a-41d0-a784-58e81646393c.png)
![Screen Shot 2022-07-21 at 5 36 15 PM](https://user-images.githubusercontent.com/106038655/180338954-7b91d4bf-a97b-47f1-8b47-e141dd3e5663.png)
![Screen Shot 2022-07-21 at 5 37 35 PM](https://user-images.githubusercontent.com/106038655/180338973-dbc96cf2-cc6f-4a54-b094-5a123aa3b937.png)
![Screen Shot 2022-07-21 at 5 37 44 PM](https://user-images.githubusercontent.com/106038655/180338980-7d2d5a75-4851-4169-8fbc-4095f9db2c95.png)


## What and Why?
  - I wanted to make an application that I would actually use for the foreseeable future. I wanted something that was geared towards things that were important to me or things I loved doing. I love laughing, learning, eating, and the Lofi Girl youtube channel!
  - I wanted to accomplish this while also showcasing what I've learned in class the last few weeks.
  - I decided to hit on several topics with this app, but originally had wanted to focus on something for healthy recipes/cooking.
  - After some thought I wanted to expand and have further elements to the page that would be immediately satisfying but I could also work on over time tos how my growth as a developer.
  - With these, I made separate components for navigating around the app but also for the main content: food, jokes, facts, and music

## Technologies Used
  - React.js
    - React Router Dom
    - Styled Components
    - Browser Router
    - Links
    - Routes
    - useState
  - HTML
  - CSS
  - Flexbox
  - JavaScript
  - JSX
  - Netlify
  - Git
  - Github

  ## Credits/Thank You's
  - Special thank you to the developers behind the APIs I used for this project:
    - [EDAMAM](https://www.edamam.com/) : I used EDAMAM's Recipe Search API for the "Recipe Finder" component. They provide plenty of free API requests for individual developers and there's a huge database of different recipes and filters. Very excited to continue working with this API to expand this project.
    - [JokeAPI](https://sv443.net/jokeapi/v2/) : I used JokeAPI's API for populating all of the jokes currently on the "Laugh" page. After doing a test-run with my mother I had to toggle off some of the jokes but otherwise it's been extremely simple to use. Thanks so much!
    - [Random Useless Facts](https://uselessfacts.jsph.pl/) : I used this API for the Random Facts page. I was previously using a different one until I noticed some different formatting issues and this one appears to be cleaner. Thanks for the help!

## Getting Started/Install
- To view:
> [Deployed App - Click](https://react-wellness-app.netlify.app/)
- To edit:
    - Fork this repository
    - Hit green "Code" dropdown above repo files
    - Open a terminal
    - Change directory(cd) to where you'd like to place repo in your local machine
    - type 'git clone [paste clone SSH link]' and press enter/return
    - Change directory into the react-wellness-app
    - type code . into terminal and hit enter/return
- To attempt fresh build:
    - Change directory(cd) to where you'd like to place repo in your local machine
    - type 'npx create-react-app react-wellness-app' and press enter/return
    - after app is built, cmd/ctrl + t in terminal to open new terminal window
    - cd into react-wellness-app
    - type code. into terminal and hit enter/return

    
## Contribution Guidelines
- If you have suggestions or if something is bothering you about the app and you want it to change, feel free to submit issue requests via GitHub
- If you're working on the app and have code you feel is worthy of merging:
    - Create a pull request from your forked repo to main repo
    - With your forked request, please include detailed comments as to what changes you made, why, and screenshots showing the changes being implemented
   
## Unresolved Problems
- As of right now there are a few bugs where if the buttons are clicked too quicly or icons hovered over too often that the transition effects don't occur 100% of the time, unsure how to fix
- Sometimes my APIs are pulling bad/incomplete pieces of data. Sometimes it's a missing picture or link but it makes for a not great experience sometimes. Ideally this would be fixed in the future

## Future Goals
- I want to continue developing this as a personal tool I can use moving forward. There's a lot I can think of stylistically I can change but my first goal would be to make the app more useful by way of a few different implementations/changes:
    - First I'd like to increase the number of sources I'm currently pulling jokes and facts from. I would genuinely like to use this as a way to learn something or hear a joke I don't hear often, and as of right now the results are a bit limited due to the APIs I'm using
    - I'd also like to expand heavily upon the recipe searcher section. I'd like to be able to filter out different foods based on ingrediets, meal type, diet type, etc
    - I'd like to add additional music sources/live streams onto the music page to make all of my go-to's readily accessible on one page. A longer term goal is to eventually be able to minimize the youtube stream throughout my app so that music won't be interrupted after navigating away
- After the different content tweeks, I would like to reorganize all of my styled components so that I'm not repeating myself so much. I feel there's a lot of room to make the code more DRY and it will assist with my understanding of the 'styled-components' library overall

## Final Thoughts
1. I had a lot of fun making this project! There are certainly things I would do differently in the future but all-in-all I'm walking away from this feeling more comfortable with React as a whole but also excited to continue my learning experience with not only React but the entire Frontend ecosystem. I for sure could have saved myself some time and probably struggle by using a different library and becoming more familiar with it (thinking of something like Bootstrap) but I walk away feeling proud of the work I did and the troubleshooting/problem-solving I was able to accomplish along the way. Really looking forward to continuing this project moving forward!
