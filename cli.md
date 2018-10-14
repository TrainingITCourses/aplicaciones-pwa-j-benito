npm install @ngrx/store --save
npm install @ngrx/store-devtools --save

npm install @ngrx/schematics --save-dev
npm install @angular-devkit/schematics --save-dev
ng config cli.defaultCollection @ngrx/schematics

cd src/app/reducers/
ng g st State --root -m app.module.ts --spec false
ng g r Global --spec false -r index.ts
ng g a Global --spec false reducers

npm install @ngrx/effects --save
ng g ef Global --root ‐m ../app.module.ts --spec false
