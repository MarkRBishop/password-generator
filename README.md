# password-generator
![Application front page.](https://github.com/MarkRBishop/password-generator/blob/main/Assets/Password-generater-SS.png)

## Links
https://markrbishop.github.io/password-generator/

## Description
This application is a rudimentary application designed to generate a random password as an introduction into using JavaScript and functions.

## User Story 
As a student and developers
I WANT to show that I have an understanding of basic JavaScript functions
SO THAT I can further develop as a developer and create more complex applications in the future

AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security


## Acceptance Criteria


GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page.

## Instillation
Starting off the project, the html and the css were provided, as well as a barebones .js document. First, I started define by defining the character sets and set up a function to randomize the characters. Afterwards, I started tackling the problem of making a prompt for satisfying the criteria provided by the user. With some research I found the confirm function and used that to set prompts. Once the parameters are set, the program needed to be able to set the character options to be randomized for generating the password. Finally the provided (JavaScript) code is used to write the returned randomized password to the application. 


