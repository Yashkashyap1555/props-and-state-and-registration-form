import FirstComponent from "../component/firstcomponent"

const { useState } = require("react")

const FirstPage = () => {
    const [data, setData] = useState("monu")
    console.log(data)
    // const change = () => {
    //     setData("singh")
    //     // console.log(setData)
    // }
    return(
        <div>
            Hello boys
            <div>
                {data}
                {/* <button onClick={change}>click me</button> */}
                <FirstComponent data = {data} setData = {setData}/>
            </div>
        </div>
    )
}
export default FirstPage