# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | In Progress
|Day 1| Wireframes / Priority Matrix / Functional Components | In progress
|Day 1| Database structure | In progress
|Day 1| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Day 2| Pseudocode / actual code | Incomplete
|Day 3| Initial Clickable Model  | Incomplete
|Day 4| MVP | Incomplete
|Day 5| Present | Incomplete


## Project Description

Keychain is an app that lets you store your login information (username, password) for all of your other apps and services, all in one place!

## Wireframes

https://res.cloudinary.com/algortihmtech-inc/image/upload/c_scale,h_3758/v1549293898/Proj%203-%20Group%20Project-%20Key%20Chain%20App/IMG_8817.jpg

## Priority Matrix

https://res.cloudinary.com/algortihmtech-inc/image/upload/v1549293477/Proj%203-%20Group%20Project-%20Key%20Chain%20App/IMG_8815.jpg

### MVP/PostMVP - 5min

The mvp consists of five pages: a sign in page, a signup page, a user homepage, a login info detail page, and a create login component page.


#### SAMPLE.....
#### MVP 

- CRUD for sub username/password
- Clickable User Interface, for 1 user
- Hardcoded services table for 20 most common services

#### PostMVP 

- CRUD for multiple users
- Possible encryption for data
- Random Password Generator

## React Architectural Design

https://res.cloudinary.com/algortihmtech-inc/image/upload/v1549293476/Proj%203-%20Group%20Project-%20Key%20Chain%20App/IMG_8800.jpg

## ERD

https://res.cloudinary.com/algortihmtech-inc/image/upload/v1549293477/Proj%203-%20Group%20Project-%20Key%20Chain%20App/IMG_8807.jpg

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

#### SAMPLE.....
| Component | Description | 
| --- | :---: |  
| Header | Fixed header |
| Sign In Page | Sets in app user state |
| Sign Up Page | Creates a new in app user id |
| Home Page | Displays links to different login infos |
| Login info detail page | Renders when you click a link in the list on the homepage |
| Create New Login Info | Creates new login info tab for user |





Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

#### SAMPLE.....
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Create Database Structure | H | 2 hrs | N/A |
| Create seed/reset files | H | 2.5 hrs | N/A |
| Create CRUD routes for sub login info | H | 2hrs | N/A |
| Create react app routes/structure | H | 4hrs | N/A |
| Render Clickable components | H | 4hrs | N/A
| Create LOGO | M | 2 hrs | N/A |
| Add API routes to front end | H | 3hrs | N/A |
| Make forms for front end | H | 2hrs | N/A |
| Basic CSS styling | M | 4hrs | N/A |

| TOTAL | H | 25.5hrs | N/A

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

#### SAMPLE.....
| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string of text | 

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 
 
 #### SAMPLE.....
| Library | What it Does | 
| --- | :---: |  
| React Router | Used to create routes in react to different pages | 
| Sequelize | Used to create and seed backend | 
| Express | Used to run node.js server, retrieve info from backend |
| Nodemon/Concurrently | Development servers, so we can run and update to the front end and backend in realtime |
| Body Parser | Used to make JSON queries to database |

POST MVP:
| UUID | Generate unique user ids |


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

#### SAMPLE.....
```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

#### SAMPLE.....
| Original Plan | Outcome | 
| --- | :---: |  
| Have one Book component | Split that component into BookInfo and BookInteraction as the component grew too complicated | 

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
