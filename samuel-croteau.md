## documentation faite par marc-antoine pour samuel croteau

## Le code
Le code de Samuel est très clair et structuré, et est facile à lire à cause de la bonne indentation, voici un **example:**
```md
<template>
    <div class="card container my-3">
        <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
                <h5 class="card-title">{{ props.pet.name }}</h5>
                <div>
                    <span class="badge bg-primary">{{ props.pet.animalType }}</span>
                    <span class="badge bg-secondary ms-2">{{ props.pet.race }}</span>
                </div>
            </div>

            <p class="card-text mt-3"><strong>Description:</strong> {{ props.pet.description }}</p>
            <p class="card-text"><strong>Prix:</strong> {{ props.pet.price }} €</p>
            <p class="card-text"><strong>Stock:</strong> {{ props.pet.stock }}</p>

            <button @click="deletePet" class="btn btn-danger mt-2">Supprimer</button>
            <button @click="editPet" class="btn btn-warning mt-2 ms-2">Modifier</button>
        </div>
    </div>
</template>
```
Je trouve que le code était conforme aux bonnes pratiques et aux normes et standards de programmation, et je n'ai pas vu de coquilles majeures dans le code, donc **bravo Samuel!**🎉 🎉 🎉
## Les tests
 Il n'y avait pas de tests demandé dans le tp, donc il n'en a pas fait.
## autres
Le lien de déploiement n'était pas fonctionnel au moment de la remise, donc il a perdu des points. Il n'a pas fait de sécurité ni d'optimisation de l'algorithme, car cela n'était pas demandé


* [Doc de vitepress](https://vitepress.dev/guide/markdown)
* [Doc de vue](https://vuejs.org/guide/introduction)