// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('articleblog');

// Create a new document in the collection.
db.getCollection('articles').insertOne({
    "title": "The second Entry",
    "author": "sng",
    "description": "Another small Part of Content",
    "content": "Blablabla and a few input",
});
