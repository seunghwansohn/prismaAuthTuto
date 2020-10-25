import bcrypt from 'bcryptjs';
import * as jwt from "jsonwebtoken";

import {GraphQLServer} from 'graphql-yoga'
import { prisma } from './prisma/generated/prisma-client'


//비밀번호 및 토큰 생성 부분
const password = 'pleaseDontHackMe3248';
console.log('Raw Password: ', password);

bcrypt.hash(password, 8)
  .then(hashed => {
    console.log('Secure Password: ', hashed);

    // Must take the string version then the hashed version
    const doesMatch = bcrypt.compare(password, hashed);

    return doesMatch;
  }
  ).then(doesMatch => console.log('Password Matches: ', doesMatch));

const token = jwt.sign({ name: 'Someone' }, 'anotherSecret', { expiresIn: '1 day' });
console.log('토큰', token);

const decrypted = jwt.verify(token, 'anotherSecret');
console.log('디크립트토큰', decrypted);



//GraphQL 서버 부분
const typeDefs = `
  type Query {
    hello(name: String): String!
  }
`
const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`,
  },
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))