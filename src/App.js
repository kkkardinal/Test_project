import logo from './logo.svg';
import { useState, useEffect } from 'react';

import Header from "./components/Headerr/Header";
import MainContent from "./components/mainContent/mainContent";
import './App.css';

const arrayBlock =[
    {
    nameItem: 'Кроссовки',
        model:'Адидас'
},
    {
        nameItem: 'Кроссовки 1',
        model:'Адидас 1 '
    },
    {
        nameItem: 'Кроссовки 2',
        model:'Адидас 2'
    },
];

function App() {
    const [inputValueSearch, setValue] = useState('');

    const [items, setItems] = useState([]);

    const onItemsSearch = (e)=>{
        const {value} = e.target;
        setValue(value);
        const itemsAfterFilter = arrayBlock.filter(({nameItem})=>
            (nameItem.toLowerCase().includes(value.toLowerCase()))
        );

        setItems(itemsAfterFilter);

        console.log(itemsAfterFilter);
    }
    useEffect(()=> {
        setTimeout(()=> setItems(arrayBlock), 2000)

        }, [])
    console.log(items);


  return (

    <div className="App">

        <Header onChangeValueUser={onItemsSearch}
                inputValueSearch={inputValueSearch}/>
        <MainContent arrayBlock={items}/>


{
    items.length===0 && (

        <div>
            <div className="lds-heart">
                <div>


                </div>
            </div>
        </div>
    )

}

    </div>
  );
}

export default App;
