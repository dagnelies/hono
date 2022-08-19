import Bao from 'baojs'

const app = new Bao()

app.get('/', (c) => c.sendText('Baojs'))
app.get('/user', (c) => c.sendText('User'))
app.get('/user/comments', (c) => c.sendText('User Comments'))
app.get('/user/avatar', (c) => c.sendText('User Avatar'))
app.get('/user/lookup/email/:address', (c) => c.sendText('User Lookup Email Address'))
app.get('/event/:id', (c) => c.sendText('Event'))
app.get('/event/:id/comments', (c) => c.sendText('Event Comments'))
app.post('/event/:id/comments', (c) => c.sendText('POST Event Comments'))
app.post('/status', (c) => c.sendText('Status'))
app.get('/very/deeply/nested/route/hello/there', (c) => c.sendText('Very Deeply Nested Route'))
app.get('/user/lookup/username/:username', async (c) => {
  return c.sendJson({ message: `Hello ${c.params.username}` })
})

app.listen({
  port: 3000,
})
