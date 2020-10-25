const expiresIn = '1 day'; // We'll be using this value repeatedly.
import bcrypt from 'bcryptjs';
import * as jwt from "jsonwebtoken";

const resolvers = {
  Mutation: {
    async createUser(parent, { data }, { prisma }, info) {
      const password = await bcrypt.hash(data.password, 10);
      const newData = {...data, password}
      const user = await prisma.createUser(newData);
      //Since id is added by prisma it is unavailable when creating a user.
      const userWithToken = {
        ...user,
        token: jwt.sign({ userId: user.id }, process.env.TOKEN_SECRET, { expiresIn })
      };
      return userWithToken;
    }
  }
}

export default resolvers