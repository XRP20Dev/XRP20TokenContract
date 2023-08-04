const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log('Deploying contracts with the account:', deployer.address);
  console.log('Account balance:', ethers.utils.formatEther(await deployer.getBalance()));

  const Token = await hre.ethers.getContractFactory("XRP20Token");
  const token = await Token.deploy('XRP20','XRP20','<address>');

  await token.deployed();

  console.log(
    `Token deployed to ${token.address}`
  );

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
