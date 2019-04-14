const SalmonToken = artifacts.require("SalmonToken");

module.exports = function(deployer) {
  deployer.deploy(SalmonToken, "Salmon Token", "SLM", 18, 21000000);
};
