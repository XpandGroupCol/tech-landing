import { useState } from "react";
import Screen01 from "./Screen01";
import Screen02 from "./Screen02";
import Screen03 from "./Screen03";
import Screen04 from "./Screen04";
import axios from 'axios';

export default function DialogForm() {
    const [curScreen, setCurScreen] = useState(1)
    const [isDialogOpen, setIsDialogOpen] = useState(true)
    const [textButton, setTextButton] = useState("Siguiente")
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: 'anfehernandez94@gmail.com',
        phone: '',
        acct_name: '',
        presupuesto_tech: ''
    })

    const closeDialog = () => {
        console.log(isDialogOpen)
        setIsDialogOpen(false)
    }

    const onChange = (e) => {
        console.log(e.target.name, e.target.value)
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const changeScreen = () => {
        createLead()
        return
        if (curScreen === 4) {
            setCurScreen(1)
            setTextButton("Siguiente")
        } else {
            setCurScreen(curScreen + 1)
            if (curScreen === 3)
                setTextButton("Enviar")
        }

    }

    const header = {
        accept: 'application/json',
        'content-type': 'application/json',
        'Api-Token': import.meta.env.API_TOKEN
    };

    const createLead = async () => {
        try {
            // const payload = {
            //     contact: {
            //         firstName: nombre,
            //         email: correo,
            //         phone: telefono,
            //         lastName: apellido
            //     }
            // }

            console.log(import.meta.env.PUBLIC_APP_ENDPOINT + '/contacts?email=' + encodeURIComponent(formData.email))
            const { data = {} } = await axios.get(import.meta.env.PUBLIC_APP_ENDPOINT + '/contacts?email=' + encodeURIComponent(formData.email), header)
            console.log(data)
            return
            const [contact] = data.contacts
            let contactId = contact?.id
            if (!contactId) {
                const { data: user } = await axios.post(options, import.meta.env.PUBLIC_APP_ENDPOINT + '/contacts', payload)
                contactId = user.contact.id
            }
            if (!contactId) res.status(500).json({ error: "No se creo el usuario en Campaña", success: false });
            const dataTag = await addTag(contactId, 154)
            const dataList = await addContactToList(contactId, 33)
        } catch (err) {
            console.error(err.response?.data?.errors)
        }
    }

    const addTag = async (id, id_tag) => {
        try {
            const payload = {
                contactTag: { contact: id, tag: id_tag }
            }
            const { data } = await axios.post(options, import.meta.env.PUBLIC_APP_ENDPOINT + '/contactTags', payload)
            return data
        } catch (e) {
            return Promise.reject(e)
        }
    }

    const addContactToList = async (id, id_list) => {
        try {
            const { data } = await axios.post(options, import.meta.env.PUBLIC_APP_ENDPOINT + '/contactLists', {
                contactList: {
                    list: id_list,
                    contact: id,
                    status: 1
                }
            })
            return data
        } catch (e) {
            return Promise.reject(e)
        }
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
                                    : <Screen01 onChange={onChange} />
                }
                <button className="bg-blue-king text-white rounded-full px-5 py-2" onClick={changeScreen}>{textButton}</button>
            </div>


        </div >
    </>)
}
