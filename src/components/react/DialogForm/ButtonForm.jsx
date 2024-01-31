
import { useState } from "react";
import DialogForm from "../DialogForm/DialogForm";

export default function ButtonForm({ style, text }) {
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const showDialog = (value) => {
        setIsDialogOpen(value)
    }

    return (
        <>
            {isDialogOpen && <DialogForm showDialog={showDialog} />}
            <button className={style} onClick={() => showDialog(true)}>{text}</button>
        </>
    )
}