import { useState } from "react";


export default function Screen04({ onChange }) {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (event) => {
        onChange(event)
        setSelectedOption(event.target.value);
    };

    return (
        <>
            <div className="mb-4">
                <div className="flex flex-col space-y-2">
                    <h2>Cuentanos tu proyección de inversión para este proyecto</h2>
                    <label className="inline-flex items-center">
                        <input
                            className="form-radio text-indigo-600"
                            type="radio"
                            name="presupuesto_tech"
                            value="1.000.000 a 4.000.000"
                            checked={selectedOption === '1.000.000 a 4.000.000'}
                            onChange={handleOptionChange}
                        />
                        $ 0 - $ 4.000.000
                    </label>

                    <label className="inline-flex items-center">
                        <input
                            className="form-radio text-indigo-600"
                            type="radio"
                            name="presupuesto_tech"
                            value="4.000.001 a 8.000.000"
                            checked={selectedOption === '4.000.001 a 8.000.000'}
                            onChange={handleOptionChange}
                        />
                        $ 4.000.001 - $ 8.000.000
                    </label>

                    <label className="inline-flex items-center">
                        <input
                            className="form-radio text-indigo-600"
                            type="radio"
                            name="presupuesto_tech"
                            value="8.000.001 a 12.000.000"
                            checked={selectedOption === '8.000.001 a 12.000.000'}
                            onChange={handleOptionChange}
                        />
                        $ 8.000.001 - $ 12.000.000
                    </label>

                    <label className="inline-flex items-center">
                        <input
                            className="form-radio text-indigo-600"
                            type="radio"
                            name="presupuesto_tech"
                            value="12.000.000 o más"
                            checked={selectedOption === '12.000.000 o más'}
                            onChange={handleOptionChange}
                        />
                        Más de $ 12.000.000
                    </label>


                    <p>Selected Option: {selectedOption}</p>
                </div>




            </div>
        </>
    )
}