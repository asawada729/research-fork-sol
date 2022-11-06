const {
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("ResearchFork", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployResearchForkFixture() {
    const tokenName = "ResearchFork Token";
    const tokenSymbol = "RFT";
    // Contracts are deployed using the first signer/account by default
    const [owner, curator, seed1, seed2] = await ethers.getSigners();
    const metadataUri = 'ipfs://QmeBChy1AYra2P9EnBoUGY61h6N3D6i4mbAAD7DChWw2ft/12.json'
    const curatorAddress = await curator.getAddress()
    const seedProviderAddressList = [await seed1.getAddress(), await seed2.getAddress()]

    const ResearchFork = await ethers.getContractFactory("ResearchFork");
    const researchFork = await ResearchFork.deploy(curatorAddress, seedProviderAddressList, metadataUri, tokenName, tokenSymbol);

    return { researchFork, owner, curator, seed1, seed2 };
  }

  describe("Deployment", function() {
    it("should initialize curator address", async function() {
      const { researchFork, owner, curator, seed1, seed2 } = await loadFixture(deployResearchForkFixture);

      expect(await researchFork.curatorAddress()).to.equal(await curator.getAddress());
    });
    it("should initialize provider address list", async function() {
      const { researchFork, owner, curator, seed1, seed2 } = await loadFixture(deployResearchForkFixture);

      expect(await researchFork.seedProviderAddressList(0)).to.equal(await seed1.getAddress());
      expect(await researchFork.seedProviderAddressList(1)).to.equal(await seed2.getAddress());
    });
    it("should initialize metadata uri", async function() {
      const { researchFork, owner, curator, seed1, seed2 } = await loadFixture(deployResearchForkFixture);

      expect(await researchFork.metadataUri()).to.equal('ipfs://QmeBChy1AYra2P9EnBoUGY61h6N3D6i4mbAAD7DChWw2ft/12.json');
    });
    it("should initialize owner", async function() {
      const { researchFork, owner, curator, seed1, seed2 } = await loadFixture(deployResearchForkFixture);

      expect(await researchFork.owner()).to.equal(await owner.getAddress());
    });
  });

  describe("Mint", function() {
    it("should deduct price", async function() {
      expect(1).to.equal(1);
    });
    it("should transfer token", async function() {
      expect(1).to.equal(1);
    });
  });
});
