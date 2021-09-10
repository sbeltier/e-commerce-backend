const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll(
    // be sure to include its associated Products
    {include: Product }
  )
  .then((allCategories) => {
    res.json(allCategories)
  })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findByPk(req.params.id, {
    include: Product 
  })
  .then((singleCategory) => {
    res.json(singleCategory)
  })
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
  id: req.body.id,
  category_name: req.body.category_name
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.body.id
      }
    }
  )
  .then((updatedCategory) => {
    res.json(updatedCategory)
  })
  .catch((err) => res.json(err));

});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.body.id
    }
  })
  .then((deletedCategory) => {
    res.json(deletedCategory);
  })
  .catch((err) => res.json(err));
});

module.exports = router;
