import React from 'react';
import styled from 'styled-components';
import '../../lib/styles/content.scss';
import $ from 'jquery';
import { Helmet } from 'react-helmet';

export default class Content extends React.Component {
    // constructor(){
    //     super();
    // }

    componentDidMount = () => {
    }

    render(){
        return (
            <>
                <div id="content">
                    <div id="contentBox">{this.props.children}</div>
                </div>
            </>
        )
    }
}