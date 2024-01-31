export default function Screen01({ onChange }) {
    return (
        <>
            <form>
                <div className="mb-4">

                    <label htmlFor="firstname" className="block text-dialog-text font-semibold mb-2"
                    >Nombre</label>
                    <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none 
            focus:border-third color-dialog-text bg-dialog-input"
                        // value={formData.cedula}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="lastname" className="block text-dialog-text font-semibold mb-2"
                    >Apellido</label>
                    <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none 
            focus:border-third color-dialog-text bg-dialog-input"
                        // value={formData.cedula}
                        onChange={onChange}

                    />
                </div>
            </form>
        </>
    )
}