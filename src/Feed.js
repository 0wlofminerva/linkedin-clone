import React from 'react';
import './Feed.css';
import InputOptions from './InputOptions';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
function Feed() {
	return (
		<div className="feed">
			<div className="feed__inputContainer">
				<div className="feed__input">
					<CreateIcon />
					<form>
						<input type="text" />
						<button type="submit">Send</button>
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
		</div>
	);
}

export default Feed;
