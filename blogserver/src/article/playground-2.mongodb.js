// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'articleblog';
const collection = 'articles';

// Create a new database.
use(database);

// Create a new collection.
db.createCollection(collection);

// The current database to use.
use('articleblog');

// Create a new document in the collection.
db.getCollection('articles').insertMany([
  {
    _id: '6332ee404762b74698b88c54',
    title: 'Der erste Blog-Artikel',
    author: 'sng',
    description: 'Mit den Artikeln soll ein Demonstrator aufgebaut werden',
    content:
      'Die Architektur eines NestJS Servers arbeitet nach einer 3-Tier Architektur (Tier=engl. Schich-ten/Ebenen). Sie teilt den Code in drei Hauptkomponenten macht damit den Aufbau modularer. Um ihn aber auszureizen, muss man sich vorher Gedanken machen, wie die Seiten aussehen sollen. \nHi there',
    updatedAt: '2022-09-27T12:36:16.906Z',
    __v: 0,
  },
  {
    _id: '63406e3091a1b78e94ba8281',
    title: 'The second Entry',
    author: 'sng',
    description: 'Another small Part of Content',
    content: 'Blablabla and a few input',
    updatedAt: '2022-10-07T18:21:36.122Z',
    __v: 0,
  },
  {
    _id: '6332ee404762b74699b88c54',
    title: 'Der erste Blog-Artikel',
    author: 'sng',
    description: 'Mit den Artikeln soll ein Demonstrator aufgebaut werden',
    content:
      'Die Architektur eines NestJS Servers arbeitet nach einer 3-Tier Architektur (Tier=engl. Schich-ten/Ebenen). Sie teilt den Code in drei Hauptkomponenten macht damit den Aufbau modularer. Um ihn aber auszureizen, muss man sich vorher Gedanken machen, wie die Seiten aussehen sollen.',
    updatedAt: '2022-09-27T12:36:16.906Z',
    __v: 0,
  },
  {
    _id: '63406e3091a1bc8e94ba8281',
    title: 'The second Entry',
    author: 'sng',
    description: 'Another small Part of Content',
    content: 'Blablabla and a few input',
    updatedAt: '2022-10-07T18:21:36.122Z',
    __v: 0,
  },
  {
    _id: '6371f991b8623303c3b30bce',
    title: 'Neuer Beitrag',
    author: 'Sven',
    description: 'dieser Eintrag soll einfach die vorhandne Liste ergänzen',
    content: 'Erst mal nur Blabla',
    updatedAt: '2022-11-14T08:17:21.696Z',
    __v: 0,
  },
  {
    _id: '63970cffddd60a8ce6107bab',
    title: 'Test',
    author: 'Sng',
    description: 'Nur zum Löschen',
    content: 'Damit was gelöscht werden kann',
    updatedAt: '2022-12-12T11:14:07.312Z',
    __v: 0,
  },
]);
// The prototype form to create a collection:
/* db.createCollection( <name>,
  {
    capped: <boolean>,
    autoIndexId: <boolean>,
    size: <number>,
    max: <number>,
    storageEngine: <document>,
    validator: <document>,
    validationLevel: <string>,
    validationAction: <string>,
    indexOptionDefaults: <document>,
    viewOn: <string>,
    pipeline: <pipeline>,
    collation: <document>,
    writeConcern: <document>,
    timeseries: { // Added in MongoDB 5.0
      timeField: <string>, // required for time series collections
      metaField: <string>,
      granularity: <string>,
      bucketMaxSpanSeconds: <number>, // Added in MongoDB 6.3
      bucketRoundingSeconds: <number>, // Added in MongoDB 6.3
    },
    expireAfterSeconds: <number>,
    clusteredIndex: <document>, // Added in MongoDB 5.3
  }
)*/

// More information on the `createCollection` command can be found at:
// https://www.mongodb.com/docs/manual/reference/method/db.createCollection/
