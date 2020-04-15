const router = require('express').Router();
const { Entry } = require('../db');

router.get('/', async(req, res, next) => { 
  try {
    const entries = await Entry.findAll();
    res.send(entries);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const entry = { ...req.body, userId: 1 }
    const createdEntry = await Entry.create(entry);
    res.send(createdEntry);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.put('/:id', async (req, res, next) => { 
  try {
    const body = req.body; 
    const id = req.params.id;
    await Entry.update(body, { where: { id }});
    const entry  = await Entry.findByPk(id);
    res.send(entry)
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => { 
  try {
    const id = req.params.id
    await Entry.destroy({ where: { id }});;
    res.send({});
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;