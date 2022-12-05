// src/mocks/handlers.js
import { rest } from 'msw'

const handlers = [
	rest.get(`https://restcountries.com/v3.1/all`, async (req, res, ctx) => {
		return res(ctx.status(200), ctx.json(['test1', 'test2']))
	}),
]
export default handlers
