const SkillStakingRewards = artifacts.require("SkillStakingRewards");
const LPStakingRewards = artifacts.require("LPStakingRewards");
const SkillToken = artifacts.require("SkillToken");
const ExperimentToken = artifacts.require("ExperimentToken");

module.exports = async function (deployer, network) {
  if (network === 'bscmainnet' || network === 'bscmainnet-fork' || network === 'hecomainnet' || network === 'okexmainnet' || network === 'polygonmainnet' || network === 'avaxmainnet' || network === 'auroramainnet' || network === 'skalemainnet' || network === 'kavamainnet') {
    const ownerAddress = '0x72A78d634C81f7667a64A3C6DA5989518746Ed10';
    const rewardDistributorAddress = '0x72A78d634C81f7667a64A3C6DA5989518746Ed10';
    let skillTokenAddress, lpTokenAddress;
    if (network === 'bscmainnet' || network === 'bscmainnet-fork') {
      skillTokenAddress = '0x154a9f9cbd3449ad22fdae23044319d6ef2a1fab';
      lpTokenAddress = '0xf0252108666A9a6B473aB4028781965064D78147';
    }
    else if(network === 'hecomainnet' || network === 'okexmainnet' || network === 'polygonmainnet' || network === 'avaxmainnet' || network === 'auroramainnet' || network === 'skalemainnet' || network === 'kavamainnet') {
      await deployer.deploy(SkillToken);
      const skillToken = await SkillToken.deployed();
      skillTokenAddress = skillToken.address;
      await deployer.deploy(ExperimentToken);
      const lpToken = await ExperimentToken.deployed();
      lpTokenAddress = lpToken.address
    }
    else assert.fail('Should never happen - but just in case');

    // 0.001 minimumStakeAmount
    await deployer.deploy(SkillStakingRewards, ownerAddress, rewardDistributorAddress, skillTokenAddress, skillTokenAddress, 1000000000000000, 7 * 24 * 60 * 60);

    // 0.001 minimumStakeAmount
    await deployer.deploy(LPStakingRewards, ownerAddress, rewardDistributorAddress, skillTokenAddress, lpTokenAddress, 1000000000000000, 0);
  }
};
