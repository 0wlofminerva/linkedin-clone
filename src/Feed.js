import React, { useEffect, useState } from 'react';
import './Feed.css';
import InputOptions from './InputOptions';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase';

function Feed() {
	const [input, setInput] = useState('');
	const [posts, setPost] = useState([]);

	useEffect(() => {
		db.collection('posts').onSnapshot((snapshot) =>
			setPost(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					data: doc.data(),
				}))
			)
		);
	}, []);

	const sendPost = (e) => {
		e.preventDefault();

		db.collection('posts').add({
			name: 'Miguel Dominguez',
			description: 'this is a text',
			message: input,
			photoUrl: '',
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
	};

	return (
		<div className="feed">
			<div className="feed__inputContainer">
				<div className="feed__input">
					<CreateIcon />
					<form>
						<input
							value={input}
							onChange={(e) => setInput(e.target.value)}
							type="text"
						/>
						<button onClick={sendPost} type="submit">
							Send
						</button>
					</form>
				</div>
				<div className="feed__inputOptions">
					<InputOptions Icon={ImageIcon} title="Photo" color="#70b5f9" />
					<InputOptions
						Icon={SubscriptionsIcon}
						title="Event"
						color="#70b5f9"
					/>
					<InputOptions Icon={EventNoteIcon} title="Video" color="#70b5f9" />
					<InputOptions
						Icon={CalendarViewDayIcon}
						title="Write article"
						color="#70b5f9"
					/>
				</div>
			</div>

			{/* Post */}
			{posts.map((post) => (
				<Post />
			))}
			<Post
				name="Miguel Dominguez"
				decription="This  is test"
				message="WOW this worked"
			/>
		</div>
	);
}

export default Feed;
