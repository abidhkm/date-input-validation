## Date validation based on locale 

Date formats:

EN-GB --> DD/MM/YYYY

EN-US --> MM/DD/YYYY

JA (japanese) --> YYYY/MM/DD



So,
22/11/2022 is a valid date in EN-GB but not for EN-US and JA.

Therefore date input field validation is important based on the locale selection for better user experience.

This repo showing an example on how this can be done using moment.js

Please refer this [file](src/App.tsx) for example code (in react)