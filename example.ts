// First install type script with 'npm i -D typescript'
// then, run 'npx tsc example.ts && node example.js'

type User = {
    name: string;
    age: number;
};

function isAdult(user: User): boolean {
    return user.age >= 18;
}

const justine: User = {
    name: 'Justine',
    age: 23,
};

const isJustineAnAdult: boolean = isAdult(justine);

console.log(`Justine is adult: ${isJustineAnAdult}`)
