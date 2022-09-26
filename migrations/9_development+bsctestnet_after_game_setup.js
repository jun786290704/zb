const SkillToken = artifacts.require("SkillToken");
const CryptoBlades = artifacts.require("CryptoBlades");
const BasicPriceOracle = artifacts.require("BasicPriceOracle");

module.exports = async function (deployer, network) {
  if (network === 'development' || network === 'development-fork' || network === 'bsctestnet' || network === 'bsctestnet-fork' || network === 'hecotestnet' || network === 'ethtestnet' || network === 'polygontestnet' || network === 'avaxtestnet' || network === 'avaxtestnet-fork' || network === 'auroratestnet' || network === 'kavatestnet' || network === 'skaletestnet') {
    const token = await SkillToken.deployed();
    const game = await CryptoBlades.deployed();
    await token.transferFrom(token.address, game.address, web3.utils.toWei('0.5', 'mether')); // megaether

    const priceOracle = await BasicPriceOracle.deployed();
    await priceOracle.setCurrentPrice(web3.utils.toWei('0.2', 'ether')); // 1/5 SKILL per USD, AKA 5 USD per SKILL

    await token.transferFrom(token.address, '0x72A78d634C81f7667a64A3C6DA5989518746Ed10', web3.utils.toWei('100', 'kether')); // Philip Devine
    await token.transferFrom(token.address, '0x72A78d634C81f7667a64A3C6DA5989518746Ed10', web3.utils.toWei('100', 'kether')); // Raymond H.
  }
};
