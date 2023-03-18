import express from 'express'
import {addJournal, deleteJournal, getAllJournals, getJournal, updateJournal} from '../controllers/journal-controller.js';
const app = express()
const journalRouter = express.Router()


journalRouter.get('/', getAllJournals)
journalRouter.post('/add', addJournal)
journalRouter.put('/update/:id', updateJournal)
journalRouter.get('/:id', getJournal)
journalRouter.delete('/:id', deleteJournal)

export default journalRouter