import '../../App.css';


function MainContent ({arrayBlock}){


    return(
        <main className="shop-items-wrapper">
            {/*<div className="shop-items" >
                <p className="shop-title" >Кроссовки</p>
                <p className="shop-title">adidas</p>
            </div>

            <div className="shop-items">
                <p className="shop-title">Кроссовки</p>
                <p className="shop-title">adidas</p>
            </div>
            <div className="shop-items">
                <p className="shop-title">Кроссовки</p>
                <p className="shop-title">adidas</p>
            </div>
*/}
            {
                arrayBlock.map((item, index)=>(
                    <div className="shop-items" key={item.nameItem}>
                        <p className="shop-title" key={item.nameItem}>Кроссовки</p>
                        <p className="shop-title" key={item.model}>adidas</p>
                    </div>
                ))

            }

        </main>
    );
}
export default MainContent;