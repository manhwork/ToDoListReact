import { Edit2, Trash2 } from "lucide-react";
import { Button } from "./ui/button";

type TasklistProps = {
    tasks: string[];
    onHandleDelete: (index: number) => void;
};

export default function Tasklist({ tasks, onHandleDelete }: TasklistProps) {
    return (
        <>
            {tasks.map((task, index) => (
                <div
                    key={index}
                    className="inner-btn flex w-full items-center pb-2 text-left"
                >
                    <Button
                        className="text-left w-full mr-3"
                        variant={"outline"}
                    >
                        {task}
                    </Button>
                    <Button className="mr-1" variant={"outline"}>
                        <Edit2 className="h-4 w-4"></Edit2>
                    </Button>
                    <Button variant={"destructive"}>
                        <Trash2 onClick={() => onHandleDelete(index)}></Trash2>
                    </Button>
                </div>
            ))}
        </>
    );
}
