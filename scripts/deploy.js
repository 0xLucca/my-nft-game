const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Tactical Dog", "Billionaire Dog", "Cute Dog"],
    [
      "QmWwdvfs45tzcyqmVWCb4tKDc99TiQGWaFUG4DCpAoyFcL", // Images
      "QmbBM42gruM2Z1LepX9BUK6X5TDk5tk5PzsSZHp6BaFrkb",
      "QmT9mTMgsSRdCZhRBY3HhvXDdKrT4sdx5rgTYzMQFSeVmb",
    ],
    [1000, 700, 400], // HP values
    [100, 150, 250], // Attack damage value
    "Mercenary Cat", // Boss name
    "QmSd1VCDk5oMg8DMohpMADoFaFoDx3NMgfwZtRN5CHmUto", // Boss image
    10000, // Boss hp
    75 // Boss attack damage
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
