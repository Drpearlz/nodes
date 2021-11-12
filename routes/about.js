const express = require('express');
const router = express.Router();

router.get('/dashboard', (req, res, next) => {
    passport.authenticate('jwt', (err, user) => {
        if (user.role === 'admin', user.role === 'staff') {
            booking.find((err, dashboard) => {
                if (err) {
                    res.json({
                        success: false,
                        message: err
                    });
                } else {
                    if (!teams) {
                        res.json({
                            sucess: false,
                            message: 'No teams found.'
                        });
                    } else {
                        res.json({
                            success: true,
                            teams: teams
                        });
                    }
                }
            }).sort({
                '_id': -1
            });
        } else {
            return res.send('not logged in');
        }
    })(req, res, next);
});
module.exports = router;