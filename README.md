# PharmaCom
# --------------------------- Etape de Réalosation -------------
# -----------------=> 1 Crée les folders
# -----------------=> 2 Command utliser
   # npm init
   # npm install express nodemon
   # npm i -D typescript @types/express ts-node 
   # npx tsc --init => tsconfig.json {
      "outDir": "./dist",  
      "rootDir": "./src",  
      "include": ["src/**/*.ts"]
   }
   #  npm i -D npm-run-all
   # Ajouter scripte pour run projet package.json{
      "watch": "tsc -w",
      "start": "nodemon ./src/index.ts",
      "dev": "npm-run-all --parallel watch start2"
   }
   # Run projet {
      npm run start : pour run server(index.ts)
      tsc -w: pour complier ts en js
   }
   # configurer point entrer de l'application index.ts
   # installation http-error :Créez facilement des erreurs HTTP pour Express
   - npm install -d @types/http-errors
   # res.headersSent :
   - La propriété res.headersSent est une propriété booléenne qui indique si l'application a envoyé des en-têtes HTTP pour la réponse.
   # creation de Route générale + création les route de auth




