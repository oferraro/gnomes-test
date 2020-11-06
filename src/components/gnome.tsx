import React from "react";
import {IGnome} from "../interfaces/gnome";
import "./gnome.scss";
import {showProperty} from "./showProperty";

interface GnomeState {
    showDetails: string;
}

interface GnomeProps {
    gnome: IGnome,
    filter: string
}

export class Gnome extends React.Component<GnomeProps, GnomeState> {

    constructor(props: GnomeProps) {
        super(props);
        this.state = {showDetails: ''};
    }

    formatStrings(professionsList: string[]) {
        return professionsList.join(', ');
    }

    setActive(gnomeId: number) {
        const newState = (`gnome-${gnomeId}` === this.state.showDetails)
            ? '' : `gnome-${gnomeId}`;
        this.setState({...this.state, showDetails: newState});
    }

    render() {
        return <>
            <div key={this.props.gnome.id} className="gnome-card">
                <div>
                    <img src={this.props.gnome.thumbnail} className="gnome-pic" />
                </div>
                <div>
                    <strong> {this.props.gnome.name} </strong>
                </div>
                {showProperty({title: 'Age', data: this.props.gnome.age})}
                {showProperty({title: 'Weight', data: this.props.gnome.weight.toFixed(2)})}
                {showProperty({title: 'Height', data: this.props.gnome.height.toFixed(2)})}
                {showProperty({title: 'Hair Color', data: this.props.gnome.hair_color})}

                <div onClick={() => this.setActive(this.props.gnome.id)}>
                    <u className="with-pointer">Show Details</u>
                    <div className={ this.state.showDetails === `gnome-${this.props.gnome.id}` ? '' : 'hidden'}>
                        {showProperty({title: 'Professions', data: this.formatStrings(this.props.gnome.professions)})}
                        {showProperty({title: 'Friends', data: this.formatStrings(this.props.gnome.friends)})}
                    </div>
                </div>
            </div>
        </>
    }
}


