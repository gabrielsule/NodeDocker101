const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.json({
        'msg': 'Adipisicing sit incididunt.'
    });
});

module.exports = router;