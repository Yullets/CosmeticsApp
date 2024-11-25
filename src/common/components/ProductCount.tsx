import "./ProductCount.css"

function ProductCount({count, increase, decrease, changeValue, id}: {count: number, increase: (id: number) => void, decrease: (id: number) => void, changeValue: (id: number, value: number) => void, id: number}) {
    return (
        <div className={"count"}>
            <div className={"countBox"}>
                <input onChange={(e)=>{changeValue(id, +((e.target as HTMLInputElement).value));}} type="number" className={"countInput"} value={count}/>
            </div>
            <div className={"countControls"}>
                <button className={"countUp"} onClick={()=>{increase(id)}}>
                    <img src="img/up.svg" alt="Increase"/>
                </button>
                <button className={"countDown"} onClick={()=>{decrease(id)}}>
                    <img src="img/down.svg" alt="Decrease"/>
                </button>
            </div>
        </div>
    )
}

export default ProductCount;