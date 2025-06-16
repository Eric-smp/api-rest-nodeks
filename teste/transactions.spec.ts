import { it, beforeAll, afterAll, describe, expect, beforeEach } from 'vitest'
import { execSync } from 'node:child_process'
import request from 'supertest'
import { app } from '../src/app'

describe('Transaction', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  beforeEach(() => {
    execSync('npm run knex migrate:rollback --all')
    execSync('npm run knex migrate:latest')
  })

  it('Use can create a new transactions ', async () => {
    await request(app.server)
      .post('/transactions')
      .send({
        title: 'New transactions',
        amount: 5000,
        type: 'credit',
      })
      .expect(201)
  })

  it('list transactions', async () => {
    const createTransactionsResponse = await request(app.server)
      .post('/transactions')
      .send({
        title: 'New transactions',
        amount: 5000,
        type: 'credit',
      })

    const cookies = createTransactionsResponse.headers['set-cookie']

    const listTransactionsRequest = await request(app.server)
      .get('/transactions')
      .set('Cookie', cookies)
      .expect(200)

    expect(listTransactionsRequest.body.transactionsList).toEqual([
      expect.objectContaining({
        title: 'New transactions',
        amount: 5000,
      }),
    ])
  })

  it('list transactions id', async () => {
    const createTransactionsResponse = await request(app.server)
      .post('/transactions')
      .send({
        title: 'New transactions',
        amount: 5000,
        type: 'credit',
      })

    const cookies = createTransactionsResponse.headers['set-cookie']

    const listTransactionsRequest = await request(app.server)
      .get('/transactions')
      .set('Cookie', cookies)
      .expect(200)

    const transactionsId = listTransactionsRequest.body.transactionsList[0].id

    const getTransactionsId = await request(app.server)
      .get(`/transactions/${transactionsId}`)
      .set('Cookie', cookies)
      .expect(200)

    expect(getTransactionsId.body.transactions).toEqual(
      expect.objectContaining({
        title: 'New transactions',
        amount: 5000,
      }),
    )
  })

  it('list transactions', async () => {
    const createTransactionsResponse = await request(app.server)
      .post('/transactions')
      .send({
        title: 'New transactions',
        amount: 5000,
        type: 'credit',
      })

    const cookies = createTransactionsResponse.headers['set-cookie']

    await request(app.server)
      .post('/transactions')
      .set('Cookie', cookies)
      .send({
        title: 'Teste',
        amount: 1000,
        type: 'debit',
      })

    const summary = await request(app.server)
      .get('/transactions/summary')
      .set('Cookie', cookies)
      .expect(200)

    expect(summary.body.summary.amount).toEqual(4000)
  })
})
