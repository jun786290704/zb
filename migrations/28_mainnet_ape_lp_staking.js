const { deployProxy } = require('@openzeppelin/truffle-upgrades');

const LPStakingRewardsUpgradeable = artifacts.require("LPStakingRewardsUpgradeable");
const SkillToken = artifacts.require("SkillToken");
const ExperimentToken = artifacts.require("ExperimentToken");

module.exports = async function (deployer, network, accounts) {
  if (network === 'bscmainnet' || network === 'bscmainnet-fork' || network === 'hecomainnet' || network === 'okexmainnet' || network === 'polygonmainnet' || network === 'avaxmainnet' || network === 'auroramainnet' || network === 'skalemainnet' || network === 'kavamainnet') {
    const rewardDistributorAddress = '0x72A78d634C81f7667a64A3C6DA5989518746Ed10';
    let skillTokenAddress, lpTokenAddress;
    if (network === 'bscmainnet' || network === 'bscmainnet-fork') {
      skillTokenAddress = '0x154A9F9cbd3449AD22FDaE23044319D6eF2a1Fab';
      lpTokenAddress = '0x0dEB588c1EC6f1D9f348126D401f05c4c7B7a80c';
    }
    else if(network === 'hecomainnet' || network === 'okexmainnet' || network === 'polygonmainnet' || network === 'avaxmainnet' || network === 'auroramainnet' || network === 'skalemainnet' || network === 'kavamainnet') {
      const skillToken = await SkillToken.deployed();
      skillTokenAddress = skillToken.address;
      const lpToken = await ExperimentToken.deployed();
      lpTokenAddress = lpToken.address;
    }

    await deployProxy(LPStakingRewardsUpgradeable, [accounts[0], rewardDistributorAddress, skillTokenAddress, lpTokenAddress, 0], { deployer });
  }
};

