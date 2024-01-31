export default function Screen02({ onChange }) {
    return (
        <>
            <div className="mb-4">
                <label htmlFor="email" className="block text-dialog-text font-semibold mb-2"
                >Correo electrónico</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none 
            focus:border-third color-dialog-text bg-dialog-input"
                    // value={formData.cedula}
                    onChange={onChange}

                />
            </div>
            <div className="mb-4">
                <label htmlFor="phone" className="block text-dialog-text font-semibold mb-2"
                >Número de WhatsApp</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none 
            focus:border-third color-dialog-text bg-dialog-input"
                    // value={formData.cedula}
                    onChange={onChange}

                />
            </div>
        </>
    )
}