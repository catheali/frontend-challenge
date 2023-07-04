import { useFilter } from "@/hooks/useFilter";
import { FilterType } from "@/types/filter/filter-types";
import {styled} from "styled-components";

interface FilterItemProps {
	selected: boolean;
}

const FilterList = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	gap:40px;
	list-style:none;
`

const FilterItems = styled.li<FilterItemProps>`
	color: var(--text-dark-input);
	text-align: center;
	font-size: 16px;
	font-family: inherit;
	font-style: normal;
	font-weight: ${props=>props.selected  ? '600' : '400'};
	line-height: 22px;
	text-transform: uppercase;
	cursor: pointer;


	border-bottom:${props=> props.selected ? '4px solid var(--others-orange)':'none' };
`

export function FilterByType(){
	const {type, setType} = useFilter();
	const handleChangeType = (value: FilterType) => {
		setType(value);
	}
	return(
		<FilterList>
			<FilterItems selected={type === FilterType.ALL} onClick={()=> handleChangeType(FilterType.ALL)}>
				Todos os Produtos
			</FilterItems>
			<FilterItems selected={type === FilterType.SHIRTS} onClick={()=> handleChangeType(FilterType.SHIRTS)}>
				Camisetas
			</FilterItems>
			<FilterItems selected={type === FilterType.MUGS} onClick={()=> handleChangeType(FilterType.MUGS)}>
				Canecas
			</FilterItems>
		</FilterList>
	)
}