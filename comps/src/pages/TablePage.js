import Table from "../components/Table";


function TablePage() {
    const data = [
        { name: "Orange", color:"bg-orange-500", score:5 },
        { name: "Apple", color:"bg-red-500", score:4 },
        { name: "Banana", color:"bg-yellow-500", score:3 },
        { name: "Lime", color:"bg-green-500", score:2 },
    ]

    const config = [
        { 
            label: 'Fruits',
            render: (fruit) => fruit.name,
            sort: (a,b) => {return a.localeCompare(b)}
        },
        { 
            label: 'Color',
            render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`} />
        },
        { 
            label: 'Score',
            render: (fruit) => fruit.score,
            sort: (a,b) => {return a-b}
        },
    ]

    const keyFn = (fruit) => {
        return fruit.name
    }

    return(
        <Table data={data} config={config} keyFn={keyFn} />
    )
}

export default TablePage