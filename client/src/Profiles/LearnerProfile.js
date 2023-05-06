import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import axios from "axios";
import Modal from "react-modal";

const LearnerProfile = ({ learnerId }) => {
	const [learnerData, setLearnerData] = useState(null);
	const [editModalOpen, setEditModalOpen] = useState(false);
	const [editedData, setEditedData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		dateOfBirth: "",
		bio: "",
		goals: "",
		emergencyContact: "",
		adminComments: "",
		tutorComments: "",
	});

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(`/api/learners/${learnerId}`);
				setLearnerData(response.data);
				setEditedData(response.data);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}, [learnerId]);

	const handleInputChange = (event) => {
		setEditedData({
			...editedData,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			await axios.put(`/api/learners/${learnerId}`, editedData);
			setLearnerData(editedData);
			setEditModalOpen(false);
		} catch (error) {
			console.error(error);
		}
	};

	if (!learnerData) {
		return <div>Loading...</div>;
	}

	const {
		firstName,
		lastName,
		photoUrl,
		email,
		dateOfBirth,
		dateJoined,
		bio,
		goals,
		emergencyContact,
		tutor,
		adminComments,
		tutorComments,
		attendanceRecord,
	} = learnerData;

	return (
		<div>
			<h1>Profile Page</h1>
			<div>
				<img src={photoUrl} alt="Profile" />
			</div>
			<div>
				<label>First Name:</label>
				<span>{firstName}</span>
			</div>
			<div>
				<label>Last Name:</label>
				<span>{lastName}</span>
			</div>
			<div>
				<label>Learner ID:</label>
				<span>{learnerId}</span>
			</div>
			<div>
				<label>Email:</label>
				<span>{email}</span>
			</div>
			<div>
				<label>Date of Birth:</label>
				<span>{moment(dateOfBirth).format("MMM Do YYYY")}</span>
			</div>
			<div>
				<label>Date Joined:</label>
				<span>{moment(dateJoined).format("MMM Do YYYY")}</span>
			</div>
			<div>
				<label>Brief Bio:</label>
				<span>{bio}</span>
			</div>
			<div>
				<label>Goals and Desires:</label>
				<span>{goals}</span>
			</div>
			<div>
				<label>Parents or Emergency Contact:</label>
				<span>{emergencyContact}</span>
			</div>
			<div>
				<label>Tutor Assigned to:</label>
				<span>{tutor}</span>
			</div>
			<div>
				<label>Admin Comments:</label>
				<span>{adminComments}</span>
			</div>
			<div>
				<label>Tutor Comments:</label>
				{editMode ? (
					<textarea
						value={tutorComments}
						onChange={(event) =>
							setLearnerData({
								...learnerData,
								tutorComments: event.target.value,
							})
						}
					/>
				) : (
					<span>{tutorComments}</span>
				)}
			</div>
			<div>
				<label>Attendance Record:</label>
				<span>{attendanceRecord}</span>
			</div>
			<div>
				<button onClick={handleEdit}>{editMode ? "Save" : "Edit"}</button>
			</div>
		</div>
	);
};
LearnerProfile.propTypes = {
	learnerId: PropTypes.string.isRequired,
};

export default LearnerProfile;






