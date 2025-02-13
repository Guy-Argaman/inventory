export const getUsers = (req, res) => {
    const users = [
        { 'firstName': 'John', 'lastName': 'Doe', 'email': '' },
        { 'firstName': 'Das', 'lastName': 'Doe', 'email': '' },
        { 'firstName': 'Das', 'lastName': 'Doe', 'email': '' },
        { 'firstName': 'Das', 'lastName': 'Doe', 'email': '' },
    ];
    res.status(200).json({ users });
};

export const getUserByID = (req, res) => {
    const { id } = req.params;
    res.status(200).json({ id });
}