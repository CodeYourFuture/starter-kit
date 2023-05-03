import { Router } from "express";
import logger from "./utils/logger";
import User from "./models/User";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

const router = Router();

const JWT_SECRET = "Super Secret code....";
const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: "mrtamaroga@gmail.com",
		pass: "yomrrfvdsfguxtiv",
	},
});

const users = [
	{
		id: 1,
		name: 'Advocate Maroga',
		email: 'tboymaroga7@gmail.com',
		password: '$2b$10$3nt4E4GFXvcyMwGrztOpbOqAlp0McdoWcZmB9P2BGTQ0LnE.uN/2W' // Encrypted password: 'password'
	},
	{
		id: 2,
		name: 'Jane Smith',
		email: 'jane@example.com',
		password: '$2b$10$q01aX9.nDnImeqSG1HxJdOyA1fnVLGczlJd3fIKrDBrZ/Yn9TVejG' // Encrypted password: 'password'
	}
];

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});


router.post("/forgot_password", async (req, res) => {
	const email = req.body.email;

	try {
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(400).json({ error: "User not found" });
		}

		const payload = { email: user.email, id: user.id };
		const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "10m" });

	
		const mailOptions = {
			from: "mrtamaroga@gmail.com",
			to: email,
			subject: "Reset your password",
			html: `
        <p>Hi ${user.name},</p>
        <p>Please click the following link to reset your password:</p>
        <a href="http://localhost:3000/reset_password/${user.id}/${token}">Reset password</a>
      `,
		};
		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				console.error(error);
				return res.status(500).json({ error: `Failed to send email ${email}` });
			}
			console.log("Email sent: " + info.response);
			res.json({ message: "Password reset link sent to your email" });
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal server error" });
	}
});

router.post("/reset_password", async (req, res) => {
	const { id, token, password } = req.body;

	try {
		// Verify token
		const payload = jwt.verify(token, JWT_SECRET);
		if (payload.id !== id) {
			return res.status(400).json({ error: "Invalid token" });
		}

		// Update user password
		const user = await User.findById(id);
		if (!user) {
			return res.status(400).json({ error: "User not found" });
		}
		user.password = password;
		await user.save();

		res.json({ message: "Password reset successful" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal server error" });
	}
});



// Login API
router.post('/login', async (req, res) => {
	const { email, password } = req.body;

	const user = users.find(user => user.email === email);

	if (!user) {
		return res.status(400).json({ error: 'Invalid credentials' });
	}

	const isMatch = await bcrypt.compare(password, user.password);

	if (!isMatch) {
		return res.status(400).json({ error: 'Invalid credentials' });
	}

	const payload = { id: user.id };
	const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '30m' });
	res.json({ token });
});


export default router;
