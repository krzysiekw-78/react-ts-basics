import './App.css'
import CourseGoal from './components/CourseGoal.tsx';

function App() {

    return (
        <main>
            <CourseGoal title="ABC" description="1234">
                <p>Some text</p>
            </CourseGoal>
        </main>
    )
}

export default App
