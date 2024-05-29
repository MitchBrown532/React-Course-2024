import { useState } from "react"
import Dropdown from "./components/Dropdown"


function App() {
    const [selection, setSelection] = useState(null)

    const handleSelect = (option) => {
        setSelection(option)
    }

    const options = [
        { label: "Red Thing", value: "red" },
        { label: "Blue Thing", value: "blue" },
        { label: "Green Thing", value: "green" },
    ]



    return (
        <div>
            <Dropdown
                options={options}
                value={selection}
                onChange={handleSelect} />
            <Dropdown
                options={options}
                value={selection}
                onChange={handleSelect} />
            <Dropdown
                options={options}
                value={selection}
                onChange={handleSelect} />
        </div>
    )
}

export default App