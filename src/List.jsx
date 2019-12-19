import React, {Component} from 'react';

class List extends Component {
  constructor(props){
    super(props);
  }

  renderList() {
    console.log(this.props.sort);
    const items = this.props.items.slice();

    if(this.props.sort == "Sort: Score"){
      items.sort(function(a, b) {return b.props.score - a.props.score});
    }

    const items2 = items.map(item => {
      return <li key={item.props.name}>{item}</li>
    });
    return items2;
  }

  render() {
    return (
      <ul className="thelist">
        {this.renderList()}
      </ul>
    );
  }
}

export default List;
