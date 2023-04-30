import React, { useState } from "react";
import './Store.css'
import IconSwitch from "../IconSwitch/IconSwitch";
import products from "../../data/products";
import CardsView from "../CardsView/CardsView";
import ListView from "../ListView/ListView";


function Store() {
   const [view, setView] = useState('view_list');
   const views = ['view_list', 'view_module']
   const onViewSwitch = () => {
      setView(views[views.indexOf(view) + 1] ?? views[0])
   }

   CardsView.defaultProps
   return (
      <div className="store">
         <IconSwitch view={view} onViewSwitch={onViewSwitch}/>
         {view === 'view_list' ? <CardsView products={products} /> : <ListView products={products} />}
      </div>
   )
}

export default Store;