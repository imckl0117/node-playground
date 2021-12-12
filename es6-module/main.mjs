import { addOne, addTwo } from './module_a.mjs';

import { addThree } from './module_b.mjs';

// this imports module_b.addFour
import adderB from './module_b.mjs';

// this doesn't work
//import { addFive, addSix } from './module_c.mjs';

import adderC from './module_c.mjs';

const { addFive, addSix } = adderC;

const n = 1;

console.log(`n = ${n}, addOne(n)   = ${addOne(n)}`);
console.log(`n = ${n}, addTwo(n)   = ${addTwo(n)}`);
console.log(`n = ${n}, addThree(n) = ${addThree(n)}`);
console.log(`n = ${n}, adderB(n)   = ${adderB(n)}`);
console.log(`n = ${n}, addFive(n)  = ${addFive(n)}`);
console.log(`n = ${n}, addSix(n)   = ${addSix(n)}`);

