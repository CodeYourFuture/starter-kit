import { Router } from "express";

import logger from "./utils/logger";

const router = Router();


router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});
const data = { id: 0, nam: 'John Due', email: 'tboymaroga7@gmail.com', password: "aadjdnqk23lm1j30jn1" }

const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const JWT_Secret = 'Super Secret code....';
const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'mrtamaroga@gmail.com',
		pass: 'yomrrfvdsfguxtiv'
	}
});

router.post('/forgot_password', async (req, res) => {
	const email = req.body.email;

	try {
		// Check if user with email exists in the database
		const user = await data.findOne({ email });
		if (!user) {
			res.status(400).json({ error: 'User not found' });
			return;
		}

		// Generate a token
		const payload = { email: user.email, id: user.id };
		const token = jwt.sign(payload, JWT_Secret, { expiresIn: '10m' });

		// Send email to user
		const mailOptions = {
			from: 'mrtamaroga@gmail.com',
			to: email,
			subject: 'Reset your password',
			html: `
                <p>Hi ${user.name},</p>
                <p>Please click the following link to reset your password:</p>
                <a href="http://localhost:3000/reset_password/${user.id}/${token}">Reset password</a>
            `
		};
		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				console.log(error);
				res.status(500).json({ error: 'Failed to send email' });
			} else {
				console.log('Email sent: ' + info.response);
				res.json({ message: 'Password reset link sent to your email' });
			}
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: 'Internal server error' });
	}
});

router.post('/reset_password', async (req, res) => {
	const { id, token, password } = req.body;

	try {
		// Verify token
		const payload = jwt.verify(token, JWT_Secret);
		if (payload.id !== id) {
			res.status(400).json({ error: 'Invalid token' });
			return;
		}

		// Update user password
		const user = await user.findById(id);
		if (!user) {
			res.status(400).json({ error: 'User not found' });
			return;
		}
		user.password = password;
		await user.save();

		res.json({ message: 'Password reset successful' });
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: 'Internal server error' });
	}
});


export default router;
