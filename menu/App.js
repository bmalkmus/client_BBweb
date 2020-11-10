import React from 'react';
import Table from './components/table'
import "./style.css"

const menuData = require('../DATA/menu.json');
console.log(menuData.iceCream.flavors)

function App(){
    return(
        <div>
            <div id="menuInfo">
                    <img src="./images/Broiler Bay-logos_transparent.png" height = "140px" width = "140px" alt="Logo"/>
                    <p>
                        10636 Main St, Bellevue, WA 98004
                        <br/>
                        (425) 646-3474
                    </p>
            </div>
            <div id="menuContext">
                    <div className="menuSection">
                        <h3>1/4 lbs. Hamburgers</h3>
                        <hr/>
                            <Table data={menuData.burgers}/>
                    </div>

                    <div className="menuSection">
                        <h3>Charbroiled Chicken Sandwiches</h3>
                        <hr/>
                            <Table data={menuData.grilledChicken}/>
                    </div>

                    <div className="menuSection">
                        <h3>Other Sandwiches</h3>
                        <hr/>
                            <Table data={menuData.sandwiches}/>
                    </div>

                    <div className="menuSection">
                        <h3>Combos</h3>
                        <hr/>
                            <Table data={menuData.combos}/>
                    </div>

                    <div className="menuSection">
                        <h3>Sides</h3>
                        <hr/>
                            <Table data={menuData.sides}/>
                    </div>

                    <div className="menuSection">
                        <h3>Milk Shakes and Malts</h3>
                        <div id="drinkType">
                            {[...menuData.iceCream.types].map(item=>{
                                return(
                                    <span key={item.name}>
                                        {item.name}: {item.price}
                                    </span>
                                )
                            })}
                        </div>
                        <hr/>

                        <ul>
                            {[...menuData.iceCream.flavors].map(flavor=>{
                                return(
                                    <li key={flavor}>{flavor}</li>
                                )
                            })}
                        </ul>
                    </div>

                    <div className="menuSection">
                        <h3>Extras</h3>
                        <hr/>
                            <Table data={menuData.extras}/>
                    </div>

                    <div className="menuSection">
                        <h3>Drinks</h3>
                        <hr/>
                            <Table data={menuData.drinks}/>
                    </div>
            </div>
        </div>
    )
}
export default App