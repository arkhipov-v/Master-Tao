import classnames from 'classnames'
import cn from 'classnames'

interface IHeadline {
    title: string
    description?: string
    line?: boolean
    lineOrange?: boolean
    lineLeft?: boolean
}

const Headline = ({title, description, line, lineOrange, lineLeft}: IHeadline) => {
    return (
        <div
             className={cn(
                 'headline',
                 line && 'headline--line',
                 lineOrange && 'headline--line-orange',
                 lineLeft && 'headline--left'
             )}
        >
            <h2 className="headline__title h2">{title}</h2>
            <p className="headline__descr">{description}</p>
        </div>
    )
}

export default Headline;