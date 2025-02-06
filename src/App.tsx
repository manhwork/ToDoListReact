import { useRef, useState } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Input } from "./components/ui/input";
import Tasklist from "./components/Tasklist";

function App() {
    const [task, setTask] = useState<string>("");
    const [tasks, setTasks] = useState<string[]>([]);
    const focusInput = useRef<HTMLInputElement>(null);

    function handleButton() {
        if (task.trim() !== "") {
            setTasks([...tasks, task]);
            setTask("");
            if (focusInput.current) {
                focusInput.current.focus();
            }
        }
    }

    function handleDelete(index: number) {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    }

    return (
        <div className="flex justify-center items-center pt-[100px]">
            <Card className="w-[500px]">
                <CardHeader>
                    <CardTitle>
                        <h1 className="text-[30px] font-bold ">Todo List</h1>
                        <div className="flex w-full pt-[20px] items-center ">
                            <Input
                                ref={focusInput}
                                className="mr-3"
                                type="email"
                                placeholder="Task..."
                                value={task}
                                onChange={(e) => setTask(e.target.value)}
                            />
                            <Button
                                type="submit"
                                onClick={() => handleButton()}
                            >
                                +
                            </Button>
                        </div>
                    </CardTitle>
                </CardHeader>
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
