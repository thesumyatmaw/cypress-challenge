# cypress-challenge
### Requirements to run the project
- Install python. (For me, I installed Python 3.9.10).
- Install flask.
- Install sqllite.
- Install node js. (for me, version number is v14.18.2)

### How to run the Cypress Test
- Run `npm run start-api`
- Run frontend project. Make sure localhost is running at `http://localhost:3000/#`
- Run `npx cypress open`
- Cypress IDE will open.
- You will see two test firstTest.feature.js and SecondTest.feature.js 
 
### Notes
- I create a shareConstant file. because I want to add new Asset name into the database and want to search this asset name for the second test.
- I suggest to add `uniqueAssetName` when run the tests in second time and further.

### Future Improvement
- It will be better by implementing a random generator for every new assest name.
When save this random generated Assest name and still gets the “Already existed” error, 
will generate new random name and try again saving until we can see “Save” success message.

### My Cypress Tests Running screenshots
<img width="792" alt="Screen Shot 2565-02-05 at 11 04 01 PM" src="https://user-images.githubusercontent.com/53144137/152660522-6fdb60d5-379c-4b85-9cf0-2eb1526cf3d4.png">
<img width="1373" alt="Screen Shot 2565-02-05 at 11 03 00 PM" src="https://user-images.githubusercontent.com/53144137/152660531-3d7497a7-c52d-4eb1-b2f5-f6f1b8449238.png">
<img width="1361" alt="Screen Shot 2565-02-05 at 11 03 48 PM" src="https://user-images.githubusercontent.com/53144137/152660540-d6102a61-c7aa-4741-9fdd-fdf90ce59988.png">

