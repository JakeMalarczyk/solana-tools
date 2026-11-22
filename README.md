# Solana tools

The logic behind the free tools at [orivions.com/tools](https://orivions.com/tools), published under the MIT license. Use it, copy it, build on it.

| Module | What it does | Live tool |
|---|---|---|
| `src/solanaProgram.ts` | Reads public Solana mainnet data and tells you who can upgrade a program: a single key, a program-controlled authority (for example a multisig vault) or nobody (immutable) | [Program upgrade authority checker](https://orivions.com/tools/solana-program-check) |
| `src/auditEstimate.ts` | Estimates audit effort (engineer-days), calendar time and an indicative price range from code size, complexity, framework and integrations | [Audit cost calculator](https://orivions.com/tools/solana-audit-cost-calculator) |
| `src/dappEstimate.ts` | Estimates build cost, timeline and yearly maintenance of a dApp | [dApp cost calculator](https://orivions.com/tools/solana-dapp-cost-calculator) |
| `src/rfpTemplates.ts` | Builds an RFP text for audit firms or software development firms from a set of form values | [Audit RFP generator](https://orivions.com/tools/audit-rfp-generator), [Software development RFP generator](https://orivions.com/tools/software-development-rfp-generator) |

The estimates are indicative ranges, not quotes. The assumptions (rates, review speed, factors) are constants at the top of each file so you can check them against real quotes.

## Check a program

```bash
npx tsx examples/check-program.ts <program address>
```

It prints the upgrade authority, whether it looks like a single key, and when the program was last deployed. It needs Node 18 or later. Set `SOLANA_RPC_URL` to use your own RPC endpoint instead of the public one.

## Notes

- The program check shows one setting on the public chain. It is not an audit and says nothing about the code.
- "Program-controlled" means the authority is a program derived address. The tool cannot tell which program or how many signers it needs, so ask the team.
- The web interfaces (forms, pages) live in the Orivions application and are not part of this repository.

## License

MIT. Copyright (c) 2026 Orivions. See [LICENSE](./LICENSE).
