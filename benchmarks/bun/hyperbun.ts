import { createServer } from 'hyperbun'

const app = createServer()

app.get('/', () => 'Hyperbun')
app.get('/user', () => 'User')
app.get('/user/comments', () => 'User Comments')
app.get('/user/avatar', () => 'User Avatar')
app.get('/user/lookup/email/:address', () => 'User Lookup Email Address')
app.get('/event/:id', () => 'Event')
app.get('/event/:id/comments', () => 'Event Comments')
app.post('/event/:id/comments', () => 'POST Event Comments')
app.post('/status', () => 'Status')
app.get('/very/deeply/nested/route/hello/there', () => 'Very Deeply Nested Route')
app.get('/user/lookup/username/:username', async (_, context) => {
  const username = context.params.username
  return { message: `Hello ${username}` }
})

app.listen({
  port: 3000,
})
