import { styled } from "styled-components";
import { ArrowIcon } from "../icons/arrow-icon";
import { useState } from "react";
import { useFilter } from "@/hooks/useFilter";
import { PriorityTypes } from "@/types/filter/priority-types";

interface FilterByPriorityProps {

}

const FilterContainer = styled.div`
	display:flex;
	align-items: center;
	position: relative;

	button {
		border: none;
		font-family: inherit;
		background: var(--bg-primary);
		color: var(--text-dark);
		font-size: 14px;
		font-weight: 400;
		line-height: 22px; 
		cursor: pointer;

		display: flex;
		align-items: center;
		justify-content: center;

		
	}
`
const PriorityFilter = styled.ul`
	border-radius: 4px;
	background: var(--bg-primary);
	box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.10);
	padding: 16px 12px;
	list-style: none;
	flex-direction: column;
	width: 180px;
	position: absolute;
	top: 100%;
	z-index: 999;
	right:8px;

	li:hover{
		background: var(--shapes);
		color: var(--text-darker);
	}

	li{
		color: var(--text-dark);
		cursor: pointer;
	}

	li+li{
		margin-top: 4px;
	}
`


export function FilterByPriority(props: FilterByPriorityProps){
	const [isOpen, setIsOpen] = useState(false)
	const {setPriority} = useFilter()
	const handleOpen = () => setIsOpen(prev => !prev)
	const handleUpdatePriority = (value: PriorityTypes) => {
		 setPriority(value);
	}
	
	return(
		<FilterContainer>
			<button onClick={handleOpen} >Organizar por 
				<ArrowIcon/>
			</button>
			{isOpen && 
			<PriorityFilter>
				<li onClick={()=>handleUpdatePriority(PriorityTypes.NEWS)} >Novidades</li>
				<li onClick={()=>handleUpdatePriority(PriorityTypes.BIGGEST_PRICE)}>Preço: Maior - menor</li>
				<li onClick={()=>handleUpdatePriority(PriorityTypes.MINOR_PRICE)}>Preço: Menor - maior</li>
				<li onClick={()=>handleUpdatePriority(PriorityTypes.POPULARITY)}>Mais vendidos</li>
			</PriorityFilter>
				}
		</FilterContainer>
	)
}