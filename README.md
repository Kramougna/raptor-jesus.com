# Raptor Jesus

Mon espace personnel et le hub de mes mini-apps, expériences et projets développés pour le plaisir.

En ligne : https://raptor-jesus.com

## Mini-apps

- [Les petits explorateurs](https://geo.raptor-jesus.com) : jeu éducatif de géographie française. Son code est géré dans un dépôt séparé.

Chaque mini-app peut disposer de son propre sous-domaine. Ce dépôt contient uniquement le hub personnel, distinct du site professionnel Ayr.dev.

## Lancement local

Page statique sans dépendance ni étape de compilation.

```sh
python3 -m http.server 5175
```

Ouvrir http://localhost:5175.

## Publication

Publier `index.html` sur un serveur web statique. La version en ligne est servie par Caddy sur le VPS. Les clés et configurations du serveur ne sont pas stockées dans ce dépôt.

L'ancien projet Nuxt a été remplacé par ce hub. Son historique reste accessible dans Git.
