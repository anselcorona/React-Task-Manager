import React from 'react'
class Products extends React.Component {

  constructor(props) {
    super(props);

    //  this.state.products = [];
    this.state = {};
    this.state.products = [
      {
        id: 1,
        category: 'Sporting Goods',
        price: '49.99',
        qty: 12,
        name: 'Football'
      }, {
        id: 2,
        category: 'Sporting Goods',
        price: '9.99',
        qty: 15,
        name: 'Baseball'
      }, {
        id: 3,
        category: 'Sporting Goods',
        price: '29.99',
        qty: 14,
        name: 'Basketball'
      }, {
        id: 4,
        category: 'Electronics',
        price: '99.99',
        qty: 34,
        name: 'iPod Touch'
      }, {
        id: 5,
        category: 'Electronics',
        price: '399.99',
        qty: 12,
        name: 'iPhone 5'
      }, {
        id: 6,
        category: 'Electronics',
        price: '199.99',
        qty: 23,
        name: 'Nexu 7'
      }
    ];

  }

  render() {

    return (
      <div>
        <SearchBar/>
        <ProductTable products={this.state.products}/>
      </div>
    );

  }

}
class SearchBar extends React.Component {

  render() {
    return (
      <div>
        <h2>The searchBar</h2>
      </div>

    );
  }

}

class ProductTable extends React.Component {

  render() {
    var product = this.props.products.map(function(product) {
      return (<ProductRow product={product} key={product.id}/>)
    });
    return (
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>price</th>
              <th>quantity</th>
              <th>category</th>
            </tr>
          </thead>
          <tbody>
          { product}

          </tbody>

        </table>
      </div>
    );

  }

}

class ProductRow extends React.Component {

  render() {

    return (
      <tr>
        <EditableCell cellData={{
                "type": "name",
                value: this.props.product.name,
                id: this.props.product.id
              }}/>
            <EditableCell  cellData={{
                type: "price",
                value: this.props.product.price,
                id: this.props.product.id
              }}/>
            <EditableCell  cellData={{
                type: "qty",
                value: this.props.product.qty,
                id: this.props.product.id
              }}/>
            <EditableCell  cellData={{
                type: "category",
                value: this.props.product.category,
                id: this.props.product.id
              }}/>
      </tr>
    );

  }

}
class EditableCell extends React.Component {

  render() {
    return (
      <td>
        <h6>{this.props.cellData.value}</h6>
      </td>
    );

  }

}
export default Products;