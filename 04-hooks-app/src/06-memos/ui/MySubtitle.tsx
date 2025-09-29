import React from "react";

interface Props {
    subtitle: string;
    call: () => void;
}

export const MySubtitle = React.memo(({ subtitle, call }: Props) => {
    console.log("Renderizando MySubtitle");
    return (
        <>
            <h6>{subtitle}</h6>
            <button
                className='bg-indigo-500 text-white px-4 py-2 rounded-md cursor-pointer'
                onClick={call}
            >
                Llamar a funcion
            </button>
        </>
    );
});
