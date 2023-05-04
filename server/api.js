import { Router } from "express";
import logger from "./utils/logger";
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

const Users = [
	{
		id: 1,
		name: 'Advocate Maroga',
		email: 'tboymaroga7@gmail.com',
		password: 'Zxcvbnm2023'
	},
	{
		id: 2,
		name: 'John Due',
		email: 'johndue@gmail.com',
		password: 'Qwerty2023'
	}
];

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});


router.post("/forgot_password", async (req, res) => {
	const email = req.body.email;
	const transporter = req.transporter; // access transporter object

	try {
		const user = Users.find((u) => u.email === email);
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
				return res
					.status(500)
					.json({ error: `Failed to send email ${email}` });
			}
			console.log("Email sent: " + info.response);
			res.json({ message: "Password reset link sent to your email" });
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal server error" });
	}
});

router.post("/reset_password/:id/:token", async (req, res) => {
	const { id, token } = req.params;
	const { password } = req.body;

	try {
		const payload = jwt.verify(token, JWT_SECRET);
		if (payload.id !== parseInt(id)) {
			return res.status(400).json({ error: "Invalid token" });
		}

		const user = Users.find((user) => user.id === parseInt(id));
		if (!user) {
			return res.status(400).json({ error: "User not found" });
		}
		user.password = password;
		// await user.save();

		res.json({ message: "Password reset successful" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal server error" });
	}
});



// Login API
router.post('/login', (req, res) => {
	const { email, password } = req.body;

	const user = Users.find(user => user.email === email);

	if (!user) {
		return res.status(400).json({ error: 'Invalid credentials' });
	}

	if (user.password !== password) {
		return res.status(400).json({ error: 'Invalid credentials' });
	}

	const payload = { id: user.id };
	const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '30m' });
	res.json({ token });
});



export default router;
