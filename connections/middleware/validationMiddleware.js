export const validateUser = (req, res, next) => {
    const { name, email, address } = req.body;

    // Check for missing fields
    if (!name || !email || !address) {
        return res.status(400).json({ 
            status: "error", 
            message: "All fields are required: name, email, and address." 
        });
    }

    // Validate email format (basic validation)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ 
            status: "error", 
            message: "Invalid email format." 
        });
    }

    next(); // Proceed to the next middleware or controller
};
