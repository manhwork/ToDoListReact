import { Edit2, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

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
                    <Input
                        value={task}
                        type="text"
                        className="text-left w-full mr-3"
                    ></Input>
                    <Button className="mr-1" variant={"outline"}>
                        <Edit2 className="h-4 w-4"></Edit2>
                    </Button>
                    <Button
                        onClick={() => onHandleDelete(index)}
                        variant={"destructive"}
                    >
                        <Trash2></Trash2>
                    </Button>
                </div>
            ))}
        </>
    );
}
