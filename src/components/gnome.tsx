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

    render() {
        return <>
            <div key={this.props.gnome.id} className="gnome-card">
                <div>
                    <img src={this.props.gnome.thumbnail} className="gnome-pic" />
                </div>
                <strong> {this.props.gnome.name} </strong>
                {
                    // TODO: Use a component fot the thumbnail
                } <br />
                {showProperty({title: 'Age', data: this.props.gnome.age})}
                {showProperty({title: 'Weight', data: this.props.gnome.weight})}
                {showProperty({title: 'Height', data: this.props.gnome.height})}
                {showProperty({title: 'Hair Color', data: this.props.gnome.hair_color})}

                <div onClick={() => {
                    const newState = (`gnome-${this.props.gnome.id}` === this.state.showDetails)
                        ? '' : `gnome-${this.props.gnome.id}`;
                    this.setState({...this.state, showDetails: newState});
                }}>
                    <u className="with-pointer">Show Details</u>
                    <div className={ this.state.showDetails === `gnome-${this.props.gnome.id}` ? '' : 'hidden'}>
                        <strong>professions</strong>: {
                            this.formatStrings(this.props.gnome.professions)
                        } <br />
                        <strong>friends</strong>: {
                            this.formatStrings(this.props.gnome.friends)
                        }
                    </div>
                </div>
            </div>
        </>
    }
}


