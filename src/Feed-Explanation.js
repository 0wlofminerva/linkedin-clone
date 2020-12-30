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
import firebase from 'firebase'

function Feed() {
    const [input, setInput] = useState(''); /* create a piece of state for the input */
    const [posts, setPost] = useState([]);
    
    useEffect(() => {
        db.collection("posts").onSnapshot(sanpshot => (
            setPost(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data(),
                } /* Return an object */ ))
                ) /* Everytime the post change I update my post piece of state, get the docs in the collection & map through the docs & for every single doc in the collection  */
            )
    ) /* accessing to firebase, everytime the post gets deleted, added or updated it will give uus a snapshot  */
    }, [])
    /* Allows us to fire code when the Feed component loads */
    /* & whenever the component rerenders, if we dont pass a second argument */
    /* if we pass in a blank dependency like this {/*[]*/}
    /* then it fires once when the Feed component loads but it will never fire off again after that */
    /* so when the  rerender happens it never fire off again */

	const sendPost = (e) => {
        e.preventDefault();
        
        db.collection('posts').add({

            name: 'Miguel Dominguez',
            description: 'this is a text',
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }) /* add an object to the data base */
	};

	return (
		<div className="feed">
			<div className="feed__inputContainer">
				<div className="feed__input">
					<CreateIcon />
					<form>
						<input value={input} onChange={e setInput(e.target.value)} type="text" /> {/* the value of the input is the value of the state {input} */}
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
