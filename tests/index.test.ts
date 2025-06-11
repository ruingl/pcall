import * as P from '../src';

async function risky() {
  throw new Error("Error!");
}

async function safe() {
  return "Yey!";
}

(async () => {
  const result1 = await P.pcall(risky);
  const result2 = await P.pcall(safe);

  if (result1.error) {
    console.log("Test1 complete!");
  } else {
    console.error("Test1 failed...");
  }

  if (result2.result) {
    console.log("Test2 complete");
  } else {
    console.error("Test2 failed...");
  }
})();
