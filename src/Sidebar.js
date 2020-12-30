import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';

function Sidebar() {
	const recentItem = (topic) => (
		<div className="sidebar__recentItem">
			<span className="sidenar__hash">#</span>
			<p>{topic}</p>
		</div>
	);

	return (
		<div className="sidebar">
			<div className="sidebar__top">
				<img
					src="https://miro.medium.com/max/1124/1*92adf06PCF91kCYu1nPLQg.jpeg"
					alt=""
				/>
				<Avatar className="sidebar__avatar" />
				<h2>Miguel Dominguez</h2>
				<h4>miguel@gmail.com</h4>
			</div>

			<div className="sidebar__stats">
				<div className="sidebar__stat">
					<p>Who view you</p>
					<p className="sidebar__statNumber">2,534</p>
				</div>

				<div className="sidebar__stat">
					<p>Views on post</p>
					<p className="sidebar__statNumber">2,488</p>
				</div>
			</div>
			<div className="sidebar__bottom">
				<p>Recent</p>
				{recentItem('reactjs')}
				{recentItem('programming')}
				{recentItem('softwareengineering')}
				{recentItem('design')}
				{recentItem('developer')}
			</div>
		</div>
	);
}

export default Sidebar;
