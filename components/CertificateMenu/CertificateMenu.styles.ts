import styled from 'styled-components';

export const Logo = styled.div`
	display: none;
	align-items: center;
	padding: 0px 10px;
	a {
		font-family: 'inter', sans-serif;
		text-decoration: none;
		font-size: 1.5em;
	}

	@media screen and (max-width: 1000px) {
		display: flex;
	}
`;

export const BackButton = styled.button`
	border: none;
	padding: 10px;
	border-radius: 5px;
	background-color: #0187a7;

	a {
		text-decoration: none;
		color: white;
		font-weight: 500;
		font-size: 1.1rem;
	}
`;
export const SidebarContainer = styled.div`
	height: 100vh;
	width: 500px;
	background-color: rgba(0, 0, 0, 0.2);
	color: white;
	display: flex;
	flex-direction: column;
	padding: 16px;
	overflow: auto;

	@media screen and (max-width: 1000px) {
		display: none;
	}
`;

export const MenuList = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;

	.active {
		background-color: rgba(0, 0, 0, 0.2);
		transition: background-color 0.5s, transform 0.6s;
	}
	a {
		text-decoration: none;
	}
`;

export const MenuItem = styled.li`
	padding: 8px;
	cursor: pointer;
	&:hover {
		box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
		transform: scale(1.05);
	}
`;

export const CarouselContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: 10px;
	box-sizing: border-box;
	
`;

export const Content = styled.div`
	width: 100%;
`;

export const CarouselContent = styled.div`
	display: none;

	justify-content: space-between;
	align-items: center;
	margin-top: 20px;

	.none {
		display: none;
	}

	@media screen and (max-width: 1000px) {
		display: flex;
	}
`;

export const HandleContent = styled.div`
	height: 100px;
	align-items: center;
	display: flex;
`;

export const TopContent = styled.div`
	display: flex;
	justify-content: flex-end;

	padding-bottom: 5;

	@media screen and (max-width: 1000px) {
		justify-content: space-between;
	}
`;

export const CarouselText = styled.div`
	font-size: 1.5em;
	text-align: center;
	flex: 1;
`;