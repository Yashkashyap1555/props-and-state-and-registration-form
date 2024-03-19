const ChildsecondPage = (props) =>{
    console.log(props)
    const {hide, setHide} = props
    
    const Money = () =>{
        setHide(12345566666778000000000000000000000000000000000000000000)
    }

    return(
        <div>
            <button onClick={Money}>shoot</button>
        </div>
    )
}
export default ChildsecondPage