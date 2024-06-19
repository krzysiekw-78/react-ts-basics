import './App.css'
import CourseGoal from './components/CourseGoal.tsx';
import goalsImg from './assets/goals.jpg';
import Header from './components/Header.tsx';

function App() {

    return (
        <main>
            <Header image={{src: goalsImg, alt: 'A list of goals'}}>
                <h1>Your Course Goals</h1>
            </Header>
            <CourseGoal title="ABC" description="1234">
                <p>Some text</p>
            </CourseGoal>
        </main>
    )
}

export default App
