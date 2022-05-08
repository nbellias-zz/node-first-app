// First install type script with 'npm i -D typescript'
// then, run 'npx tsc example.ts'
function isAdult(user) {
    return user.age >= 18;
}
var justine = {
    name: 'Justine',
    age: 23
};
var isJustineAnAdult = isAdult(justine);
console.log("Justine is adult: ".concat(isJustineAnAdult));
