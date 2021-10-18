# @france-atelier/eslint-config-backend

Configuration ESLint pour les applications frontend Vue 2 de Keybas.

Inclut les plugins suivants :

- `@typescript-eslint/eslint-plugin` avec de nombreuses règles (les règles pouvant ralentir l'éditeur sont désactivées)
- `jsonc` pour lire les fichiers JSON
- `no-secrets` pour valider qu'il n'y ait pas de secrets dans le code
- `sonarjs` pour la qualité de code
- `unicorn` pour la qualité de code

Cette configuration ne définit ni parseur, ni formateur, qu'il faut installer soi-même.

## Utilisation

### Installation

```sh
npm i -D eslint typescript @france-atelier/eslint-config-frontend-vue2
```

### Fichier `.eslintrc`

```json
{
  "root": true,
  "env": {
    "browser": false,
    "node": true,
    "es2021": true
  },
  "extends": ["@france-atelier/eslint-config-frontend-vue2"],
  // vue parser, etc
}
```

### Scripts npm

Le script `lint:ci` est un example d'utilisation avec un formateur (ici, après avoir installé `eslint-formatter-gitlab` comme dépendance dev).

```json5
{
  "lint": "eslint --ignore-path .gitignore --ext .ts,.json .",
  "lint:ci": "eslint --format gitlab --ignore-path .gitignore --ext .ts,.json src"
}
```
