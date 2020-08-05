const docs = require('./docs.json');
const FlexSearch = require('flexsearch');

const index = new FlexSearch({ async: true });

docs.forEach((doc) => {
  index.add(doc.name, doc.text);
});

const search = (keyword) => {
  return index.search(keyword);
};

search('smaller')
.then(result => console.log(result))
.catch(e => console.log(e));