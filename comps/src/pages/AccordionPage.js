import Accordion from '../components/Accordion'


function AccordionPage() {
    const items = [
        {
            id: 1,
            label:'Can I use react',
            content: 'Yes you can'
        },
        {
            id: 2,
            label:'Can I use  JS',
            content: 'Sure you can'
        },
        {
            id: 3,
            label:'Can I use C++',
            content: 'Please do not'
        },
    ]

    return (
        <div>
            <Accordion items={items} />
        </div>
    )
}

export default AccordionPage