import FilterComponent from "./filterComponent";
import RangeSliderComponent from "./rangeSliderComponent";

export default function Filter(){
    return(
        <div className="w-2/12 bg-zinc-100 self-start">
          <h1 className="text-center mt-2">Filter</h1>
          <FilterComponent name={'Plants'}/>
          <FilterComponent name={'Accessories'}/>
          <RangeSliderComponent/>
        </div>
    )
}