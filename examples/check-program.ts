import { checkProgram } from '../src/solanaProgram';

const address = process.argv[2];
if (!address) {
  console.error('Usage: npx tsx examples/check-program.ts <program address>');
  process.exit(1);
}

const result = await checkProgram(address);
console.log(JSON.stringify(result, null, 2));
