# Would You Rather Project

This is the simple project to apply the knowledge learned on using redux with react to handle states.

## Author
[Youssef Elgendy](https://github.com/yossef-elgendy)

## TL;DR

To get started with the project right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── README.md - This file.
├── yarn.lock # The whitelisted short collection of available search terms for you to use with your app.
├── package-lock.json
├── .gitignore
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── components
    │   ├── SignIn
    │   │    ├── SignIn.js
    │   │    ├── Copyright.js
    │   │    ├── useStyles.js
    │   │    └── User.js
    │   │    
    │   ├── NotFound 
    │   │    ├── NotFound.js
    │   │    └── NotFound.css
    │   │    
    │   ├── Home 
    │   │    ├── Home.js
    │   │    └── Question.js
    │   │    
    │   ├── AddQuestion 
    │   │    └── AddQuestion.js
    │   │   
    │   ├── AboutUs 
    │   │    └── AboutUs.js
    │   │ 
    │   ├── Leaderboard 
    │   │    └── Leaderboard.js
    │   │ 
    │   ├── QuestionDetails 
    │   │    ├── QuestionDetails.js
    │   │    └── Details.js
    │   │
    │   ├── NavStyle.js
    │   ├── ProtectedRoute.js
    │   ├── NavBar.js
    │   └── App.js
    │ 
    ├── utils
    │   ├── _DATA.js
    │   ├── api.js
    │   └── helpers.js
    │
    ├── actions
    │   ├── authedUser.js
    │   ├── users.js
    │   ├── shared.js
    │   └── questions.js
    │
    ├── reducers
    │   ├── index.js
    │   ├── users.js
    │   ├── authedUser.js
    │   └── questions.js
    │
    ├── middlewares
    │   ├── logger.js
    │   └── index.js
    │   
    ├── img
    │   ├── appImage.jpg
    │   ├── dan.png
    │   ├── sarah.png
    │   └── tyler.png
    │
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```


## Data

There are two types of objects stored in our database:

* Users
* Questions

### Users

Users include:

| Attribute    | Type             | Description           |
|-----------------|------------------|-------------------         |
| id                 | String           | The user’s unique identifier |
| name          | String           | The user’s first name  and last name     |
| avatarURL  | String           | The path to the image file |
| questions | Array | A list of ids of the polling questions this user created|
| answers      | Object         |  The object's keys are the ids of each question this user answered. The value of each key is the answer the user selected. It can be either `'optionOne'` or `'optionTwo'` since each question has two options.

### Questions

Questions include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id                  | String | The question’s unique identifier |
| author        | String | The author’s unique identifier |
| timestamp | String | The time when the question was created|
| optionOne | Object | The first voting option|
| optionTwo | Object | The second voting option|

### Voting Options

Voting options are attached to questions. They include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| votes             | Array | A list that contains the id of each user who voted for that option|
| text                | String | The text of the option |

Your code will talk to the database via 4 methods:

* `_getUsers()`
* `_getQuestions()`
* `_saveQuestion(question)`
* `_saveQuestionAnswer(object)`

1) `_getUsers()` Method

*Description*: Get all of the existing users from the database.  
*Return Value*: Object where the key is the user’s id and the value is the user object.

2) `_getQuestions()` Method

*Description*: Get all of the existing questions from the database.  
*Return Value*: Object where the key is the question’s id and the value is the question object.

3) `_saveQuestion(question)` Method

*Description*: Save the polling question in the database.  
*Parameters*:  Object that includes the following properties: `author`, `optionOneText`, and `optionTwoText`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| author | String | The id of the user who posted the question|
| optionOneText| String | The text of the first option |
| optionTwoText | String | The text of the second option |

*Return Value*:  An object that has the following properties: `id`, `author`, `optionOne`, `optionTwo`, `timestamp`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id | String | The id of the question that was posted|
| author | String | The id of the user who posted the question|
| optionOne | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
| optionTwo | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
|timestamp|String | The time when the question was created|

4) `_saveQuestionAnswer(object)` Method

*Description*: Save the answer to a particular polling question in the database.
*Parameters*: Object that contains the following properties: `authedUser`, `qid`, and `answer`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| authedUser | String | The id of the user who answered the question|
| qid | String | The id of the question that was answered|
| answer | String | The option the user selected. The value should be either `"optionOne"` or `"optionTwo"`|
