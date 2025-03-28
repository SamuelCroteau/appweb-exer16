---
outline: deep
---

# Revue de code documentée du TP1 de Marc-Antoine Jobin

Cette page est une revue de code documentée du TP1 de Marc-Antoine Jobin. Le code a été écrit par Marc-Antoine Jobin et la revue de code a été faite par Samuel Croteau.

## Le code

#### Le code est-il lisible, clair ou est-il trop complexe ?

Le code est lisible et clair. Il est bien structuré quoi que mal découpé en fichiers mais utilise des noms de variables explicites. Les pratiques de programmations et les normes et standarts de programmations sont **majoritairement** respectés et le code est bien indenté *(voir exemple ci-bas)* et dans l'ensemble, le code est compréhensible. Le site est d'ailleurs assez beaux et agréable à utiliser.

```md
const validateInfo = () => {
  let isValid = true;

  if (!newBookTitle.value.trim()) {
    titleError.value = 'Veuillez entrer un titre valide.';
    isValid = false;
  } else {
    titleError.value = '';
  }

  if (newBookPrice.value < 0) {
    priceError.value = 'Le prix ne peut pas être négatif.';
    isValid = false;
  } else {
    priceError.value = '';
  }

  if (newBookStock.value < 0) {
    stockError.value = 'Le stock ne peut pas être négatif.';
    isValid = false;
  } else {
    stockError.value = '';
  }

  return isValid;
};
```

## Les tests n'ont pas été demandé dans ce travail.

## Liens utiles

- *[Documentation de VitePress](https://vitepress.dev/)* 
- *[Documentation de Vue.js](https://vuejs.org/)*

