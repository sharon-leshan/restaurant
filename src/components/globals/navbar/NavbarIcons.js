import React, { Component } from 'react';
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import styled from 'styled-components';
import { styles } from '../../../utils';

class NavbarIcons extends Component {
	state = {
		icons: [
			{
				id: 0,
				icon: <FaLinkedin className="icon linkedin-icon" />,
				path: `https://www.linkedin.com/in/sharon-maleo/`,
			},
			{
				id: 1,
				icon: <FaFacebook className="icon facebook-icon" />,
				path: `https://www.facebook.com/shazy.leshan`,
			},
			{
				id: 2,
				icon: <FaTwitter className="icon twitter-icon" />,
				path: `https://twitter.com/shazyleshan`,
			},
			{
				id: 3,
				icon: <FaInstagram className="icon instagram-icon" />,
				path: `https://www.instagram.com/shazy_leshan/`,
			},
		],
	};
	render() {
		return (
			<IconWrapper>
				{this.state.icons.map(({path, id, icon}) => (
					<a
						href={path}
						key={id}
						target="_blank"
						rel="noopener noreferrer"
					>
						{icon}
					</a>
				))}
			</IconWrapper>
		);
	}
}

const IconWrapper = styled.div`
	.icon {
		font-size: 1.3rem;
		cursor: pointer;
		${styles.transObject({})};
	}
	.linkedin-icon {
		color: #0e76a8;
	}
	.facebook-icon {
		color: #3b579d;
	}
	.twitter-icon {
		color: #3ab7f0;
	}
	.instagram-icon {
		color: #da5f53;
	}
	.icon:hover {
		color: ${styles.colors.mainYellow};
	}
	display: none;
	@media (min-width: 768px) {
		width: 8rem;
		display: flex;
		justify-content: space-around;
	}
`;
export default NavbarIcons;
