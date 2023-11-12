const express = require('express')

const router = express.Router()

const {listContacts, getContactById} = require('../../models/contacts');

router.get('/', async (req, res, next) => {
  const data = await listContacts();
  res.json(data);
})

router.get('/:contactId', async (req, res, next) => {
  const {contactId} = req.params;
  const data = await getContactById(contactId); 
  res.json(data);
})

router.post('/', async (req, res, next) => {

  
  res.json({ message: 'template message' })
  console.log('post/');
})

router.delete('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
  console.log('del/');
})

router.put('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
  console.log('put/');
})

module.exports = router
