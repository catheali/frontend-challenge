import { FilterContext } from "@/contexts/filters/filter-context";
import { useContext } from "react";

export function useFilter(){
	return useContext(FilterContext)
}