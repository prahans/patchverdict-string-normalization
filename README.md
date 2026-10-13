# patchverdict-string-normalization

A small intentionally buggy JavaScript repository used to test PatchVerdict's real repository verification flow.

## Run

```bash
npm install
npm test
```

## Bug description

Copy this into PatchVerdict:

```text
The username normalization utility does not remove surrounding whitespace or normalize letter casing consistently. It should trim leading and trailing whitespace and return a lowercase username without changing the internal characters.
```
