import styled from "styled-components";

export const Encabezado = styled.div`
		display:flex;
		align-items: center;
		justify-content: center;
		width:100%;
		height:50px;
		margin:0 0 50px 0;
		background-color: ${(props)=>props.backgroundColor};
`;