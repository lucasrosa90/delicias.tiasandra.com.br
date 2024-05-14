const lintStagedConfig = {
  '**/*.{ts,tsx}': () => 'tsc --project tsconfig.json --noEmit --pretty',
  '**/*.{js,ts,jsx,tsx}': ['eslint', 'prettier --write -u'],
  '!**/*.{js,ts,jsx,tsx}': 'prettier --write -u',
}

export default lintStagedConfig
