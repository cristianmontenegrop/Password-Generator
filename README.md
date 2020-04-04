# Password Genetator


- To start, I've defined the imputs that need to be created to understand what the user needs, divided in 2 sections mainly, the prompting of the carater length, with 2 conditions, no less than 8, no more than 128 characters, if the user imputs outside of this range, the function restarts.

- The other user imput booleans on the style of password to be generated were created, to understand if the user wanted Uppercase, Lowercase, Numbers and or Special characters. if none is selected, a message is prompted and the function restarts

- 4 Functions to generate random strings using chart code of the desired characters " upper, lower, number, symbol", then assigning the range by adding a start number, an multiplying by the length of the charater type from the chart.

- "if" statements to select only the selected type of characters to be added to the password and call the corresponding function to the indludedOptions array

- a "for loop" was created to run the following as many times as passwordLength represents
    - Generate a random number that would translate into selecting one of the active charater types available from indludedOptions, and put it into randomNumber Variable
    - NewChar variable that is created from the selecting of the randomly generated strings from includedOptions
    - Each new charater is added to the previous one by += object

- finally the variable password is returned from the function generatePassword so the function writePassword can use it
