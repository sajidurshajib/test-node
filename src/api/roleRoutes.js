const express = require('express')
const router = express.Router()
const {
    checkId,
    getAllRoles,
    postNewRole,
    getSingleRole,
    patchRole,
    deleteRole,
} = require('../controllers/roleControllers')

router.param('id', checkId)
router
    .route('/roles')
    .get(getAllRoles)
    .post(postNewRole)
router
    .route('/roles/:id')
    .get(getSingleRole)
    .patch(patchRole)
    .delete(deleteRole)

module.exports = router
