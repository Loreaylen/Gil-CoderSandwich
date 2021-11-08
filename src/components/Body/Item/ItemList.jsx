import React from "react";
import Item from "../Item/Item"

const ItemList = () => {

    const productos = [
        {id: 1, categoria: "miga", nombre: "Tostado doble de jamón", descripcion: "Sandwich de miga tostado de jamón, queso, tomate y lechuga con pan doble.", precio: 250, imagen: "https://st.depositphotos.com/1027198/2158/i/950/depositphotos_21587691-stock-photo-sandwich-toast.jpg" } ,
        {id: 2, categoria: "baguette", nombre: "Baguette de tocino", descripcion: "Sandwich con tocino, queso y verduras", precio: 280, imagen: "https://static7.depositphotos.com/1004373/776/i/950/depositphotos_7760758-stock-photo-sandwich-with-bacon-and-vegetables.jpg" } ,
        {id: 3, categoria: "miga", nombre: "Sandwich de jamón y cebolla", descripcion: "Sandwich de miga con jamón, queso, tomate, lechuga y cebolla", precio: 220, imagen: "https://st.depositphotos.com/1003272/4352/i/950/depositphotos_43524353-stock-photo-sandwich.jpg" } ,
        {id: 4, categoria: "miga", nombre: "Panini tostado", descripcion: "Sandwich tostado con tomate, queso cheddar y rúcula", precio: 290, imagen: "https://static6.depositphotos.com/1066961/552/i/950/depositphotos_5526915-stock-photo-grilled-panini.jpg" } ,
        {id: 5, categoria: "baguette", nombre: "Baguette de pepino", descripcion: "Sandwich con queso, tomate, lechuga y pepino", precio: 280, imagen: "https://st2.depositphotos.com/2235295/7245/i/950/depositphotos_72455485-stock-photo-sandwich-with-cheese-tomato-cucumber.jpg" } ,
        {id: 6, categoria: "baguette", nombre: "Baguette de jamón crudo", descripcion: "Sandwich con jamón crudo, cebolla, queso y lechuga", precio: 300, imagen: "https://static5.depositphotos.com/1001069/494/i/950/depositphotos_4945366-stock-photo-long-sandwich.jpg" } ,
        {id: 7, categoria: "miga", nombre: "Sandwich BLT", descripcion: "Sandwich de bacon, lechuga y tomate con salsa de ajo", precio: 320, imagen: "https://static4.depositphotos.com/1016418/315/i/950/depositphotos_3158444-stock-photo-blt-sandwich-isolated-clipping-path.jpg" } ,
        {id: 8, categoria: "miga", nombre: "Sandwich de pavo y rúcula", descripcion: "Sandwich de pan negro con pavo, queso y rúcula", precio: 310, imagen: "https://st.depositphotos.com/3220235/4198/i/950/depositphotos_41981285-stock-photo-whole-wheat-healthy-turkey-sandwich.jpg" } 
    ]

   const itemLoaded = new Promise((resolve,reject) => 
            setTimeout(() => resolve(productos), 2000)
   )

    return(
        <div>
        <Item itemLoaded={itemLoaded} />
        </div>
    )
}



export default ItemList;