# attributesDb - person

This is a fork of [convector-example-people-attributes](https://github.com/worldsibu/convector-example-people-attributes)

The original example uses ExpressJS to serve endpoints to communicate with Convector. This repo has all the changes ready to use NestJS.

```bash
# Start your blockchain network and install the smart contract
npm start

# Important: This first call takes some seconds as it provisions the containers needed to run the smart contract
# Create some seed data to play with the project
npm run seed

# Run the API
npx lerna run start:dev --scope server --stream
```




> This project is the result of this tutorial: https://docs.worldsibu.com/article/89-tutorial
