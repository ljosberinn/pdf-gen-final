```sh
git clone https://github.com/ljosberinn/pdf-gen-final

cd pdf-gen-final

npm install

composer install
```

#Workaround to import wonky bulmaCalendar properly

go to node_modules/bulma-calendar

edit `package.json` property `main` from `dist/bulma-calendar.min.js` to `dist/bulma-calendar.js`
go to `dist` and remove `bulma-calendar.min.js`
