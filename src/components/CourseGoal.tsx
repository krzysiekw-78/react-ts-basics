import {type PropsWithChildren} from 'react';

// interface CourseGoalProps {
//     title: string;
//     description: string;
//     children: ReactNode;
// }

type CourseGoalProps = PropsWithChildren<{
    title: string;
    description: string;
}>;

export default function CourseGoal({title, description, children}: CourseGoalProps) {
    return (
        <article>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
                {children}
            </div>
            <button>Delete</button>
        </article>
    )
}