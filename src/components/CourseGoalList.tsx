import CourseGoal from './CourseGoal';
import {type CourseGoal as CourseGoalProps} from '../App';

type CourseGoalListProps = {
    goals: CourseGoalProps[];
    onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({goals, onDeleteGoal}: CourseGoalListProps) {
    return (
        <ul>
            {goals.map((goal) => (
                <li key={goal.id}>
                    <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
                        {goal.description}
                    </CourseGoal>
                </li>

            ))}
        </ul>
    )
}