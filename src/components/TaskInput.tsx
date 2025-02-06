import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";

type TaskInputProps = {
    onAddTasks: (task: string) => void;
};

export default function TaskInput(props: TaskInputProps) {
    const [task, setTask] = useState<string>("");
    const focusInput = useRef<HTMLInputElement>(null);
    const { onAddTasks } = props;

    function handleButton() {
        if (task.trim() !== "") {
            onAddTasks(task);
            setTask("");
            if (focusInput.current) {
                focusInput.current.focus();
            }
        }
    }

    return (
        <div>
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
                        <Button type="submit" onClick={() => handleButton()}>
                            +
                        </Button>
                    </div>
                </CardTitle>
            </CardHeader>
        </div>
    );
}
