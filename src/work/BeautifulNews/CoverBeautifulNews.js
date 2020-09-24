import React from 'react';
import './BeautifulNews.scss';
import coverImage from './media/BN-portfolio-cover-trans_rights-200705-1153.jpg' 


class CoverBeautifulNews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="CoverBeautifulNews">
                <div className="contained">
                    <img src={coverImage}></img>
                </div>
            </div>
        );
    };
}

export default CoverBeautifulNews;