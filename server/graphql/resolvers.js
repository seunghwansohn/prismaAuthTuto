import bcrypt   from 'bcryptjs';
import * as jwt from "jsonwebtoken";

const expiresIn = '1 day'; // We'll be using this value repeatedly.

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
    },
    async loginUser(parent, { email, password }, { prisma }, info) {
      console.log(email)
      const user = await prisma.user({email});
      if (!user) throw new Error('No User Found');
  
      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) throw new Error('Wrong Password');
  
      const userWithToken = {
        ...user,
        token: jwt.sign({ userId: user.id }, process.env.TOKEN_SECRET, { expiresIn })
      }
      console.log(userWithToken)
      return userWithToken
    }
  }
}

export default resolvers