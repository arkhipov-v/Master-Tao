import {IHeadline} from "../models/models";
// import classnames from 'classnames'
// import cn from 'classnames'


function Headline ({...headline}: IHeadline) {
    return (
        <div className="wrapper">
            {/* Add class false*/}
            {/*<div className={`headline ${headline.line && 'headline--line'}`}>*/}
            <div className={`headline 
                ${headline.line ? 'headline--line' : ''}
                ${headline.lineOrange ? 'headline--line-orange' : ''}`}

                 // className={cn(
                 //     'headline',
                 //     headline.line && 'headline--line',
                 //     headline.lineOrange && 'headline--line-orange',
                 // )}
            >
                <h2 className="headline__title h2">{headline.title}</h2>
                <p className="headline__descr">{headline.description}</p>
            </div>
        </div>
    )
}

export default Headline;