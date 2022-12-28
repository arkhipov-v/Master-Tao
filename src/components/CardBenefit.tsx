import {IBenefit} from "../models/models";

function CardBenefit ({icon,title}: IBenefit) {
    return (
        <div className="card-benefit">
            <div className="card-benefit__icon">
                <img src={`/img/icons/benefits/${icon}.svg`} alt={typeof title === 'string' ? title : ''}/>
            </div>
            <div className="card-benefit__title">{
              typeof title === 'string' ? title: title()
            }</div>
        </div>
    )
}

export default CardBenefit;
