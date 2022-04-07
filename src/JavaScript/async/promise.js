const delay = (ms) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(ms);
    }, ms)
  );
};
const main = async () => {
  console.log(`main1 start`);

  const result = delay(1000);
  result.then(console.log);
  console.log(`main1 end`);
};

const main2 = async () => {
  console.log(`main2 start`);

  const result = await delay(1000);
  console.log(result);
  console.log(`main2 end`);
};

main();
main2();
