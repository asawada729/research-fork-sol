const {
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("Seed", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deploySeedFixture() {
    const tokenName = "ResearchFork Seed Token";
    const tokenSymbol = "SEED"
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const Seed = await ethers.getContractFactory("Seed");
    const seed = await Seed.deploy(tokenName, tokenSymbol);

    return { seed, owner, otherAccount };
  }

  describe("Deployment", function() {
    it("should initialize metadataUriList", async function() {
      const { seed, owner, otherAccount } = await loadFixture(deploySeedFixture);

      console.log(await seed.metadataUriList().length);
      expect(await seed.getMetadataUriListLength()).to.equal(1);
    });
  });
});
