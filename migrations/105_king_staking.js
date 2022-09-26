const { deployProxy, upgradeProxy } = require('@openzeppelin/truffle-upgrades');

const KingStakingRewardsUpgradeable = artifacts.require('KingStakingRewardsUpgradeable');

module.exports = async function (deployer, network) {
  if (network === 'bscmainnet' || network === 'bscmainnet-fork') {
    const ownerAddress = '0x72A78d634C81f7667a64A3C6DA5989518746Ed10';
    const rewardDistributorAddress = '0x72A78d634C81f7667a64A3C6DA5989518746Ed10';
    const kingTokenAddress = '0x0ccd575bf9378c06f6dca82f8122f570769f00c2';

    await deployProxy(KingStakingRewardsUpgradeable, [ownerAddress, rewardDistributorAddress, kingTokenAddress, kingTokenAddress, 7 * 24 * 60 * 60], { deployer });
  }
};
