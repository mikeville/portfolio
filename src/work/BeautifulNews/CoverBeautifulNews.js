import React from 'react';
import './BeautifulNews.scss';


class CoverBeautifulNews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="CoverBeautifulNews">
                <div className="container-inner">
                    Beauitful news cover
                </div>
            </div>
        );
    };
}

export default CoverBeautifulNews;