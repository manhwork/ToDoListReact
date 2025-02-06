import { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import Tasklist from "./components/TaskList";
import TaskInput from "./components/TaskInput";

function App() {
    const [tasks, setTasks] = useState<string[]>([]);

    const addTasks = (task: string) => {
        setTasks([...tasks, task]);
    };

    function handleDelete(index: number) {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    }

    return (
        <div className="flex justify-center items-center pt-[100px]">
            <Card className="w-[500px]">
                <TaskInput onAddTasks={addTasks}></TaskInput>
                <CardContent>
                    {tasks.length > 0 ? (
                        <Tasklist
                            tasks={tasks}
                            onHandleDelete={handleDelete}
                        ></Tasklist>
                    ) : (
                        <h1 className="text-xl">Chưa có task được thêm vào </h1>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}

export default App;
