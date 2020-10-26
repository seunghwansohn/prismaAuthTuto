import bcrypt from 'bcryptjs';
import * as jwt from "jsonwebtoken";

import {GraphQLServer} from 'graphql-yoga'
import { prisma } from './prisma/generated/prisma-client'

import resolvers from './graphql/resolvers'

import dotenv from 'dotenv'
dotenv.config()


//GraphQL 서버 부분

const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql", 
  resolvers,
  context: () => {
    return {
      prisma
    }
  } 
})
server.start(() => console.log('Server is running on localhost:4000'))