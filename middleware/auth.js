module.exports = function(req, res, next) {
    if (!req.session.userId) {
        return res.status(401).send({ message: 'You are not authorized to view this page. Please log in.' });
    }
    req.user = { id: req.session.userId };
    next();
};