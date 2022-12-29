import classnames from 'classnames'
import cn from 'classnames'
import {ReactNode} from "react";

interface IHeadline {
    title: ReactNode | string
    description?: string
    line?: boolean
    lineOrange?: boolean
    lineLeft?: boolean
    className?: string
}

const Headline = ({title, description, line, lineOrange, lineLeft, className}: IHeadline) => {
    return (
        <div
             className={cn(
                 'headline',
                 className,
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