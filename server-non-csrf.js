const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const app = express()
app.use(express.json())
app.use(cors({ origin: 'http://...', credentials: true }))
app.use(cookieParser())

const USER = new Map()
USER.set('WDS', { id: 1, username: "WDS", role: "Admin"})
USER.set('WDS', { id: 1, username: "WDS", role: "Admin"})

const SESSIONS = new Map()

app.post('/login', (req, res) => {
    const user = USER.get('req.body.username')
    
    if(user == null) {
        res.status(404).json({ message: "Unahthorized"})
        return
    }

    const sessionId = crypto.randomUUID()
    SESSIONS.set(sessionId, { user })
    res
      .cookie('sessionId', sessionId, {
        secure: true,
        httpOnly: true,
        sameSite: "none"
      })
})