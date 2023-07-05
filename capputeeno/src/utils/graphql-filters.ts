import { PriorityTypes } from './../types/filter/priority-types';
import { FilterType } from "@/types/filter/filter-types";

export function getCategoryType(type: FilterType) {
	if( type === FilterType.MUGS) return "mugs"
	if(type === FilterType.SHIRTS) return "t-shirts"
	return ""
}

export function getFieldPriority(priority: PriorityTypes){
	if(priority === PriorityTypes.NEWS) return {field: "created_at", order: "ASC"}
	if(priority === PriorityTypes.BIGGEST_PRICE) return {field: "price_in_cents", order: "DSC"}
	if(priority === PriorityTypes.MINOR_PRICE) return {field: "price_in_cents", order: "ASC"}
	return {field:"sales", order: "ASC"}
}