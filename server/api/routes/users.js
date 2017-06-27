import { Router } from 'express'
import users from '../controllers/users.js'

var router = Router()

router.get('/users', function (req, res, next) {
  users.fetch(function(err, data) {
    if (err) {
      res.send(err);
    }
    res.json(data);
  })
})

router.post('/users', function (req, res, next) {
  var user = req.body

  users.create(user, function(err, data) {
    if (err) {
      res.send(err);
    }
    res.json(data);
  })
})

router.get('/users/:id', function (req, res, next) {
  var userId = req.params.id

  users.fetchById(userId, function(err, data) {
    if (err) {
      res.status(404).json({
        msg: 'User not found'
      });
    }
    res.json(data);
  })
})

export default router
