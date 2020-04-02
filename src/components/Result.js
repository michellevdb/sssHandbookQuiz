import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
 
function Result(props) {
	return (
		<ReactCSSTransitionGroup
			className="container result"
			component ="div"
			transitionName="fade"
			transitionEnterTimeout={800}
			transitionLeaveTimeout={500}
			transitionAppear
			transitionAppearTimeout={500}
		>
			<div>
				Your level of knowlege: <strong>{props.quizResult}</strong>!
				<br></br>
				Follow this <a href="https://docs.google.com/document/d/1QaasKLGxJivcEWJ3z7Pg_i7M1C8atvrhndwwyZb9SJk/edit?ts=5e78dae5" target="_blank">link</a> to review the all the answers
			</div>
		</ReactCSSTransitionGroup>
	);
}
 
Result.propTypes = {
	quizResult: PropTypes.string.isRequired,
};
 
export default Result;	