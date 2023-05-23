require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config({ path : ".env"})

QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL
PRIVATE_KEY = process.env.PRIVATE_KEY
POLYGONSCAN_KEY = process.env.POLYGONSCAN_KEY

module.exports = {
  solidity : "0.8.4",
  networks : {
    mumbai : {
      url : QUICKNODE_HTTP_URL,
      accounts : [PRIVATE_KEY]
    }
  },
  etherscan : {
    apiKey : {
      polygonMumbai : POLYGONSCAN_KEY
    }
  }
}