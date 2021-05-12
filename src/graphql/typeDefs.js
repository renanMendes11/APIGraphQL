import { fileLoader, mergeTypes } from 'merge-graphql-schemas';
import path from 'path';

const typesArray = fileLoader(path.join(__dirname, 'modules', '**', '*.gql'));
console.log(__dirname)
console.log("typesArray= "+typesArray);
console.log(typesArray);

const typeDefs = mergeTypes(typesArray);

console.log("typeDefs= "+typeDefs);
console.log(typeDefs);

export default typeDefs;