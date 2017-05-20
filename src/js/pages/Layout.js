import React from "react";
import {Link} from "react-router";

import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
export default class Layout extends React.Component {

    render() {
        const containerStyle ={
            marginTop : "60px"
        };
        const {location} = this.props;
        return (
            <div>
                <Nav location={location}></Nav>
                <div class="container" style={containerStyle}>
                    <div class="row">
                        <div class="col-lg-12">

                            {this.props.children}

                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        );
    }
}