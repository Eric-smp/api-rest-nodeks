import fastify from 'fastify'
import { createTransactions } from './routes/transactions'
import cookie from '@fastify/cookie'

export const app = fastify()

app.register(cookie)

app.register(createTransactions, {
  prefix: 'transactions',
})
