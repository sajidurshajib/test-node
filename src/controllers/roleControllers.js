exports.checkId = (req, res, next, val) => {
    if (val < 1) {
        res.status(404).json({
            msg: 'Invalid id',
        })
    }
    next()
}

exports.getAllRoles = (req, res) => {
    res.json({ msg: ['All roles are here'] })
}

exports.postNewRole = (req, res) => {
    res.json({ msg: 'Role created' })
}

exports.getSingleRole = (req, res) => {
    res.json({
        msg: `Single role => ${req.params.id}`,
    })
}

exports.patchRole = (req, res) => {
    res.json({
        msg: `Role updated.id => ${req.params.id}`,
    })
}

exports.deleteRole = (req, res) => {
    res.json({
        msg: `Role remove.id => ${req.params.id}`,
    })
}
