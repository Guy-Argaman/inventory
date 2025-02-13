export const checkAuth = (req, res, next) => {
    const { userName } = req.body;
    if (userName && userName[0] === 'j') {
        next();
    } else {
        res.status(401).send('Not authorized');
    }
}