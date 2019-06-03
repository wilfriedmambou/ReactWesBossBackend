import { GraphQLServer } from 'graphql-yoga'
import { Prisma } from './generated/prisma'
import resolvers from './resolvers/resolvers'

// the playground defaults to this port and not sure how to change it in dev mode
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 4000

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      endpoint: process.env.PRISMA_ENDPOINT, // the endpoint of the Prisma DB service (value is set in .env)
      secret: process.env.PRISMA_SECRET, // taken from database/prisma.yml (value is set in .env)
      debug: process.env.NODE_ENV==="development" ? true : false, // log all GraphQL queries & mutations
    }),
  }),
})

server.start({ port: PORT }, () => console.log(`Server is running on http://localhost:${PORT}`))