import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
      <form action="submit">
        <fieldset>
          <legend>Add new product</legend>

          <label htmlFor="name">Name: </label>
          <input type="text" id="name" />
          <br />

          <label htmlFor="photo">Photo: </label>
          <input type="file" id="photo" />
          <br />

          <label htmlFor="category">Category: </label>
          <select id="category">
            <option value="Bakery and bread">Bakery and bread</option>
            <option value="Meat and seafood">Meat and seafood</option>
            <option value="Pasta and rice">Pasta and rice</option>
            <option value="Oils, sauces, salad dressings and condiments">
              Oils, sauces, salad dressings and condiments
            </option>
            <option value="Cereals and breakfast foods">
              Cereals and breakfast foods
            </option>
          </select>
          <br />

          <label htmlFor="price">Price: </label>
          <input type="number" id="price" />
          <br />

          <label htmlFor="description">Description: </label>
          <input type="text" id="description" />
          <br />

          <input type="submit" value="Add product" />
        </fieldset>
      </form>
    );
  }
}

export default Main;
