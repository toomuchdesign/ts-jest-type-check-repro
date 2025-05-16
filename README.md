# ts-jest type check repro

This repro shows a possibly unexpected behavior with `ts-jest` and `tsconfig.json`'s `isolatedModules`.

When `isolatedModules` is `true`, type check at test time execution seems to be skipped (for both test and tested files).

## How to run the repro

- `npm ci`

#### `isolatedModules` true

- `npm run test`: tests green
- `npm run type:check`: type check fails

#### `isolatedModules` false
- Disable `isolatedModules` in `tsconfig.json`.
- `npm run test`: tests red
- `npm run type:check`: type check fails