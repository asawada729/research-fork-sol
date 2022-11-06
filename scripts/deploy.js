// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
  const tokenName = "ResearchFork Token";
  const tokenSymbol = "RFT";
  // const owner = await hre.ethers.getSigner(network.config.from);
  // const [curator, seed1, seed2] = await hre.ethers.getSigners();
  const [owner] = await ethers.getSigners();
  const metadataUri = 'ipfs://QmeBChy1AYra2P9EnBoUGY61h6N3D6i4mbAAD7DChWw2ft/12.json';
  const curatorAddress = '0x4355cfcbf923e335D24840A91DD181a19a088973'; //curator.address
  const seedProviderAddressList = ['0x9b2905f8E2403DC093C21CaaE41e393f43488E9c', '0x5De83890BF6a27F5FD590417841884D67EF0FFc1']; //[seed1.address, seed2.address]

  console.log(`Deploying with the address ${owner.address}`);
  console.log(`Account balance: ${(await owner.getBalance()).toString()}`);

  const ResearchFork = await ethers.getContractFactory("ResearchFork");
  const researchFork = await ResearchFork.deploy(curatorAddress, seedProviderAddressList, metadataUri, tokenName, tokenSymbol);

  await researchFork.deployed();

  console.log(`Deployed at ${researchFork.address} or ${await researchFork.resolvedAddress}, signed by address ${await researchFork.signer.getAddress()}`);

  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  // const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  // const lockedAmount = hre.ethers.utils.parseEther("1");

  // const Lock = await hre.ethers.getContractFactory("Lock");
  // const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

  // await lock.deployed();

  // console.log(
  //   `Lock with 1 ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
  // );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
