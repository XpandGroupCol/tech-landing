export default function Screen03({ onChange }) {
    return (
        <>
            <div className="mb-4">
                <label htmlFor="acct_name" className="block text-dialog-text font-semibold mb-2"
                >Nombre de tu empresa</label>
                <input
                    type="text"
                    id="acct_name"
                    name="acct_name"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none 
            focus:border-third color-dialog-text bg-dialog-input"
                    // value={formData.cedula}
                    onChange={onChange}

                />
            </div>
        </>
    )
}