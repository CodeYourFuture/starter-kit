// import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import moment from "moment";
// import axios from "axios";

// const TutorProfile = ({ tutorId }) => {
// 	const [tutorData, setTutorData] = useState(null);

// 	useEffect(() => {
// 		const fetchData = async () => {
// 			try {
// 				const response = await axios.get(`/api/tutors/${tutorId}`);
// 				setTutorData(response.data);
// 			} catch (error) {
// 				console.error(error);
// 			}
// 		};
// 		fetchData();
// 	}, [tutorId]);

// 	if (!tutorData) {
// 		return <div>Loading...</div>;
// 	}

// 	const {
// 		firstName,
// 		lastName,
// 		tutorId,
// 		email,
// 		phone,
// 		dateOfBirth,
// 		dateJoined,
// 		bio,
// 		goals,
// 		emergencyContact,
// 		assignedLearners,
// 		adminComments,
// 	} = tutorData;

// 	return (
// 		<div>
// 			<h1>Profile Page</h1>
// 			<div>
// 				<label>First Name:</label>
// 				<span>{firstName}</span>
// 			</div>
// 			<div>
// 				<label>Last Name:</label>
// 				<span>{lastName}</span>
// 			</div>
// 			<div>
// 				<label>Tutor ID:</label>
// 				<span>{tutorId}</span>
// 			</div>
// 			<div>
// 				<label>Email:</label>
// 				<span>{email}</span>
// 			</div>
// 			<div>
// 				<label>Phone:</label>
// 				<span>{phone}</span>
// 			</div>
// 			<div>
// 				<label>Date of Birth:</label>
// 				<span>{moment(dateOfBirth).format("MMM Do YYYY")}</span>
// 			</div>
// 			<div>
// 				<label>Date Joined:</label>
// 				<span>{moment(dateJoined).format("MMM Do YYYY")}</span>
// 			</div>
// 			<div>
// 				<label>Brief Bio:</label>
// 				<span>{bio}</span>
// 			</div>
// 			<div>
// 				<label>Goals and Desires:</label>
// 				<span>{goals}</span>
// 			</div>
// 			<div>
// 				<label>Emergency Contact:</label>
// 				<span>{emergencyContact}</span>
// 			</div>
// 			<div>
// 				<label>Assigned Learners:</label>
// 				<ul>
// 					{assignedLearners.map((learner) => (
// 						<li key={learner.id}>
// 							{learner.firstName} {learner.lastName}
// 						</li>
// 					))}
// 				</ul>
// 			</div>
// 			<div>
// 				<label>Admin Comments:</label>
// 				<span>{adminComments}</span>
// 			</div>
// 		</div>
// 	);
// };

// TutorProfile.propTypes = {
// 	tutorId: PropTypes.string.isRequired,
// };

// export default TutorProfile;

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import axios from "axios";

const TutorProfile = ({ tutorId }) => {
	const [tutorData, setTutorData] = useState(null);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(`/api/tutors/${tutorId}`);
				setTutorData(response.data);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}, [tutorId]);

	if (!tutorData) {
		return <div>Loading...</div>;
	}

	const {
		firstName,
		lastName,
		email,
		phone,
		dateOfBirth,
		dateJoined,
		bio,
		goals,
		emergencyContact,
		assignedLearners,
		adminComments,
	} = tutorData;

	return (
		<div>
			<h1>Profile Page</h1>
			<div>
				<label>First Name:</label>
				<span>{firstName}</span>
			</div>
			<div>
				<label>Last Name:</label>
				<span>{lastName}</span>
			</div>
			<div>
				<label>Tutor ID:</label>
				<span>{tutorId}</span>
			</div>
			<div>
				<label>Email:</label>
				<span>{email}</span>
			</div>
			<div>
				<label>Phone:</label>
				<span>{phone}</span>
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
				<label>Emergency Contact:</label>
				<span>{emergencyContact}</span>
			</div>
			<div>
				<label>Assigned Learners:</label>
				<ul>
					{assignedLearners.map((learner) => (
						<li key={learner.id}>
							{learner.firstName} {learner.lastName}
						</li>
					))}
				</ul>
			</div>
			<div>
				<label>Admin Comments:</label>
				<span>{adminComments}</span>
			</div>
			<div>
				<a href={`/tutor/edit/${tutorId}`}>Edit Profile</a>
			</div>
		</div>
	);
};

TutorProfile.propTypes = {
	tutorId: PropTypes.string.isRequired,
};

export default TutorProfile;
