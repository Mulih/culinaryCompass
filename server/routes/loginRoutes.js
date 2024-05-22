router.post('/register', async(req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bycrpt.hash(password, saltRounds);

        // Check email already exists
        const existingUser = await User.findOne({ email: email});
        if (existingUser) {
            return res.status(409).send({ message: 'Email already exists' });
        }

        // create a new user
        const user = User({ username, email, password: hashedPassword });
        await user.save();
        req.session.userId = user._id; // Set user ID in session
        res.status(201).send({ message: 'User created successfully.' });
    } catch (error) {
        res.status(500).send({ message: 'Registration unsuccessful. Please try again.', error });
    }
});
router.post('/login', userController.login);