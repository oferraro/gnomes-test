import React, {ChangeEvent} from 'react';
import './App.scss';
import {Gnome} from "./components/gnome";
import {IGnome} from "./interfaces/gnome";
import gnomeService from "./services/gnome";

interface AppState {
    filter: string,
    gnomes: IGnome[],
    didFetch: boolean
}

class App extends React.Component<any, AppState> {

  constructor(props: any) {
    super(props);
    this.state = {filter: '', gnomes: [], didFetch: false}; // TODO: Add gnome type
  }

  componentDidMount() {
    if (!this.state.didFetch) {
        gnomeService.getGnomes()
          .then(results => {
            let allGnomes: IGnome[] = [];
            results.Brastlewark.forEach((result: IGnome) => { // TODO: use type here
              allGnomes.push(result);
            });
            this.setState({...this.state, gnomes: allGnomes});
          }).finally(() => {
        this.setState({didFetch: true});
      });
    }
  }

  render() {
    return (
        <div className="App">
            <div className="filter">Filter: <input type="text" onChange={
                (event: ChangeEvent<HTMLInputElement>) => {
                    this.setState({...this.state, filter: event.target.value});
                }} /></div>
            {this.state.gnomes.length === 0 ? <div>Loading data ... </div> :
                <div>{
                    this.state.gnomes.filter((gnome: IGnome) => {
                        return this.state.filter === ''
                                ||  gnome.name.toLowerCase().includes(this.state.filter.toLocaleLowerCase());
                    }).map((gnome: IGnome) => {
                        return <Gnome key={gnome.id} gnome={gnome} filter={this.state.filter} />
                    })}
                </div>
            }
        </div>
    )
  }
}

export default App;
