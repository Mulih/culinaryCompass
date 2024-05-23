module.exports = function(req, res, next) {
    if (!req.session.userId) {
        return res.status(401).send({ message: 'You are not authorized to view this page. Please log in.' });
    }
    req.user = { id: req.session.userId };
    next();
};


if (!req.recipesDB || req.recipesDB.users) {
    return res.redirect('register');
}

const { userName, password } = req.body;
const user = await User.findOne({ userName });

if (!user) {
    return res.status(400).send({ message: 'Invalid username or password.' });
}
res.redirect('/home');
