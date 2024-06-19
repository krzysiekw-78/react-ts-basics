import './App.css'
import goalsImg from './assets/goals.jpg';
import Header from './components/Header.tsx';
import {useState} from 'react';
import CourseGoalList from './components/CourseGoalList.tsx';

export type CourseGoal = {
    title: string;
    description: string;
    id: number;
};

function App() {
    const [goals, setGoals] = useState<CourseGoal[]>([]);

    function handleAddGoal() {
        setGoals((prevGoals) => {
            const updatedGoals = [...prevGoals];
            updatedGoals.push({
                title: 'New goal',
                description: 'New description',
                id: Math.random()
            });
            return updatedGoals;
        });
    }

    function handleDeleteGoal(id: number) {
        setGoals((prevGoals) => {
            return prevGoals.filter(goal => goal.id !== id);
        });
    }

    return (
        <main>
            <Header image={{src: goalsImg, alt: 'A list of goals'}}>
                <h1>Your Course Goals</h1>
            </Header>
            <button onClick={handleAddGoal}>Add goal</button>
            <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal}/>
        </main>
    )
}

export default App
