import { useCallback, useState } from "react";
import { MyTitle } from "./ui/MyTitle";
import { MySubtitle } from "./ui/MySubtitle";

export const MemoHook = () => {
    const [title, setTitle] = useState("Mi titulo");
    const [subtitle, setSubtitle] = useState("Mi subtitulo");

    const handleCall = useCallback(() => {
        console.log("Llamada a funcion", subtitle);
    }, [subtitle]);

    return (
        <div className='bg-gradient flex flex-col gap-4'>
            <h1 className='text-2xl font-thin text-white'>Memo App</h1>

            <MyTitle title={title} />
            <MySubtitle subtitle={subtitle} call={handleCall} />

            <button
                className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'
                onClick={() => setTitle("Nuevo Titulo")}
            >
                Crear titulo
            </button>
            <button
                className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'
                onClick={() => setSubtitle("Nuevo Subtitulo")}
            >
                Crear subtitulo
            </button>
        </div>
    );
};
