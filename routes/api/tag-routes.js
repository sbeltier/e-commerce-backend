const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll(
      // be sure to include its associated Product data
    { include: [{ model: Product }]}
  )
  .then((allTags) => {
    res.json(allTags)
  })
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findByPk(req.params.id,
    { include: [{ model: Product }]}
  )
  .then((singleTag) => {
    res.json(singleTag)
  })
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  Tag.create({
    id: req.body.id,
    tag_name: req.body.tag_name
  })
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    {
      tag_name: req.body.tag_name
    },
    {
      where: {
        id: req.body.id
      }
    }
  )
  .then(res.json(updatedTag))
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
