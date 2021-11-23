import styled from "styled-components";

export const Button = styled.button`
		font-weight: 800;
		width:16rem;
		height:2.7rem;
		border-radius:10px;
		margin:10px;
		border-color:black;
		background-color: ${(props)=>props.backgroundColor};
`;