const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const dogsOnlyJulia = dogsJulia.slice(1, 3);

const checkDogs = (arr1, arr2) => {
  const allDogs = [...arr1, ...arr2];

  allDogs.forEach((age, i) => {
    return age >= 3
      ? console.log(`Dog number ${i + 1} is an adult, and is ${age} years old.`)
      : console.log(`Dog number ${i + 1} is still a puppy 🐶`);
  });
};

checkDogs(dogsOnlyJulia, dogsKate);
