import React from 'react';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import './Feed.css';
import InputOptions from './InputOptions';

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
				</div>
			</div>
		</div>
	);
}

export default Feed;