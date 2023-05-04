import styled from 'styled-components';

export const Box = styled.div`
background: #0097b2;
position: flex;
margin-top: 5vh;
left: 0;
right: 0;
width: 100%;
border-radius: 4px;


@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
`;

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;

`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
grid-gap: 200px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 0px;
margin-top: 15px;
font-size: 12px;
text-decoration: none;

&:hover {
	color: green;
	transition: 200ms ease-in;
}
`;




export const Heading = styled.p`
font-size: 12px;
color: #fff;
margin-bottom: 0px;
font-weight: bold;
`;

export const List = styled.p`
font-size: 12px;
margin-top: 10px;
`;