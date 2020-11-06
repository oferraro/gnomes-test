import React from 'react';
import './App.css';

class App extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {gnomes: [], didFetch: false}; // TODO: Add gnomo type
  }

  componentDidMount() {
    if (!this.state.didFetch) {
      console.log('fetch');
      fetch(`${window.location.href}data/data.json`)
          .then(res => res.json())
          .then(results => {
            let allGnomes: any[] = [];
            results.Brastlewark.forEach((result: any) => { // TODO: use type here
              allGnomes.push(result);
            });
            this.setState({gnomes: allGnomes});
          }).finally(() => {
        this.setState({didFetch: true});
      });
    }
  }

  render() {

    return (
        <div className="App">
          here
        {
          this.state.gnomes.map((gnome: any) => {
            return <div>
              id: {gnome.id} <br />
              name: {gnome.name}  <br />
              thumbnail: {gnome.thumbnail}  <br />
              age: {gnome.age}  <br />
              weight: {gnome.weight}  <br />
              height: {gnome.height}  <br />
              hair_color: {gnome.hair_color}  <br />
              professions":["Metalworker","Woodcarver","Stonecarver"," Tinker","Tailor","Potter"],
              "friends":["Cogwitz Chillwidget","Tinadette Chillbuster
              <hr />
            </div>
          })
        }
        </div>
    );
  }
}

export default App;
