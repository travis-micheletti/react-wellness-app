- App loads
    - Welcome page:
        What's seen?
            - App name/Welcome Title
            - Welcome graphic
                - Funny?
                - Logo?
                - Some sort of zen/philosophical symobol?
                - Try and create a logo combining 53, elephants and something else?
            - Enter/Start Button
        What interactions?
            - MVP:
                - Button click of enter/start navigates from the welcome route to the home route
            - Stretch:
                - Have animation interactions w/ either welcome graphic, title or both
                - Animations w/ button as well onclick while transitions to home
                - Easter egg? maybe this is where I can implement ron swanson quotes? Hide a mustache somewhere in logo or title or elsewhere in the page?
    - Home Page:
        What's seen?
            - Main navigation will take up the center of the screen
                            - have a video I'm going to watch on making a circular bar/ navigation to help build
                - nav bar will include:
                    - Eat
                    - Study
                    - Laugh
                    - Random?
                        - random API for generating content if i stay this route
                        - maybe change to meditation? integrate youtube playlist into page?
            - Miniaturized version of logo/title in top right
        Interactions?
            - MVP:
                - Clicking on logo will return to welcome page
                - Clicking on 'Eat' will navigate to the 'Eat Page' route/component
                - Clicking on 'Study' will navigate to the 'Study Page' route/component
                - Clicking on 'Laugh' will navigate to the 'Laugh Page' route/component
                - Clicking on 'Random' will navigate to the 'Random Page' route/component
            - Stretch:
                - onhover will change stylings of each nav button
                - onclick will change stylings further of each nav button
                - onhover will change color of logo
                - onclick will flip logo?

    - Eat Page:
        What's seen?
                - Undecided on whether I want logo on main components but I'm thinking not for now
            - MVP:
                - Main title screen will act as a header
                - Search bar for inputting search string for food
                - Submit Button to submit search query
                - Navigation at bottom
                    - Depending on how the circle nav tutorials i go over are I may implement a circle nav at the bottom as well
                    - if it adds too much time I'll go with a traditional nav on the bottom that will include links to home page, study page, laugh page, random page
            - Stretch:
                - Circle nav on the bottom will probably be a stretch goal depending on difficulty
                - Adding further options/filters on the landing page to further refine desired results
                - if using results page -> show more detailed nutritional information
        Interactions:
            - MVP:
                - After clicking submit, an API call will be made to EDAMAM API requesting recipes. If the user submitted an input string w/ their request it will be input into the API URL on the fetch. If not it will return 20 random recipes
                - Recipes will populate in area underneath the search bar in a scrollable div or pull up on a separate results page (either using routes or a modal)
                -Eliminate need for further interaction by having direct link to recipe along with basic nutritional info/tags populated w/ request
            - Stretch:
                - Maybe build a queue to add them to? Or be able to export them and email a recipe list somehow?
                - Added options/filters will change the URL used in the fetch call
    - Study Page:
        What's seen:
            - MVP:
                - Title up top w/ study music or crediting the channel
                - embedded youtube video that scales to fit and has lofi girl stream able to be played
                - Bottom Nav
                    - same thoughts/issues/plan as eat page nav
            - Stretch:
                - Multiple streams to choose from?
                - Option to minimize in bakground?
        Interactions:
            - MVP:
                - Clicking on the embedded video starts the music
                - Clicking on the nav navigates to respective pages/routes
            - Stretch:
                - some sort of styling effect change onhover for title and nav buttons
                - onclick change for buttons
                - if using several video(music) sources, have the rest either minimize or turn into thumbnails/links
                - biggest stretch goal is to maintain video 'in background' (miniaturized into bottom right corner)
                    - no idea how to do this or if it's possible
    - Joke Page:
        What's Seen:
            - MVP:
                - Title up top
                    - May incorporate ron swanson quote here instead - find a place to put mustache? (stretch)
                - "Get Joke" Button
                - Display area for where joke will be displayed
                - Bottom Nav
                    - same thoughts/issues/plan as eat page nav
            - Stretch:
                - Dropdown select for joke type
                - 2nd button to appear if a 2 part joke (punchline button?)
                    - possibly change stylings of display area for 2 part jokes
        Interactions:
            - MVP:
                - onclick "Get Joke" Button will fetch an API pull from JokeAPI
                    - will filter out all nsfw, racist, sexist, religious, and political jokes
                    - default joke type will be "dark"
                        -(it is for me! :D )
                - Clicking nav buttons will nav to respective pages/routes
            - Stretch:
                - When different drop downs are selected it changes the URL on fetch to bring different joke types
                - 2nd button to display 2nd part of 2 part joke
                - onclick/onhover events for title and nav
    - Random Page:
        What's Seen:
            - MVP:
                - Random title up top
                    - include randomness aspect? (stretch)
                - Random Button
                - Bottom Nav
                    - same thoughts/issues/plan as eat page nav
            - Stretch:
                - Dropdown for random number, gif, definition, spanish word?
                    - for random number just return 0 - 100
                        - if more time add range parameters
                    - otherwise just return a random [gif, def, spanword] to a div
        Interactions:
            - MVP: 
                - onclick Random button populates a random gif or some other value from random api
                    - resizes button and displays the returned item on the page
                - Clicking nav buttons will nav to respective pages/routes   
            - Stretch:
                - dropdown menu changes what's displayed for random number generator
                - different values changed changes url in API call
                - onclick/onhover events for title and nav
                
                
        
