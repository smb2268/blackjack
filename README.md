This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

I have created a basic blackjack game using http://deckofcardsapi.com/. 
The parentmost component is wrapper `GameWrapper`, which has children `Players`.
All communication with the API is done through `serviceCommunication.js` and a `utils.js` file
performs necessary Array manipulation and point calculation.
I have created a `utils.spec.js` file and begun to convert the app to TS, but have not completed
the TS migration.
