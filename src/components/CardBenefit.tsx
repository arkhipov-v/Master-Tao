export interface ICardBenefit {
    image: string
    title: string
}

// interface CardBenefitProps {
// icon: string
// title: string
// }


// export interface CardBenefitProps extends ICardBenefit{
//
// }

// function CardBenefit ({}: CardBenefitProps) {
function CardBenefit ({image,title}: ICardBenefit) {
    return (
        <div className="card-benefit">
            <div className="card-benefit__icon">
                <img src={`/img/icons/${image}.svg`} alt="{benefit.title}"/>
            </div>
            <div className="card-benefit__title">{title}</div>
        </div>
    )
}

export default CardBenefit;


// TODO Допустимо оставлять интерфейсы в компоненте? Лучше хранить интерфейсы в одном файле или для каждого свой?