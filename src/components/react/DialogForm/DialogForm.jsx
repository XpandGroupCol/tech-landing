import { useState } from "react";
import Screen01 from "./Screen01";
import Screen02 from "./Screen02";
import Screen03 from "./Screen03";
import Screen04 from "./Screen04";
import Screen05 from "./Screen05";
import axios from 'axios';

export default function DialogForm({ showDialog }) {
    const [curScreen, setCurScreen] = useState(1)
    const [isDialogOpen, setIsDialogOpen] = useState(true)
    const [textButton, setTextButton] = useState("Siguiente")
    const [errorMsj, setErrorMsj] = useState("")
    const [mensaje, setMensaje] = useState("")
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        acct_name: '',
        presupuesto_tech: '',
        tag: 154,
        list: 33
    })

    const closeDialog = () => {
        setCurScreen(1)
        // console.log(isDialogOpen)
        setIsDialogOpen(false)
        setTextButton("Siguiente")
        showDialog(false)
    }

    const onChange = (e) => {
        // console.log(e.target.name, e.target.value)
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const changeScreen = () => {
        if (curScreen === 5) {
            closeDialog()
        } else {
            let isFormComplete = false
            if (curScreen === 1) {
                if (formData.firstname.trim().length === 0) {
                    setErrorMsj("El campo Nombre es obligatorio")
                    return
                }
                if (formData.lastname.trim().length === 0) {
                    setErrorMsj("El campo Apellido es obligatorio")
                    return
                } else
                    isFormComplete = true
            } else if (curScreen === 2) {
                if (formData.email.trim().length === 0) {
                    setErrorMsj("El campo Correo es obligatorio")
                    return
                }
                if (formData.phone.trim().length === 0) {
                    setErrorMsj("El campo WhatsApp es obligatorio")
                    return
                } else
                    isFormComplete = true
            } else if (curScreen === 3) {
                if (formData.acct_name.trim().length === 0) {
                    setErrorMsj("El campo Nombre de tu empresa es obligatorio")
                    return
                } else {
                    isFormComplete = true
                    setTextButton("Enviar")
                }

            } else if (curScreen === 4) {
                if (formData.presupuesto_tech.trim().length === 0) {
                    setErrorMsj("Debes elegir una proyección")
                    return
                } else {
                    createLead()
                    isFormComplete = true
                    setTextButton("Cerrar")
                }
            }

            if (isFormComplete) {
                setErrorMsj("")
                setCurScreen(curScreen + 1)
            }

        }
    }

    const createLead = async () => {
        const { data } = await axios.post(import.meta.env.PUBLIC_APP_ENDPOINT + '/lead', formData)
        // console.log(data)
        setMensaje(data?.msj)
    }

    return (<>
        <div className={`${isDialogOpen ? 'block' : 'hidden'}
        w-full h-full
        fixed top-[0%] left-[0%] z-10 bg-white/90`}>
            <button className="ml-[2%]" onClick={closeDialog}>X</button>

            <div className="grid grid-cols-1 gap-1 lg:gap-3  px-[10%] py-[30vh]">
                {
                    curScreen === 1
                        ? <Screen01 onChange={onChange} />
                        : curScreen === 2
                            ? <Screen02 onChange={onChange} />
                            : curScreen === 3
                                ? <Screen03 onChange={onChange} />
                                : curScreen === 4
                                    ? <Screen04 onChange={onChange} />
                                    : curScreen === 5
                                        ? <Screen05 onChange={onChange} mensaje={mensaje} />
                                        : <></>
                }
                {errorMsj.length > 0 && <p className="text-red-500">{errorMsj}</p>}
                <button className="bg-blue-king text-white rounded-full px-5 py-2" onClick={changeScreen}>{textButton}</button>
            </div>


        </div >
    </>)
}
