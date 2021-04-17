import '../../App.css';


    function Header ({onChangeValueUser}){
        const changeUserValue=(e)=>{
            const{value} = e.target;
            onChangeValueUser(value);
        }

    return(

<header className="header">

    <input type="text" className="search-input"
onChange={(e)=>setValue(e.target.value)}>

</input>
</header>
    );
}