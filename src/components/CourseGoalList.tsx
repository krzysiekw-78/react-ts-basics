import CourseGoal from './CourseGoal';
import {type CourseGoal as CourseGoalProps} from '../App';

type CourseGoalListProps = {
    goals: CourseGoalProps[];
};

export default function CourseGoalList({goals}: CourseGoalListProps) {
    return (
        <ul>
            {goals.map((goal) => (
                <li key={goal.id}>
                    <CourseGoal title={goal.title}>
                        {goal.description}
                    </CourseGoal>
                </li>

            ))}
        </ul>
    )
}