
export default function FilterComponent({name}:{name:string}){
    return(
        <div className="flex p-2 gap-2">
            <h1>{name}</h1>
            <input type="checkbox"/>
          </div>
    )
}